import React from "react";
import styled from "styled-components";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";




const HomeContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #ffffff;
`;



export default function Home() {
    return (
        <>
        <HomeContainer>

            <h1>hello</h1>
            <h2>asadbek</h2>


        </HomeContainer>

        </>

    )
}