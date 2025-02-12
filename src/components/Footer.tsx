import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://drive.google.com/file/d/1nnay6iEVGzHQrBmVtEt6EccZt_fm-aNS/view?usp=drivesdk " target="_blank" rel="noreferrer"><ArticleIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;