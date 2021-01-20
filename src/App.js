import React, { useState, useEffect } from "react";
import axios from 'axios';
import Display from './components/Display';
import { BASE_URL, API_KEY } from './constants/const';
import "./App.css";

function App() {
  
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
       setPageData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className='App'>
    <Display pageData={pageData} />
    </div>
  );
}

export default App;
