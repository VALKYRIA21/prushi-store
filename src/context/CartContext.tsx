import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

/* ═══ Types ═══ */
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  icon: string; // Lucide icon name
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserData {
  name: string;
  address: string;
  note: string;
  paymentMethod: string;
  isGift: string;
}

interface CartContextType {
  cart: CartItem[];
  userData: UserData;
  isDrawerOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  setUserData: (data: UserData) => void;
  toggleDrawer: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  totalItems: number;
  totalPrice: number;
}

/* ═══ Context ═══ */
const CartContext = createContext<CartContextType | undefined>(undefined);

/* ═══ Provider ═══ */
export function CartProvider({ children }: { children: ReactNode }) {
  // Inicializar carrito desde localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('prushi_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Inicializar datos de usuario desde localStorage
  const [userData, setUserDataState] = useState<UserData>(() => {
    const savedUser = localStorage.getItem('prushi_user');
    return savedUser ? JSON.parse(savedUser) : { name: '', address: '', note: '', paymentMethod: '', isGift: 'No' };
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Persistir cambios en el carrito
  useEffect(() => {
    localStorage.setItem('prushi_cart', JSON.stringify(cart));
  }, [cart]);

  // Persistir cambios en los datos del usuario
  useEffect(() => {
    localStorage.setItem('prushi_user', JSON.stringify(userData));
  }, [userData]);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== productId));
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const setUserData = useCallback((data: UserData) => setUserDataState(data), []);

  const toggleDrawer = useCallback(() => setIsDrawerOpen(prev => !prev), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        userData,
        isDrawerOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setUserData,
        toggleDrawer,
        openDrawer,
        closeDrawer,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ═══ Hook ═══ */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
