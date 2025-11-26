'use client';

import { ReactNode } from 'react';
import Navbar from '@/app/components/shared/Navbar';
import Footer from '@/app/components/shared/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
