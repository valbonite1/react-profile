import React from 'react';
import './Footer.css';
import * as RiIcons from 'react-icons/ri';

const Footer = () => {
  return(
    <>
      <div className='footer'>
        <div className='footer-name'>
          <p><em>Val Augustus Larong</em></p>
          <p><b>Bonite</b></p>
        </div>
        <div className='footer-contact'>
          <p>Blk 1A, Lot 7, Camella Seville, North Caloocan</p>
          <p><b>09062798379</b></p>
          <p><b>valbonite@gmail.com | val.bonite@whitecloak.com</b></p>
        </div>
        <div className='footer-logo'>
          <a href="#"><RiIcons.RiVuejsLine className='foot-logo' /></a>
          <h5>Made with love | <i className='fas fa-copyright'></i> Copyright 2020</h5> 
        </div>
      </div>
    </>
  );
}

export default Footer;