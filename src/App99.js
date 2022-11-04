import React, { useState, useEffect } from "react";
import DropDowon from "./component99.js/dropDowon";

const App99 = () => {
  const [state, setStete] = useState({
    info: {},
    records: [],
  });

  useEffect(() => {
    fetch("https://harvardartmuseums.org/browse")
      .then((res) => res.json())
      .then((res) => setStete({ info: res.info, records: res.records }));
  }, []);

  return (
    <div>
      <DropDowon {...state}/>
    </div>
  );
};

export default App99;
