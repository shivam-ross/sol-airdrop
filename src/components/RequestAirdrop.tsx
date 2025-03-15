import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(0.1)

  async function requestAirdrop() {
    await connection.requestAirdrop(
      wallet.publicKey as any,
      amount * LAMPORTS_PER_SOL
    );
    alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
  }

  return (
    <div>
      <br />
      <br />
      <input
      value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
       type="text" placeholder="Amount" />
      <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
  );
}