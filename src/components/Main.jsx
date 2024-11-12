import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/1.png'
import Image2 from '../assets/2.png'
import SearchBar from './SearchBar';
import Footer from "./Footer";
import Header from "./Header";
import RoadSafetyGuidelines from './RoadSafetyGuidelines';
const Main = () => {
 
  
  return (
    <div>
<Header></Header>
      <h1 className='text-danger text-center '> WELCOME TO ROAD SAFETY GUIDELINES AND RULES</h1>
      <Carousel >
      <Carousel.Item  >
        <img src={Image1}  alt=""  style={{ display: 'block', margin: 0, padding: '10px' ,width:'100%' ,height:'100%',gap:'5px' }}/>
       
      </Carousel.Item>
      <Carousel.Item >
      <img src={Image2} alt="" style={{ display: 'block', margin: 0, padding: '10px' , width:'100%' ,height:'100%'}} />
      </Carousel.Item>
     

    </Carousel>
    <div style={{ display: 'flex', justifyContent: 'space-around',  padding: '10px', marginTop: '10px' }}>
      <SearchBar />
      <RoadSafetyGuidelines />
      </div>
      <Footer></Footer>

    </div>
  )
}

export default Main
