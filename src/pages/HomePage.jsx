import { styled } from "styled-components";
import { dummyData } from "../data/dummy_data";
import Header from "../components/Header"
import Topnav from "../components/Topnav";
import Posts from "../components/Posts";


console.log(dummyData);
function HomePage() {
  return <>
  <Header />
  <Topnav />
  <Posts />
  </>;
}

export default HomePage;
