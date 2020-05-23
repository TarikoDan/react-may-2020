import React from 'react';
import { socialMediaIcons } from '../../constants';
import './Footer.scss';

export function Footer( props ) {
  return (
    <div className="may-footer">
      <div className="may-footer-content">
          <div className="may-footer-text"> Taras Danylyshyn </div>
          <div className="may-footer-social-media-wrapper">
              {socialMediaIcons.map(({ src, alt }, index) => {
                  return <img key={ index }
                              className="may-footer-social-media-icon"
                              src={src}
                              alt={alt}/>
              })}
          </div>
      </div>
      <div class="text-center font-italic text-light"> All rights reserved. may-app © 2020 </div>
    </div>
  )}

