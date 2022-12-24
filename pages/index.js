import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Text>Baasit</Text>
      <AnotherText>Its cool here</AnotherText>
    </>
  );
};

const Text = styled.p`
  color: red;
  /* font-family: ${inter.style.fontFamily}; */
`;
const AnotherText = styled.p`
  color: blue
`;

export default Home;
