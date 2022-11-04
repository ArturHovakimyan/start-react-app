import React, { useEffect, useState } from "react";
import { API_URL } from "./constants/api";
import DivisionContainer from "./components6/divisionContainer";
import Pagination from "./components6/pagination";
import FilterOtions from "./components6/filterOptions";
function App() {
  const loadCountPerPage = 10;
  const [totalRecords, setTotalRecords] = useState([]);
  const [offset, setPageOffset] = useState(0);
  const [firterKey, setFilterKey] = useState("");

  const [data, setData] = useState({
    info: {},
    records: [],
  });
  const handleLoadMore = () => {
    setPageOffset(offset + loadCountPerPage);
  };
  const handlePageClick = (page) => {
    setPageOffset(loadCountPerPage * (page - 1));
  };

  useEffect(() => {
    fetch(`${API_URL}?load_amount=${100}&offset=${offset}`)
      .then((res) => res.json())
      .then((res) => setTotalRecords(res.records));
  }, [firterKey]);

  useEffect(() => {
    fetch(`${API_URL}?load_amount=${loadCountPerPage}&offset=${offset}`)
      .then((res) => res.json())
      .then((res) => setData(res));
    //   .then((res) =>
    //     setData((prev) => ({
    //       records: [...prev.records, ...res.records],
    //       info: { ...prev.info, ...res.info },
    //     }))
    //   );
  }, [offset]);

  const filterData = (division) => {
    setData((prev) => ({
      info: prev.info,
      records: totalRecords.filter((item) => item.division.includes(division)),
    }));
  };
  return (
    <div>
      <h1>Harvard musium</h1>
      <FilterOtions filterData={filterData} />
      <div className="content">
        {/* <section className="info">
                <InfoSection info={data.info}/>
            </section> */}
        <section className="divisions">
          <DivisionContainer records={data.records} />
          <Pagination
            totalPages={data.info.pages}
            handlePageClick={handlePageClick}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
