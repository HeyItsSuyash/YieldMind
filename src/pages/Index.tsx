
import React from 'react';
import PageLayout from '@/components/PageLayout';
import SearchBar from '@/components/SearchBar';
import QuickActions from '@/components/QuickActions';
import PortfolioCard from '@/components/PortfolioCard';
import StrategyCard from '@/components/StrategyCard';
import YieldForecastChart from '@/components/YieldForecastChart';
import ActivityLog from '@/components/ActivityLog';

const Index = () => {
  return (
    <PageLayout title="Welcome to YieldMind Dashboard" subtitle="Your AI-powered DeFi optimization center">
      <SearchBar />
      <QuickActions />

      <div className="flex flex-col lg:flex-row w-full gap-6">
        {/* Left content */}
        <div className="flex flex-col gap-5 w-full lg:w-[calc(100%-360px)] min-w-0">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Strategies</h2>
            <StrategyCard />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Activity</h2>
            <ActivityLog />
          </div>
        </div>
        {/* Right cards */}
        <div className="flex flex-col w-full lg:w-[340px] gap-5 shrink-0">
          <PortfolioCard />
          <YieldForecastChart />
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
