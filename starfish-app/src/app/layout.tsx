// src/app/layout.tsx
import './globals.css';
import styles from './page.module.css';
import SidebarToggle from './SidebarToggle';

export const metadata = {
  title: 'Starfish',
  description: 'Aplicación de retrospectivas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SidebarToggle>{children}</SidebarToggle>
      </body>
    </html>
  );
}
