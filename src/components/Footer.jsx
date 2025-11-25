import React from "react";
import styled from "styled-components";
import IphoneIMage from "../assets/photo_2025-11-24_22-50-42.jpg";
import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";

const FooterContainer = styled.footer`  
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;   
  font-size: 14px;
  color: #ffffff;

  display: flex;         
  justify-content: center; 
  align-items: center;     
  gap: 20px;             
`;


const Img = styled.img`
    width: 500px;
    height:auto;
    margin-bottom: 10px;
`;


const DownloadText = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 70px;
  width: 536px;
  line-height: 110%;
  color: #000;
  margin-right:100px;
  margin-bottom: 20px;
  text-align: left;  /* premium look */
`;


const InfoText = styled.p`
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: #444;          /* professional soft text color */
  max-width: 536px;     /* matn juda uzun bo‘lib ketmasligi uchun */
`;


const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;  
  align-items: flex-start;       
  margin-top: 10px;
`;


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  width:536px;
  height: auto;
  margin-right: 60px;
`;

const ApStore = styled.img`
  width: 150px;
  height: auto;
  margin-top: 30px;
  margin-right: 20px;
`;

const GooglePlayy = styled.img`
  width: 150px;
  height: auto;
  margin-top: 30px;
`;





export default function Footer() {
    return (
        <>
        <FooterContainer>
        <MainContainer>
           
        <DownloadText>
         Download <br /> Mobile App
        <InfoContainer>
        <InfoText>
        Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus <br />
        turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet 
        cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna.
        </InfoText>

        </InfoContainer>
        </DownloadText>
        <InfoContainer>
        <ApStore src={AppStore} alt="App Store" />
        <GooglePlayy src={GooglePlay} alt="Google Play" />
        </InfoContainer>
        </MainContainer>


         
           <Img src={IphoneIMage} alt="Mobile App" />
        </FooterContainer>
        </>
    )
}