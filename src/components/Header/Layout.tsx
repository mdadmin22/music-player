// src/components/Layout.tsx

import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">Header</header>
      <aside className="sidebar">SideBar</aside>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
