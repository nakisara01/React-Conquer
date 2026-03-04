import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("i run when 'keyword' changed. (over 5 letters)");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("i run only one time")
  }, [])

  useEffect(() => {
    if (counter > 0) {
      console.log("i run when 'counter' is changed")
    }
  }, [counter])


  useEffect(() => {
    if (counter > 0 || keyword !== "") {
      console.log("i run when 'counter' & 'keyword' is changed")
    }
  }, [counter, keyword])

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
