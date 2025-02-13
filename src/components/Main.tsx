import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/raghav-chawla-170984245/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://github.com/raghchawla131" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://drive.google.com/file/d/1nnay6iEVGzHQrBmVtEt6EccZt_fm-aNS/view?usp=drivesdk " target="_blank" rel="noreferrer"><ArticleIcon /></a>
          </div>
          <h1>Raghav chawla</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/raghav-chawla-170984245/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://github.com/raghchawla131" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://drive.google.com/file/d/1nnay6iEVGzHQrBmVtEt6EccZt_fm-aNS/view?usp=drivesdk " target="_blank" rel="noreferrer"><ArticleIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;