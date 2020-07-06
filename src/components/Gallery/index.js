import React, { Component } from 'react';

// Note: utils
import bem from 'utils/bem';


const cls = bem('gallery');

class Gallery extends Component {
  render() {
    return <div className={cls()}></div>
  }
}

export default Gallery;