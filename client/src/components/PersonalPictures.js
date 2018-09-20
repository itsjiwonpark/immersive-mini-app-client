import React, { Component } from 'react';
import '../style/PersonalPictures.css'

class PersonalPictures extends Component {

  render() {
    return (
      <div>
        <div className='personal-pictures_contents'>
          <img className='personal-pictures_img' src={`https://picsum.photos/200/300?image=${this.props.photo.id}`} alt='stupid'  />
        </div>
      </div>
    );
  }
}

export default PersonalPictures;