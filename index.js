class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
        <nav>
          <div class="navigation">
            <img src="./assets/images/logo.png" alt="logo" />
            <ul>
              <li><a href="/index.html">Home</a></li>
              <li><a href="/about.html">About Us</a></li>
              <li><a href="/contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="icons">
            <p><i class="ri-facebook-fill"></i></p>
            <p><i class="ri-twitter-fill"></i></p>
            <p><i class="ri-instagram-fill"></i></p>
          </div>
        </nav>
        <div class="content">
          <h1>Your face is yours to make</h1>
          <p>Explore your beauty with our product</p>
        </div>
      </header>
        `;
  }
}

class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav id = "nav">
        <div class="navigation">
          <a href = "/index.html">
          <img  src="./assets/images/logo.png" alt="logo" />
          <a/>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="/gallery.html">Gallery</a></li>
            <li><a href="/blog.html">Blog</a></li>
          </ul>
        </div>
        <div class="icons">
          <p><i class="ri-facebook-fill"></i></p>
          <p><i class="ri-twitter-fill"></i></p>
          <p><i class="ri-instagram-fill"></i></p>
        </div>
      </nav>
        `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
        <div>
          <div class="content">
        
            <p>Address: Mahalaxmi-07,Lalitpur</p>    
            <p>Email: Kasis7@gmail.com</p>
            <p>Phone: 9844171953</p>      
            </div>
          <div class="img__container">
            <img src="./assets/images/logo.png" alt="logo" />
          </div>
          <div style = "display:flex;flex-direction:column;gap:50px;">
          <div class="icons">
          <p><a style = "color:#fff;" href= "https://github.com/kasisss"><i class="ri-github-fill"></i></a> </p>
            <p><i class="ri-facebook-fill"></i></p>
            <p><i class="ri-twitter-fill"></i></p>
            <p><i class="ri-instagram-fill"></i></p>
          </div>
          <div>
          <p>
          Copyright &copy; 2023 All Rights Reserved |
          Made by Kasis Panta
        </p>
          </div>
          </div>
        </div>
      </footer>
        `;
  }
}

class Head extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
      integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
      defer
    ></script>
    `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
customElements.define("main-nav", Nav);
customElements.define("main-head", Head);

function setActive() {
  aObj = document.getElementById("nav").getElementsByTagName("a");
  for (i = 0; i < aObj.length; i++) {
    if (document.location.href.indexOf(aObj[i].href) >= 0) {
      aObj[i].className = "active";
    }
  }
}

window.onload = setActive;

$(document).ready(() => {
  $("a").fancybox({
    transitionIn: "elastic",
    transitionOut: "elastic",
    speedIn: 600,
    speedOut: 200,
    overlayShow: true,
  });
});
