import Loader from 'react-loader-spinner'
import React, { Component } from 'react';

export default class App extends Component {
 //other logic
   render() {
    return(
     <Loader 
        type="Ball-Triangle"
        color="#00BFFF"
        height="100"	
        width="100"
     />   
    );
   }
}