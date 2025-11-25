import React from "react";
import styled from "styled-components";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";


//images





const HomeContainer = styled.div`
width: 1440px;
height: 100%;
display: flex;
align-items: center;
gap: 20px;
flex-direction: column;
background-color: #ffffff;
font-family: Arial, Helvetica, sans-serif;

`;

const CarCard1 = styled.div`
  width: 1269px;
  height: 660px;
  background-color: #6e00f5;
  border-radius: 40px;
  display: flex;
  justify-content: space-evenly;   
  align-items: center;       
`;


const CarCard2 = styled.div`
color: white;
display: flex;
flex-direction: column;
justify-content: center;
gap: 40px;

`;

 

const CarCard3 = styled.div`
width: 30%;
height: 70%;
background-color: #ffff;
border-radius: 20px;

`;

const CardText = styled.h1`
font-size: 60px;
`;

const Button1 = styled.div`

`;

export default function Home() {
    return (
        <>
        <HomeContainer>
            <Header />


            <CarCard1>
                <CarCard2>
                    <CardText>Experience the road <br /> like never before</ CardText>
                    <p>
                    <p>Aliquam adipiscing velit semper morbi. Purus non eu </p> 
                    <p>cursus porttitor tristique et gravida. Quis nunc interdum </p> 
                    <p>gravida ullamcorper</p>
                    </p>
                    <Button1>View all cars</Button1>
                </CarCard2>

                <CarCard3>

                </CarCard3>
        

            </CarCard1>

        </HomeContainer>
        <Footer />

        </>

    )
}