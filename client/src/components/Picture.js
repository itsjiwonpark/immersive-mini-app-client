import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Picture.css';



class Picture extends Component {

  render() {
    return (
      <div className='picture'>
        <Link to={`/detail/${this.props.photo.id}`} params={{photo : `${this.props.photo}`}} >
          <span className='picture_author-name'>{this.props.photo.author}</span>
          <img className='picture_img' src={`https://picsum.photos/200/300?image=${this.props.photo.id}`} alt='stupid'  />
        </Link>
      </div>
    );
  }
}

export default Picture;