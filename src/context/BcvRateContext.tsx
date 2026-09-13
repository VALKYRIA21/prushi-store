import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { fetchBcvUsdRate, type BcvRate } from '../services/bcvRate';

interface BcvRateContextType {
  rate: BcvRate | null;
  loading: boolean;
  error: string | null;
}

const BcvRateContext = createContext<BcvRateContextType | undefined>(undefined);

export function BcvRateProvider({ children }: { children: ReactNode }) {
  const [rate, setRate] = useState<BcvRate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchBcvUsdRate()
      .then((data) => {
        if (!cancelled) {
          setRate(data);
          setError(null);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error al cargar tasa BCV');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <BcvRateContext.Provider value={{ rate, loading, error }}>
      {children}
    </BcvRateContext.Provider>
  );
}

export function useBcvRate() {
  const context = useContext(BcvRateContext);
  if (!context) {
    throw new Error('useBcvRate must be used within a BcvRateProvider');
  }
  return context;
}
