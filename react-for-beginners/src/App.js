import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((responce) => responce.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [amount, setAmount] = useState();
  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setAmount("");
  };

  return (
    <div>
      <h1> The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}{" "}
              </option>
            ))}
          </select>
          <br />
          <br />
          <hr />
          <h1>Bitcoin Exchanger</h1>
          <form onSubmit={onSubmit}>
            <input
              value={amount}
              id="cash"
              placeholder="write your budget"
              type="number"
              onChange={onChange}
            />
            <button>exchange</button>
          </form>
          <h3>{amount/72660}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
