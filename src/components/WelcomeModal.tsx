
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Wallet, Shield, Brain } from 'lucide-react';
import { toast } from 'sonner';

interface WelcomeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConnectWallet: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ 
  open, 
  onOpenChange,
  onConnectWallet
}) => {
  const handleConnect = async () => {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      toast.error("MetaMask not detected. Please install MetaMask extension to connect your wallet.");
      // Redirect to MetaMask download page after short delay
      setTimeout(() => {
        window.open('https://metamask.io/download/', '_blank');
      }, 2000);
      return;
    }
    
    try {
      await onConnectWallet();
      onOpenChange(false);
    } catch (error) {
      console.error("Wallet connection error:", error);
      toast.error("Failed to connect wallet. Please try again.");
      // Keep modal open to retry
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#151926] border-[#232946] text-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Welcome to YieldMind</DialogTitle>
          <DialogDescription className="text-white/80">
            Your AI-powered DeFi assistant for optimizing crypto investments
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-[#232946] p-2 rounded-lg">
                <Wallet className="h-5 w-5 text-[#4361EE]" />
              </div>
              <div>
                <h3 className="font-medium text-white">Connect your wallet</h3>
                <p className="text-sm text-white/60">Connect your Ethereum wallet to access personalized DeFi strategies.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-[#232946] p-2 rounded-lg">
                <Brain className="h-5 w-5 text-[#4361EE]" />
              </div>
              <div>
                <h3 className="font-medium text-white">AI-powered insights</h3>
                <p className="text-sm text-white/60">Get intelligent recommendations for maximizing your DeFi returns.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-[#232946] p-2 rounded-lg">
                <Shield className="h-5 w-5 text-[#4361EE]" />
              </div>
              <div>
                <h3 className="font-medium text-white">Secure and private</h3>
                <p className="text-sm text-white/60">Your private keys never leave your device.</p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            Explore first
          </Button>
          <Button 
            onClick={handleConnect}
            className="bg-gradient-to-r from-[#4361EE] to-[#6286FF] hover:from-[#3a56d4] hover:to-[#5a7eff] text-white"
          >
            Connect Wallet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
