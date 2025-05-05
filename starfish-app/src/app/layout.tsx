// src/app/layout.tsx
import './globals.css';
import SidebarToggle from './SidebarToggle';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SidebarToggle hideOnPaths={['/login','/register','/error404','/'
          ,'/members', '/dashboard', '/create-retrospective', '/retrospective-list'
          , '/retrospective','/less-of/','/more-of/','/keep-doing/','/start-doing/','/stop-doing/','/recover']}>
          {children}
        </SidebarToggle>
      </body>
    </html>
  );
}
