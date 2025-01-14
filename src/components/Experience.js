import React from 'react';

function Experience() {
  return (
    <section className="experience">
      <h2>Deneyim</h2>
      <div className="experience-items">
        <div className="experience-item">
          <div className="experience-header">
            <h3>Software Developer</h3>
            <span className="company">
              <a href="https://www.linkedin.com/company/wingieenuygungroup/posts/?feedView=all" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Wingie Enuygun Group
              </a>
            </span>
          </div>
          <p className="period">Ekim 2023 - Şu an</p>
          <ul>
            <li>ENUYGUN otel projesinin bir kısmı Go diline geçirildi. Bu süreçte, projenin son aşamalarında Go dilinde bug düzeltmeleri ve küçük ek özellikler eklemek için çalışma fırsatı buldum.</li>
            <li>Go dilindeki bilgi ve deneyim seviyemi artırma hedefiyle kendimi sürekli geliştiriyorum.</li>
            <li>PHP projesinde Golang ve PHP tarafları arasındaki iletişimi sağlamak için iyileştirmeler yaptım.</li>
          </ul>
          <p className="skills">Teknolojiler: MySQL, JavaScript, OOP, Doctrine, Symfony, Golang, Git, PHP, Docker, Fiber</p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Junior Software Developer</h3>
            <span className="company">
              <a href="https://www.linkedin.com/company/wingieenuygungroup/posts/?feedView=all" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Wingie Enuygun Group
              </a>
            </span>
          </div>
          <p className="period">Mart 2023 - Eylül 2023</p>
          <p className="skills">Teknolojiler: MySQL, JavaScript, OOP, Doctrine, Symfony, Git, PHP</p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Assistant Software Developer</h3>
            <span className="company">
              <a href="https://www.linkedin.com/company/wingieenuygungroup/posts/?feedView=all" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Wingie Enuygun Group
              </a>
            </span>
          </div>
          <p className="period">Haziran 2022 - Mart 2023</p>
          <ul>
            <li>Enuygun Otel projesinde bug düzeltmeleri ve küçük yeni özellikler ekleme üzerine çalıştım.</li>
            <li>Mevcut yazılımın kararlılığını artırmak için çeşitli hata düzeltme görevleriyle ilgilendim.</li>
            <li>Ekip içinde etkili iletişim ve işbirliği becerilerimi geliştirme fırsatı buldum.</li>
          </ul>
          <p className="skills">Teknolojiler: Symfony, MySQL, OOP, Doctrine, PHP</p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Information Technology Intern</h3>
            <span className="company">
              <a href="https://www.linkedin.com/company/wingieenuygungroup/posts/?feedView=all" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Wingie Enuygun Group
              </a>
            </span>
          </div>
          <p className="period">Eylül 2021 - Haziran 2022</p>
          <p className="skills">Teknolojiler: Python, PHP, Microsoft Office, HTML</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
