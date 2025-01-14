import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projeler</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-header">
            <h3>Ünlülerin Dünyasına Açılan Kapınız</h3>
            <div className="project-links">
              <a href="https://negiyer.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <p className="project-tech">Negiyer.com</p>
          <p className="project-description">
            Ünlüler hakkında detaylı bilgi sağlamak için oluşturulmuş modern bir platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
