import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { FileText, Search, ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';

const documentationSections = [
  {
    title: 'Getting Started',
    subsections: [
      { id: 'intro', title: 'Introduction to YieldMind' },
      { id: 'setup', title: 'Setting Up Your Account' },
      { id: 'first-steps', title: 'Your First Strategy' },
    ]
  },
  {
    title: 'Core Concepts',
    subsections: [
      { id: 'defi-basics', title: 'DeFi Basics' },
      { id: 'liquidity-mining', title: 'Liquidity Mining' },
      { id: 'yield-farming', title: 'Yield Farming' },
      { id: 'staking', title: 'Staking' },
    ]
  },
  {
    title: 'Platform Guide',
    subsections: [
      { id: 'dashboard', title: 'Dashboard Overview' },
      { id: 'portfolio', title: 'Managing Your Portfolio' },
      { id: 'strategies', title: 'Working with Strategies' },
      { id: 'forecasts', title: 'Understanding Yield Forecasts' },
    ]
  },
  {
    title: 'Advanced Topics',
    subsections: [
      { id: 'risk', title: 'Risk Management' },
      { id: 'custom', title: 'Custom Strategies' },
      { id: 'testing', title: 'Strategy Testing' },
      { id: 'analytics', title: 'Performance Analytics' },
    ]
  },
];

const docContent: Record<string, React.ReactNode> = {
  intro: (
    <>
      <p>
        YieldMind is your personal AI-powered DeFi agent—built to help you maximize yield and manage risk automatically.
      </p>
      <p>
        With YieldMind, you can simulate, deploy, and monitor strategies across multiple protocols in a unified platform.
      </p>
      <h3>Why YieldMind?</h3>
      <ul>
        <li>AI-driven opportunity scanning</li>
        <li>No-code automation</li>
        <li>Portfolio rebalancing and safety alerts</li>
      </ul>
      <p>Get started by setting up your secure account and launching your first DeFi strategy today.</p>
    </>
  ),
  setup: (
    <>
      <h3>Setting Up Your Account</h3>
      <ul>
        <li>Sign up with your email, or connect your wallet.</li>
        <li>Verify your identity with secure 2FA for extra protection.</li>
        <li>Fund your account with stablecoins (USDC, USDT, DAI, etc.).</li>
        <li>Set your risk profile and preferred strategies.</li>
      </ul>
      <p>Ready? Go to Portfolio and <strong>add your first assets.</strong></p>
    </>
  ),
  'first-steps': (
    <>
      <h3>Your First Strategy</h3>
      <ol>
        <li>Open the <strong>Strategies</strong> page from the sidebar.</li>
        <li>Choose "AI Recommended" or create your own allocation.</li>
        <li>Customize parameters (assets, percentages, risk level).</li>
        <li>Click <strong>Simulate</strong> to preview results.</li>
        <li>When satisfied, <strong>Deploy</strong> the strategy live!</li>
      </ol>
      <p>YieldMind automatically optimizes and balances strategies for you.</p>
    </>
  ),
  'defi-basics': (
    <>
      <h3>DeFi Basics</h3>
      <p>
        Decentralized Finance (DeFi) lets anyone earn, borrow, and swap digital assets without banks.
      </p>
      <ul>
        <li>Deposit crypto into liquidity pools for passive yield.</li>
        <li>Swap tokens at minimal fees, no centralized parties.</li>
        <li>Stake to support network security and earn rewards.</li>
      </ul>
    </>
  ),
  'liquidity-mining': (
    <>
      <h3>Liquidity Mining</h3>
      <p>
        Earn extra tokens by providing assets to decentralized exchanges (DEXs). Rewards are given for making markets more efficient.
      </p>
      <ul>
        <li>Deposit pairs (e.g., USDC-APT) to a DEX pool.</li>
        <li>Collect trading fees plus bonus tokens.</li>
        <li>Watch for impermanent loss, a key DeFi risk.</li>
      </ul>
    </>
  ),
  'yield-farming': (
    <>
      <h3>Yield Farming</h3>
      <p>
        Yield farming involves moving assets between protocols to chase the best returns, often using auto-compounding or leverage.
      </p>
      <ul>
        <li>Use platforms like YieldMind for automated farming.</li>
        <li>Combine incentives, governance, and trading fees.</li>
        <li>Balance risk vs. reward with portfolio analytics.</li>
      </ul>
    </>
  ),
  staking: (
    <>
      <h3>Staking</h3>
      <p>
        Lock assets into protocols to support security and consensus, earning rewards in the process.
      </p>
      <ul>
        <li>Usually lower risk and lower reward than LPing.</li>
        <li>Rewards depend on network participation and tokenomics.</li>
      </ul>
    </>
  ),
  dashboard: (
    <>
      <h3>Dashboard Overview</h3>
      <p>
        Your dashboard shows portfolio balances, strategies, top opportunities, and recent performance.
      </p>
      <ul>
        <li>Track current positions and projected APYs.</li>
        <li>View recent history and risk alerts.</li>
      </ul>
    </>
  ),
  portfolio: (
    <>
      <h3>Managing Your Portfolio</h3>
      <ol>
        <li>Add or remove assets via the Portfolio page.</li>
        <li>See allocation breakdown, ROI, and recent changes.</li>
        <li>Enable auto-rebalance for easier strategy management.</li>
      </ol>
    </>
  ),
  strategies: (
    <>
      <h3>Working with Strategies</h3>
      <p>
        Strategies are sets of DeFi actions—chosen assets, percentages, time horizons, and risk levels—automatically managed for best yield.
      </p>
      <ul>
        <li>Create, edit, simulate, and deploy with just a few clicks.</li>
        <li>Let AI recommend or customize to your taste.</li>
        <li>Monitor live performance and rebalance anytime.</li>
      </ul>
    </>
  ),
  forecasts: (
    <>
      <h3>Understanding Yield Forecasts</h3>
      <ul>
        <li>Forecasts predict returns based on historic and current data.</li>
        <li>Simulate performance based on time, allocation, and volatility.</li>
        <li>Use forecasts to pick strategies with optimal risk/reward.</li>
      </ul>
    </>
  ),
  risk: (
    <>
      <h3>Risk Management</h3>
      <p>
        YieldMind includes built-in risk scoring, stop-loss automation, and DeFi best practices to protect your capital.
      </p>
      <ul>
        <li>Set maximum loss and drawdown alerts.</li>
        <li>Balance exposure between high- and low-volatility assets.</li>
        <li>Monitor protocol risks and new exploits.</li>
      </ul>
    </>
  ),
  custom: (
    <>
      <h3>Custom Strategies</h3>
      <p>
        Advanced users can create multi-layered, cross-chain strategies for higher yields and custom risk profiles.
      </p>
      <ul>
        <li>Combine staking, swaps, insurance, and leveraged farming.</li>
        <li>Simulate and monitor results in one dashboard.</li>
      </ul>
    </>
  ),
  testing: (
    <>
      <h3>Strategy Testing</h3>
      <p>
        Before deploying, simulate strategy outcomes using different parameters and market conditions. Use backtesting tools for realistic forecasts.
      </p>
    </>
  ),
  analytics: (
    <>
      <h3>Performance Analytics</h3>
      <p>
        Access historical yield charts, risk-adjusted returns, and performance breakdowns by asset, protocol, and period.
      </p>
    </>
  ),
};

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started']);
  const [selectedDoc, setSelectedDoc] = useState<{section: string, id: string, title: string} | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter(s => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  const handleDocClick = (section: string, id: string, title: string) => {
    setSelectedDoc({ section, id, title });
  };

  const filteredSections = searchQuery
    ? documentationSections.map(section => ({
        ...section,
        subsections: section.subsections.filter(sub =>
          sub.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.subsections.length > 0)
    : documentationSections;

  return (
    <PageLayout title="Documentation" subtitle="Comprehensive guides and reference materials">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-72 shrink-0">
          <Card className="bg-[#151926] rounded-xl p-4 border border-[#232946] sticky top-4">
            <div className="flex items-center gap-2 bg-[#1a1e2e] rounded-lg px-3 py-2 mb-4">
              <Search className="w-4 h-4 text-white/60" />
              <input
                type="text"
                className="bg-transparent border-none outline-none w-full text-sm text-primary-muted placeholder:text-white/40"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              {filteredSections.map((section) => (
                <div key={section.title}>
                  <button
                    className="flex items-center justify-between w-full p-2 hover:bg-[#232946]/50 rounded-md transition text-left"
                    onClick={() => toggleSection(section.title)}
                  >
                    <span className="font-medium text-white">{section.title}</span>
                    {expandedSections.includes(section.title) ? (
                      <ChevronDown className="w-4 h-4 text-white/60" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-white/60" />
                    )}
                  </button>

                  {expandedSections.includes(section.title) && (
                    <div className="ml-2 pl-2 border-l border-[#232946] mt-1 space-y-1">
                      {section.subsections.map((subsection) => (
                        <button
                          key={subsection.id}
                          className={`w-full p-2 text-left text-sm rounded-md transition ${
                            selectedDoc?.id === subsection.id
                              ? 'bg-[#232946] text-white'
                              : 'text-white/70 hover:bg-[#232946]/30 hover:text-white'
                          }`}
                          onClick={() => handleDocClick(section.title, subsection.id, subsection.title)}
                        >
                          {subsection.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="flex-1">
          <Card className="bg-[#151926] rounded-xl p-6 border border-[#232946]">
            {selectedDoc ? (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <button
                    className="p-1.5 rounded-md hover:bg-[#232946]/50 transition"
                    onClick={() => setSelectedDoc(null)}
                  >
                    <ArrowLeft className="w-4 h-4 text-white/60" />
                  </button>
                  <div>
                    <div className="text-sm text-secondary-muted">{selectedDoc.section}</div>
                    <h2 className="text-xl font-bold text-white">{selectedDoc.title}</h2>
                  </div>
                </div>
                <div className="prose-defi">
                  {docContent[selectedDoc.id] || (
                    <div className="flex items-center justify-center h-60 text-white/40">
                      <FileText className="w-16 h-16" />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="text-defi-accent w-5 h-5" />
                  <h2 className="text-lg font-semibold text-white">YieldMind Documentation</h2>
                </div>
                <p className="text-white/80 mb-6">
                  Welcome to YieldMind documentation. Select a topic from the sidebar or search for DeFi topics to get started.
                </p>
                <h3 className="font-medium text-white mb-3">Popular Topics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'intro', title: 'Introduction to YieldMind', section: 'Getting Started' },
                    { id: 'setup', title: 'Setting Up Your Account', section: 'Getting Started' },
                    { id: 'defi-basics', title: 'DeFi Basics', section: 'Core Concepts' },
                    { id: 'dashboard', title: 'Dashboard Overview', section: 'Platform Guide' },
                  ].map((doc) => (
                    <button
                      key={doc.id}
                      className="p-4 bg-[#1a1e2e] rounded-lg text-left hover:bg-[#232946]/70 transition"
                      onClick={() => handleDocClick(doc.section, doc.id, doc.title)}
                    >
                      <h4 className="font-medium text-white">{doc.title}</h4>
                      <p className="text-sm text-white/60 mt-1">{doc.section}</p>
                    </button>
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Documentation;
