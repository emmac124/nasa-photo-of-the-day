
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/keys';
import styled, { keyframes } from 'styled-components';
// import Button from './Button';

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
                        <h2>{pageData.title}</h2>
                        <p>{pageData.date}</p>
                        {/* {
                        // <Button details={open} />
                    <Button details={pageData.explanation} />
                    } */}
                        {/* <button onClick={open}>Click Me for an Explanation!</button> */}
                    <SecondSectionStyle>
                        <ImgStyle> 
                        <a href={pageData.hdurl}><img src={pageData.url} alt='galaxy' /></a>
                        </ImgStyle>
                    </SecondSectionStyle>
                        <h4>Explanation</h4>
                        <p>{pageData.explanation}</p>
                    </div>
                </FirstSectionStyle>

            </MainStyle>

        </TopStyle>
    )
}

const kf = keyframes`
    100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const keyframe = keyframes`
    100% {
    transform: scale(1.25);
  }
`;

const TopStyle = styled.section`
background-color: ${pr => pr.theme.primaryColor};
`;

const HeaderStyle = styled.h1`
    max-width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    color: ${pr => pr.theme.secondaryColor};
    border-bottom: 2px solid ${pr => pr.theme.white};
    margin: 0 auto;
    h1 {
        animation:${keyframe} 1.75s ease-in-out forwards;
    }
`;

const MainStyle = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:100%;
`;

const FirstSectionStyle = styled.section`
    display: flex;
    flex-direction:column;
    max-width:50%;
    text-align: center;
    align-items:center;
    
   h2 {
       color: ${pr => pr.theme.secondaryColor};
       padding-top:1%;
   }
   p {
    color: ${pr => pr.theme.white};
    max-width:100%; 
    padding-bottom: 1.25%;
    &:hover {
        font-weight: ${pr => pr.theme.fontWeight};
        color: ${pr => pr.theme.secondaryColor};
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
   }
   h4 {
    color: ${pr => pr.theme.secondaryColor};
    border-bottom: 2px solid ${pr => pr.theme.white};
    padding-bottom:2.75%;
    padding-top:0.25%;
   }
`;

const SecondSectionStyle = styled.div`
    max-width:100%;
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
        max-width:100%;
        opacity:0;
        animation:${kf} 1.75s ease-in-out forwards;
    }
`;

export default Display;