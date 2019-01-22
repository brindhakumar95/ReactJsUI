import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar/navbar';
import Carousel from './carousel/carousel';
import FooterComponet from './footer/footer';
import CardComponent from './card/card';
import FriendComponent from './friends/friend';
ReactDOM.render(
<span><NavBar></NavBar>
    
    <Carousel></Carousel>
  
   <CardComponent></CardComponent>
   <FriendComponent></FriendComponent>
   <FooterComponet></FooterComponet>
    </span>
    ,document.getElementById('root'))