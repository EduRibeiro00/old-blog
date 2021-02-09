import React from 'react';
import Img from 'gatsby-image';

const ImageHelper = ({ image, className }) => {
  if (!image) {
    return null;
  }
  if (image.extension === 'gif') {
    return <img src={image.publicURL} className={className} />;
  }
  return <Img fluid={image.childImageSharp.fluid} className={className} />;
}

export default ImageHelper