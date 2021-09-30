import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './index.css';

const Slideshow = () => {
    const images = [
      'images/1.jpg',
      'images/2.jpg',
      'images/3.jpg',
      'images/4.jpg',
      'images/5.jpg',
      'images/6.jpg',
      'images/7.jpg',
      'images/8.jpg',
      'images/9.jpg',
    ];
     
      const props = {
        arrows: false,
        indicators: i => (<div className="indicator">{i + 1}</div>)
      }
     
      return (
        <div>
          <Fade {...props}>
            {images.map((each, index) => (
              <div key={index} style={{width: "100%"}}>
                <img alt="" className="slideshow-conatiner-images" style={{ objectFit: "cover", width: "100%" }} src={each} />
              </div>
            ))}
          </Fade>
        </div>
      )
    }

export default Slideshow;