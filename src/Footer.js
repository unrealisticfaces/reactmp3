import React from "react";
import './App.css'; // Ensure this file contains the footer CSS

function Footer() {
  return (
    <section className="footer">
      <div className="footer-box">
        <h3>ProjectX</h3>
        <p>Join us in revolutionizing IT with cutting-edge <br />
          diskless solutions and innovation.
        </p>
        <div className="social">
          <a href="https://www.facebook.com/kthdavidx"><i className='bx bxl-facebook'></i></a>
          <a href="https://github.com/unrealisticfaces"><i className='bx bxl-github'></i></a>
          <a href="https://www.instagram.com/ifyouseekeee"><i className='bx bxl-instagram'></i></a>
          <a href="https://www.tiktok.com/@ifyouseekeee"><i className='bx bxl-tiktok'></i></a>
        </div>
      </div>
      <div className="footer-box">
        <h3>Support</h3>
        <div className="overview">
          <li><a href="https://buymeacoffee.com/unrealisticfaces">Buy me Coffee</a></li>
          <li><a href="https://unrealisticfaces.github.io/portfolio/">Gcash</a></li>
          <li><a href="https://unrealisticfaces.github.io/portfolio/#characters">Paypal</a></li>
      
        </div>
      </div>
      <div className="footer-box">
        <h3>Contact</h3>
        <div className="contact">
          <span><i className='bx bxs-map'></i>Cebu City, Philippines</span>
          <span><i className='bx bxs-phone'></i>+63 9155448924</span>
          <span><i className='bx bxs-envelope'></i>lumetrikeith@gmail.com</span>
        </div>
      </div>
    </section>
  );
}


export default Footer;
