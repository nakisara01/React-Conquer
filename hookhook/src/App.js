import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { useAxios } from "./Hooks/useAxios";

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://nomad-movies.nomadcoders.workers.dev/movies",
  });
  console.log(
    `Loading: ${loading} \n Error: ${error} \n Data: ${JSON.stringify(data)} `,
  );
  return <div>
    <h1>{data && data.status}</h1>
    <h2>{loading && "Loading"}</h2>
    <button onClick = {refetch}>Refetch</button>
  </div>;
}

export default App;
