
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/const';

const Display = (props) => {

    const [pageData, setPageData] = useState({});

    useEffect(() => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          console.log(res);
         setPageData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <section class="section">
            <h1>Title {pageData.title}</h1>
        </section>
    )
}

export default Display;