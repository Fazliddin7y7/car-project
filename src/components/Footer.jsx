import React from "react";
import styled from "styled-components";
import IphoneIMage from "../assets/photo_2025-11-24_22-50-42.jpg";
import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";
import CarImage from "../assets/car.png";
import MailImg from "../assets/mail.png";
import AdresImg from "../assets/adress.png";
import PhoneImg from "../assets/phone.png";


import { IoCarSport } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";

const HeroContainer = styled.div`
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

const BigContainer = styled.div`
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

const CompanionContainer = styled.div`
  width: 1296px;
  height: 415px;
  background-color: #5937e0;
  border-radius: 40px;
  display: flex;
  align-items: flex-start;
`;

const Img = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 10px;
  margin-left: 90px;
`;

const DownloadText = styled.h2`
  font-weight: 700;
  font-size: 70px;
  width: 556px;
  line-height: 110%;
  color: #000;
  margin-right: 200px;
  margin-bottom: 20px;
  text-align: left;
`;

const DownloadTextt = styled.h2`
  font-weight: 700;
  font-size: 50px;
  line-height: 110%;
  color: white;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  max-width: 590px;
  color: #625a5a;
`;

const InfoTextt = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 40px;
  line-height: 150%;
  max-width: 590px;
  color: #ffffff;
`;

const InfoContainer = styled.div`
  width: 590px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 590px;
  height: auto;
  margin-left: 70px;
`;

const ApStore = styled.img`
  width: 150px;
  height: auto;
  margin-top: 30px;
  margin-right: 20px;
`;

const MailIcon = styled.img`
  width: 44px;
  height: 44px;
`;

const PhoneIcon = styled.img`
  width: 44px;
  height: 44px;
`;

const AdresIcon = styled.img`
  width: 44px;  
  height: 44px;
`;

const GooglePlayy = styled.img`
  width: 150px;
  height: auto;
  margin-top: 30px;
`;

const CarImg = styled.img`
  width: 380px;
  height: 380px;
  margin-top: 30px;
  margin-right: 80px;
`;

const EnjoyContainer = styled.div`
  margin-top: 50px;
  margin-left: 80px;
  width: 900px;
  height: 299px;
  padding: 17px;
`;

const CityWrapper = styled.div`
  position: relative;
  width: 464px;
  margin-top: 40px;
`;

const CityInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 0;
  padding-left: 20px;
  font-size: 18px;
  background-color: #ffffff;
  color: #555;
`;

const CityButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  height: 45px;
  width: 130px;
  border: none;
  border-radius: 16px;
  background-color: #ffa500;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  background: #ffffff;
  padding: 70px 0;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  color: #000000;
`;

const Column = styled.div`
  max-width: 300px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Column1 = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Column2 = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Column3 = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right:80px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const TextSmall = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  margin-top: 10px;
  color: #000000;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.li`
  font-size: 15px;
  cursor: pointer;
`;

const AppButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const IconCircle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
`;

const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
  color: #000;
  opacity: 0.6;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #000;
`;

const LogoText = styled.span`
  font-size: 17px;
  font-weight: 700;
`;

const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const BitaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  gap: 50px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
  


export default function Footer() {
  return (
    <>
      <BigContainer>
        <HeroContainer>
          <MainContainer>
            <DownloadText>
              Download <br /> Mobile App
              <InfoContainer>
                <InfoText>
                  Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
                  cursus <br />
                  turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
                  aliquet cras hendrerit enim condimentum. Condimentum interdum
                  risus bibendum urna.
                </InfoText>
              </InfoContainer>
            </DownloadText>

            <InfoContainer>
              <ApStore src={AppStore} />
              <GooglePlayy src={GooglePlay} />
            </InfoContainer>
          </MainContainer>

          <Img src={IphoneIMage} />
        </HeroContainer>

        <CompanionContainer>
          <EnjoyContainer>
            <DownloadTextt>
              Enjoy every mile with
              <span style={{ display: "flex", gap: "10px" }}>
                <span>adorable</span>
                <span>companionship</span>
              </span>
            </DownloadTextt>

            <InfoTextt>
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat
            </InfoTextt>

            <CityWrapper>
              <CityInput type="text" placeholder="City" />
              <CityButton>Search</CityButton>
            </CityWrapper>
          </EnjoyContainer>

          <CarImg src={CarImage} />
        </CompanionContainer>
      </BigContainer>

      <FooterWrapper>
        <FooterContent>
          <Column>
          <BitaContainer>
  <LogoArea>
              <LogoIcon>
                <IoCarSport size={40} />
              </LogoIcon>
              <LogoText>Car Rental</LogoText>
            </LogoArea>
            <LogoArea>
          
         
        

            </LogoArea>

            
          </BitaContainer>
          

            <TextSmall>
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem.
            </TextSmall>

            <SocialRow>
              <IconCircle>
                <FaFacebookF size={16} />
              </IconCircle>
              <IconCircle>
                <FaInstagram size={16} />
              </IconCircle>
              <IconCircle>
                <FaTwitter size={16} />
              </IconCircle>
              <IconCircle>
                <FaYoutube size={16} />
              </IconCircle>
            </SocialRow>
          </Column>

          <Column1>
           
           <Container> <AdresIcon src={AdresImg} /> Oxford Ave. Cary, NC 27511</Container> 

            <Title>Useful Links</Title>
            <List>
              <Item>About us</Item>
              <Item>Contact us</Item>
              <Item>Gallery</Item>
              <Item>Blog</Item>
              <Item>F.A.Q</Item>
            </List>
          </Column1>

          <Column2>

          <MailIcon src={MailImg} /> nobody@gmail.com
            <Title>Vehicles</Title>
            <List>
              <Item>Sedan</Item>
              <Item>Cabriolet</Item>
              <Item>Pickup</Item>
              <Item>Minivan</Item>
              <Item>SUV</Item>
            </List>
          </Column2>

          <Column3>
            <PhoneIcon src={PhoneImg} /> +998987654321
            <Title>Download App</Title>

           

            <AppButtons>
              <ApStore src={AppStore} />
              <GooglePlayy src={GooglePlay} />
            </AppButtons>
          </Column3>
        </FooterContent>

        <FooterBottom>© Copyright Car Rental 2024.</FooterBottom>
      </FooterWrapper>
    </>
  );
}
