import { useState } from "react";

import "./app.css";

function App() {

  const [btcValue, setBtcValue] = useState('');
  const [usdValue, setUsdValue] = useState('');

  let result;
  if (btcValue !== '' && usdValue !== '') {
    result = (usdValue / btcValue).toFixed(7);
  }
  return (
    <div className="app">
      <form>
        <label htmlFor="btc" />
        What is Bitcoin price today?
        <input type="number" name="btc" id="btc" onChange={e => setBtcValue(e.target.value)} />
        <label htmlFor="usd" />
        How much $ do you have?
        <input type="number" name="usd" id="usd" onChange={e => setUsdValue(e.target.value)} />
        <p>You can buy <span>{result}</span> BTC</p>
      </form>
    </div>
  )
}

export default App; 