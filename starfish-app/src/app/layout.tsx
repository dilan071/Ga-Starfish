// src/app/layout.tsx
import './globals.css';
import SidebarToggle from './SidebarToggle';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SidebarToggle hideOnPaths={['/login','/register','/recover','/error404','/','/members', '/dashboard', '/create-retrospective', '/retrospective-list', '/retrospective-session']}>
          {children}
        </SidebarToggle>
      </body>
    </html>
  );
}
