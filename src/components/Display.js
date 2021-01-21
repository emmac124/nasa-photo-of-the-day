
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/keys';

const Display = () => {

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
        <section class='main_content'>
            
            <section class="top_information">
                    <h1>{pageData.title}</h1>
                    <p>{pageData.date}</p>
            </section>
            
            <section class='img'> 
            <a href={pageData.hdurl}><img src={pageData.url} alt='galaxy' /></a>
            </section>
            
            <section class='bottom_information'>
                <p>{pageData.explanation}</p>
            </section>

        </section>

    )
}

export default Display;