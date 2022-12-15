import React from 'react'
import Blog from "./Blog";
import First from "./First";
import Four from "./Four";
import Three from "./Three";
import Profile from "./Profile";
import Question from "./Question";
import Second from "./Second";
import Subscribe from "./Subscribe";
import Roadmap from './Roadmap';

const Home = () => {
  return (
      <div>
      
       <First/>
      <Second/>
      <Three/>
      <Four/>
      <Roadmap/>
      <Question/>
      <Profile/>
      <Blog/>
      <Subscribe/> 
     
    </div>
  )
}

export default Home