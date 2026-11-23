import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Activity, ArrowLeftRight, ChevronDown, Clock3, LayoutDashboard, Settings, Upload, Waves } from 'lucide-react';
import { useEffect, useState } from 'react';
const links = [
 { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }, { to: '/history', label: 'History', icon: Clock3 }, { to: '/trends', label: 'Trends', icon: Waves }, { to: '/compare', label: 'Compare', icon: ArrowLeftRight }, { to: '/import', label: 'Import', icon: Upload }, { to: '/settings', label: 'Settings', icon: Settings },
];
const titles: Record<string, string> = { '/dashboard':'Dashboard', '/history':'History', '/trends':'Trends', '/compare':'Compare', '/import':'Import', '/settings':'Settings' };
export function AppShell() {
 const location = useLocation(); const title = titles[location.pathname] ?? 'Measurement detail'; const [theme, setTheme] = useState('dark');
 useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
 return <div className="app-shell">
  <aside className="sidebar"><a className="brand" href="/dashboard"><span className="brand-mark"><Activity size={21}/></span><span>body<span className="brand-light">lens</span><small>PERSONAL ANALYTICS</small></span></a>
   <div className="side-label">WORKSPACE</div><nav aria-label="Main navigation">{links.map(({to,label,icon:Icon}) => <NavLink key={to} to={to} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}><Icon size={17}/><span>{label}</span>{label === 'Import' && <span className="nav-arrow">↗</span>}</NavLink>)}</nav>
   <div className="sidebar-bottom"><div className="local-status"><span className="status-dot"/><span><strong>Stored locally</strong><small>On this device</small></span></div><div className="member-chip"><span className="avatar">BL</span><span><strong>Personal space</strong><small>Local profile</small></span><ChevronDown size={15}/></div></div>
  </aside>
  <main className="main-area"><header className="topbar"><div className="mobile-brand"><span className="brand-mark"><Activity size={18}/></span>BodyLens</div><div className="breadcrumb">Workspace <span>/</span> <strong>{title}</strong></div><div className="topbar-actions"><span className="privacy-pill"><span className="status-dot"/>LOCAL ONLY</span><button className="theme-button" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>◐</button></div></header><div className="page-content"><Outlet/></div>
  <nav className="mobile-nav" aria-label="Mobile navigation">{links.filter((item) => item.label !== 'Settings').map(({to,label,icon:Icon}) => <NavLink key={to} to={to} className={({isActive}) => `mobile-link ${isActive ? 'active' : ''}`}><Icon size={18}/><span>{label}</span></NavLink>)}</nav></main>
 </div>;
}
