import React from 'react';

function Skills() {
  return (
    <section className="skills">
      <h2>Yetenekler</h2>
      <div className="skills-container">
        <div className="skill-category">
          <ul>
            <li>
              <i className="fas fa-database"></i>
              MySQL
            </li>
            <li>
              <i className="fab fa-js"></i>
              JavaScript
            </li>
            <li>
              <i className="fas fa-code"></i>
              OOP (Nesne Yönelimli Programlama)
            </li>
            <li>
              <i className="fas fa-layer-group"></i>
              Doctrine
            </li>
            <li>
              <i className="fab fa-symfony"></i>
              Symfony
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <ul>
            <li>
              <i className="fab fa-golang"></i>
              Golang
            </li>
            <li>
              <i className="fab fa-git-alt"></i>
              Git
            </li>
            <li>
              <i className="fab fa-php"></i>
              PHP
            </li>
            <li>
              <i className="fas fa-server"></i>
              Arka Plan Web Geliştirmesi
            </li>
            <li>
              <i className="fab fa-docker"></i>
              Docker
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <ul>
            <li>
              <i className="fas fa-network-wired"></i>
              Fiber
            </li>
            <li>
              <i className="fas fa-code-branch"></i>
              REST API
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
