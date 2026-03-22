
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { ArrowRight, Bot } from 'lucide-react';
import { toast } from 'sonner';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Welcome to YieldMind AI! Ask me anything about DeFi, yields, and portfolio optimization 🚀' }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory([...chatHistory, { role: 'user', content: message }]);

    // Mock AI response (real API can be plugged here)
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `Great question about "${message}". YieldMind AI reviews thousands of market signals and top protocols every hour. For instant yield, consider USDC staking, or let me calculate multi-token optimization for you!`
        }
      ]);
      toast.success('AI generated a suggestion', {
        description: 'Check below for optimal DeFi strategy.'
      });
    }, 900);

    setMessage('');
  };

  return (
    <PageLayout title="AI Chat Assistant" subtitle="Chat with our AI-powered DeFi expert and optimize your strategy in real time!">
      <Card className="bg-[#151926] rounded-xl p-6 mb-6 flex-1 flex flex-col border border-[#232946]">
        <div className="flex-1 overflow-auto mb-4 space-y-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-xl ${
                  msg.role === 'user'
                    ? 'bg-[#232946] text-white'
                    : 'bg-[#1a1e2e] text-white/80'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="flex items-center mb-2 text-defi-accent">
                    <Bot size={16} className="mr-2" />
                    <span className="font-semibold">YieldMind AI</span>
                  </div>
                )}
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-auto">
          <input
            type="text"
            className="bg-[#1a1e2e] border-none outline-none flex-1 text-white text-base py-3 px-4 rounded-xl placeholder:text-white/50"
            placeholder="Ask about DeFi, yield, LPs, strategies…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            className="bg-defi-accent hover:bg-defi-accent/90 transition p-3 rounded-lg flex items-center"
          >
            <ArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Chat;
