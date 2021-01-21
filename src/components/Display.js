
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/keys';
import styled from 'styled-components';
import Button from './Button';

const Display = () => {

    const [pageData, setPageData] = useState({});

    // const open = () => {
    //     setPageData(pageData.explanation)
    // }
    
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
        <TopStyle>
            
            <HeaderStyle>
                <h1>NASA Astronomy Picture of the Day</h1>
            </HeaderStyle>
            
            <MainStyle>

                <FirstSectionStyle>
                    <div>
                        <h3>{pageData.title}</h3>
                        <p>{pageData.date}</p>
                        <h4>Explanation</h4>
                        {/* {
                        // <Button details={open} />
                    <Button details={pageData.explanation} />
                    } */}
                        {/* <button onClick={open}>Click Me for an Explanation!</button> */}
                        <p>{pageData.explanation}</p>
                    </div>
                </FirstSectionStyle>

                <SecondSectionStyle>
                    <ImgStyle> 
                    <a href={pageData.hdurl}><img src={pageData.url} alt='galaxy' /></a>
                    </ImgStyle>
                </SecondSectionStyle>

            </MainStyle>

        </TopStyle>
    )
}

const TopStyle = styled.section`
    color: ${pr => pr.theme.secondaryColor};
`;

const HeaderStyle = styled.h1`
    max-width:100%;
    display:flex;
    justify-content:center;
    color: ${pr => pr.theme.secondaryColor};
`;

const MainStyle = styled.section`
    display:flex;
    margin:3%;
`;

const FirstSectionStyle = styled.section`

    display: flex;
    flex-direction:column;
    max-width:30%;
    text-align: center;
    padding: 0;
    align-items:center;
    border-right-style: 3px solid white;
    
   h3 {
       color: ${pr => pr.theme.secondaryColor};
   }
   p {
    color: ${pr => pr.theme.white};
   }
   h4 {
    color: ${pr => pr.theme.secondaryColor};
   }
`;

const SecondSectionStyle = styled.div`
    max-width:70%;
    align-items:center;
    display:flex;
    align-items:center;
    justify-content:center;
    
`;

const ImgStyle = styled.div`
    display:flex;
    justify-content:center;
    max-width:100%;
    img {
        padding-left:10%;
        padding-right:7.5%7.5%;
    }
`;

export default Display;