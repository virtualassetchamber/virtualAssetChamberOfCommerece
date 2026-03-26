"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NewsletterModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const NewsletterModalContext = createContext<NewsletterModalContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useNewsletterModal() {
  return useContext(NewsletterModalContext);
}

export function NewsletterModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NewsletterModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </NewsletterModalContext.Provider>
  );
}