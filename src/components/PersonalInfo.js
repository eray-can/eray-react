import React from 'react';

function PersonalInfo() {
  return (
    <section className="personal-info">
      <div className="profile-image">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQHovp9x1kM1OQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1673699260062?e=1742428800&v=beta&t=U3u8gKstQ0PnKYDbJ3XLJvI0z2iUhfMGz3wKn9i0jaY"
          alt="Profil Fotoğrafı"
        />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/eraycan/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/eray-can" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="details">
        <h1>Eray Can</h1>
        <p className="title">Backend Developer</p>
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i>
            ceray6575@gmail.com
          </p>
          <p>
            <i className="fas fa-phone"></i>
            +90 539 735 67 44
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            İstanbul, Türkiye
          </p>
          <p>
            <i className="fas fa-birthday-cake"></i>
            01.01.2004 (21 yaş)
          </p>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
