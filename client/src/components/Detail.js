import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../style/Detail.css';


class Detail extends Component {

  state = {
    photo: 'hi'
  };

  componentDidMount(){
    axios.get(`http://localhost:3000/pictures/${this.props.match.params.id}`)
    .then((res)=>{
      this.setState({photo: res.data}) 
    })
  }
  render() {
    return (
      <div className='detail'>
        <div className="detail_header">
        <Link to={`/personal/${this.state.photo[0].author}`}>
        <h4>@{this.state.photo[0].author}</h4>
        </Link>
        <Link to="/">
        <h3>𝗫</h3>
        </Link>
        </div>
        <div className='detail_contents'>
           <img className='detail_img' src={`https://picsum.photos/200/300?image=${this.props.match.params.id}`} alt='stupid'  />
        </div>
      </div>
    );
  }
}

export default Detail;