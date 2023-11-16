// The following 54 lines of code was adapted from https://www.youtube.com/watch?v=j5Sl6vx_l1s&t=3s Accsessed: 2023-11-12

// HEADER
class MinHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <nav>
      <div class="nav-links">
        <ul>
          <li><a href="index.html" id="home">HOME</a></li>
          <li><a href="about.html" id="about">ABOUT</a></li>
          <li><a href="contact.html" id="contact">CONTACT</a></li>
          <li><a href="projects.html" id="projects">PROJECTS</a></li>
        </ul>
      </div>
    </nav>
  </header>    
          `;
  }
}
customElements.define("my-header", MinHeader);

// FOOTER
class MinFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="footer-links">
      <ul>
        <li><a href="about.html" class="info-footer">ABOUT</a></li>
        <li><a href="contact.html" class="info-footer">CONTACT</a></li>
      </ul>
      <div class="social-media">
        <a href="https://www.facebook.com/profile.php?id=100011092866911"
          ><img
            class="social-media-logo"
            src="https://cdn-icons-png.flaticon.com/512/81/81341.png  "
            alt="fb"
        /></a>
        <a href="https://www.instagram.com/emma.viitanen/"
          ><img
            class="social-media-logo"
            src="https://www.unipile.com/wp-content/uploads/2022/09/Logo-Instagram-noir-1.png"
            alt="instagram"
        /></a>
        <a href="https://github.com/ju-nmd2023/wuid-portfolio-EmmaViitanen"
          ><img
            class="social-media-logo"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
        /></a>
      </div>
    </div>
  </footer>    
          `;
  }
}
customElements.define("my-footer", MinFooter);
