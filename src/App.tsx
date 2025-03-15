
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import { RequestAirdrop } from './components/RequestAirdrop';

function App() {
  
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
  <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={[]}>
      <WalletModalProvider>
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        <WalletMultiButton/>
        <WalletDisconnectButton/>
      </div>
      <RequestAirdrop/>
      </WalletModalProvider>
    </WalletProvider>

  </ConnectionProvider>
  
)}

export default App
