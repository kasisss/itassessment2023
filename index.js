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
        <nav>
        <div class="navigation">
          <a href = "/">
          <img  src="./assets/images/logo.png" alt="logo" />
          <a/>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="/products.html">Products</a></li>
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
            <p>
              Copyright &copy; 2023 All Rights Reserved | <br />
              Made by Kasis Panta
            </p>
          </div>
          <div class="img__container">
            <img src="./assets/images/logo.png" alt="logo" />
          </div>
          <div class="icons">
            <p><i class="ri-facebook-fill"></i></p>
            <p><i class="ri-twitter-fill"></i></p>
            <p><i class="ri-instagram-fill"></i></p>
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