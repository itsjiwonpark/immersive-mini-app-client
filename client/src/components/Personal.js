import React, { Component } from 'react';
import PersonalPictures from './PersonalPictures';
import {Link} from 'react-router-dom';
import '../style/PersonalPictures.css'
import axios from 'axios';

class Personal extends Component {

  state = {
    photos: []
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/pictures/author/${this.props.match.params.author}`)
    .then((res)=>{
      this.setState({photos: res.data})
    })
  }

  render() {
    console.log(this.props.match.params.author)
    console.log(this.state.photos)
    return (
      <div>
        <div className='personal-pictures_header'>
           <h1>{this.props.match.params.author}</h1>
        </div>
        <div className='personal-pictures_header2'>
          <h4>{this.state.photos.length} Photos</h4>
          <Link to="/">
            <h2>🔙</h2>
          </Link>
        </div>
        <div className='personal-pictures_contents'>
        {this.state.photos.map((photo)=>{
          return (<PersonalPictures photo={photo}></PersonalPictures>)
        })} 
        </div>
      </div>
    );
  }
}

export default Personal;