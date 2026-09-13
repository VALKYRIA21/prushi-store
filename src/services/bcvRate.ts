const BCV_HISTORY_BASE = 'https://bcv.today/api/v1/history';
const BCV_LATEST_URL = 'https://bcv.today/api/v1/rate.json';
const CACHE_KEY = 'prushi_bcv_usd';
const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hora

export interface BcvRate {
  usd: number;
  effectiveDate: string;
  fetchedAt: number;
}

interface BcvApiEntry {
  USD?: number;
  effective_date?: string;
  date?: string;
}

function toYmd(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function readCache(): BcvRate | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as BcvRate;
    if (!parsed?.usd || !parsed.fetchedAt) return null;
    if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(rate: BcvRate) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(rate));
  } catch {
    // ignore quota / private mode
  }
}

async function fetchDay(ymd: string): Promise<BcvRate | null> {
  const res = await fetch(`${BCV_HISTORY_BASE}/${ymd}.json`);
  if (!res.ok) return null;
  const data = (await res.json()) as BcvApiEntry;
  if (typeof data.USD !== 'number' || !Number.isFinite(data.USD)) return null;
  return {
    usd: data.USD,
    effectiveDate: data.effective_date || data.date || ymd,
    fetchedAt: Date.now(),
  };
}

/**
 * El BCV suele publicar la tasa del próximo día hábil con antelación
 * (p. ej. el viernes publica la del martes). `rate.json` a veces queda
 * atrasado; por eso miramos un rango de fechas y usamos la más reciente.
 */
export async function fetchBcvUsdRate(): Promise<BcvRate> {
  const cached = readCache();
  if (cached) return cached;

  const candidates: BcvRate[] = [];
  const today = new Date();

  // Adelante 5 días + atrás 10 (fines de semana / feriados)
  const requests: Promise<BcvRate | null>[] = [];
  for (let offset = 5; offset >= -10; offset--) {
    const day = new Date(today);
    day.setDate(today.getDate() + offset);
    requests.push(fetchDay(toYmd(day)).catch(() => null));
  }

  const results = await Promise.all(requests);
  for (const result of results) {
    if (result) candidates.push(result);
  }

  if (candidates.length === 0) {
    const res = await fetch(BCV_LATEST_URL);
    if (!res.ok) throw new Error('No se pudo obtener la tasa BCV');
    const data = (await res.json()) as BcvApiEntry;
    if (typeof data.USD !== 'number') throw new Error('Respuesta BCV inválida');
    const fallback: BcvRate = {
      usd: data.USD,
      effectiveDate: data.effective_date || data.date || toYmd(today),
      fetchedAt: Date.now(),
    };
    writeCache(fallback);
    return fallback;
  }

  candidates.sort((a, b) => b.effectiveDate.localeCompare(a.effectiveDate));
  const latest = { ...candidates[0], fetchedAt: Date.now() };
  writeCache(latest);
  return latest;
}

export function formatBolivares(amount: number): string {
  return new Intl.NumberFormat('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
