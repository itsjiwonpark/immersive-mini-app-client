import React, { Component } from 'react';
import Loader from './Loader';
import Picture from './Picture';
import axios from 'axios';
import '../style/Main.css';



class Main extends Component {

  state = {
    lists : []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/pictures`)
      .then(res => {
        this.setState({ lists : res.data });
      })
  }


  render() {
    const { lists } = this.state;
    console.log('stupid!!')
    return (
      <div>
          { !!lists.length ? (
            <div>
              <div className="main-header">
                <h1>UNSPLASH</h1>
              </div>
              <div className="main-contents">
             { lists.map((photo, i)=>{
               return (
                 <Picture photo={photo} key={i}></Picture>
               )
             }) }
              </div>
            </div>
          ) : (
            <div className='main-loader'>
            <Loader />
            </div>
          )}

      </div>
    )
  }

}

export default Main;