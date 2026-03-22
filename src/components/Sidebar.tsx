
import React, { useState } from 'react';
import { 
  Brain, 
  MessageSquare, 
  History, 
  Wallet, 
  BarChart2, 
  TrendingUp, 
  ArrowUpRight, 
  TestTube, 
  BookOpen,
  File,
  FileText 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

// Sidebar links configuration
const links = [
  { icon: Brain, label: 'AI DeFi Agent', key: 'agent', path: '/dashboard' },
  { icon: null, label: '' }, // Divider
  { icon: null, label: 'Dashboard', key: 'dashboard', path: '/dashboard' },
  { icon: MessageSquare, label: 'Chat', key: 'chat', path: '/chat' },
  { icon: History, label: 'History', key: 'history', path: '/history' },
  { icon: Wallet, label: 'Portfolio', key: 'portfolio', path: '/portfolio' },
  { icon: null, label: '' }, // Divider
  { icon: BarChart2, label: 'Strategies', key: 'strategies', path: '/strategies' },
  { icon: TrendingUp, label: 'Best yield strategy', key: 'best-yield', path: '/best-yield' },
  { icon: ArrowUpRight, label: 'Rebalance yields', key: 'rebalance', path: '/rebalance' },
  { icon: TestTube, label: 'Try test strategy', key: 'test-strategy', path: '/test-strategy' },
  { icon: null, label: '' }, // Divider
  { icon: BookOpen, label: 'Resources', key: 'resources', path: '/resources' },
  { icon: File, label: 'Tutorials', key: 'tutorials', path: '/tutorials' },
  { icon: FileText, label: 'Documentation', key: 'documentation', path: '/documentation' }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine active key from current path
  const currentPath = location.pathname;
  const activeKey = links.find(link => link.path === currentPath)?.key || 
                   (currentPath === '/dashboard' ? 'dashboard' : '');

  // Handle sidebar item click
  function handleSidebarClick(path: string | undefined, label: string) {
    if (!path) return;
    
    navigate(path);
    
    // Show toast notification for clicked item
    toast.success(`Navigated to ${label}`, {
      description: "Loading content..."
    });
  }

  return (
    <aside className="min-h-screen w-[265px] flex-shrink-0 bg-[#151926] border-r border-white/5 px-0 select-none transition-all shadow-lg">
      <div className="flex flex-col h-full pt-3 pb-8">
        {/* Logo */}
        <div className="flex gap-3 items-center px-6 py-3 mb-1 cursor-pointer" onClick={() => handleSidebarClick('/dashboard', 'Dashboard')}>
          <span className="rounded-full bg-[#222843] p-2">
            <Brain className="w-6 h-6 text-defi-accent" />
          </span>
          <span className="font-semibold text-xl text-white tracking-tight font-sans">YieldMind</span>
        </div>
        <nav className="flex flex-col mt-2 gap-0">
        {links.map((item, idx) => {
          if (!item.icon && !item.key) {
            // Divider
            return <div key={idx} className="h-[22px]" />;
          }
          return (
            <button
              key={item.key || idx}
              className={[
                "w-full flex items-center gap-3 px-8 py-2.5 rounded-[10px] font-medium transition-all text-left",
                "hover:bg-[#232946]",
                activeKey === item.key ? "bg-[#232946] text-white" : "text-white/60",
                item.key === 'dashboard' && activeKey === item.key && 'font-bold',
              ].join(' ')}
              onClick={() => handleSidebarClick(item.path, item.label)}
              style={{
                marginBottom: (item.label === 'Documentation' ? 0 : 2)
              }}
            >
              {item.icon ? <item.icon className="w-[19px] h-[19px] mr-1" /> : <span className="w-[19px] h-[19px]" />}
              <span>{item.label}</span>
            </button>
          );
        })}
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
