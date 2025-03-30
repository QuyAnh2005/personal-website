import { Header } from './header';
import { Footer } from './footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-theme="auto">
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-900">
        {children}
      </main>
      <Footer />
    </div>
  );
}
