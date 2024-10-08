// SharedComponents.js

// Navigation component
class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="container">
      <nav>
        <ul>
          <li>
            <figure>
              <a href="index.html" title="Return to homepage" aria-label="Home" role="link">
                <svg width="54" height="28" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.177 17.7031L28.8523 16.0705L29.181 16.3909C30.3765 17.5559 31.9768 18.216 33.6854 18.216C35.3987 18.216 36.9974 17.5795 38.1883 16.3926C39.3835 15.2276 40.0632 13.666 40.0632 12C40.0632 10.3296 39.4098 8.7714 38.1917 7.61091C36.9964 6.44587 35.3943 5.78395 33.6854 5.78395C31.9721 5.78395 30.3755 6.41867 29.1847 7.60549L18.4956 18.0223C16.8353 19.6403 14.6494 20.51 12.3146 20.51C9.97851 20.51 7.7639 19.6111 6.13361 18.0223C4.47336 16.4044 3.58127 14.2746 3.58127 12C3.58127 9.72417 4.50336 7.56636 6.13361 5.97764C7.7939 4.35966 9.97975 3.48999 12.3146 3.48999C14.6507 3.48999 16.8653 4.38888 18.4956 5.97764L18.8231 6.29683L17.1478 7.92948L16.8191 7.6091C15.6236 6.44407 14.0234 5.78395 12.3146 5.78395C10.6012 5.78395 9.00276 6.42048 7.81195 7.60733C6.61644 8.77239 5.93686 10.334 5.93686 12C5.93686 13.6704 6.59037 15.2286 7.80827 16.3891C9.00375 17.5541 10.6058 18.216 12.3146 18.216C14.0279 18.216 15.6246 17.5813 16.8154 16.3945L27.5045 5.97764C29.1648 4.35966 31.3507 3.48999 33.6854 3.48999C36.0217 3.48999 38.2363 4.38888 39.8665 5.97764C41.5269 7.59558 42.419 9.72538 42.419 12C42.419 14.2758 41.4968 16.4336 39.8665 18.0223C38.2363 19.6111 36.0217 20.51 33.6854 20.51C31.3494 20.51 29.1348 19.6111 27.5045 18.0223L27.177 17.7031ZM24.6439 20.1717L26.3192 18.539L26.6479 18.8594C30.5433 22.6555 36.8577 22.6533 40.7224 18.86C44.6184 15.0634 44.6165 8.90788 40.7236 5.14116C38.8305 3.29619 36.3564 2.29397 33.6854 2.29397C31.0144 2.29397 28.5412 3.29562 26.6479 5.14059L15.9625 15.5538C15.0015 16.4904 13.6892 17.02 12.3146 17.02C10.9399 17.02 9.62768 16.4904 8.66667 15.5538C7.70565 14.6173 7.16247 13.3389 7.16247 12C7.16247 10.6611 7.70565 9.38269 8.66667 8.44618C9.62768 7.50961 10.9399 6.97999 12.3146 6.97999C13.6892 6.97999 15.0015 7.50961 15.9625 8.44618L16.29 8.76538L14.6147 10.398L14.286 10.0776C13.759 9.56411 13.061 9.27395 12.3146 9.27395C11.5682 9.27395 10.8701 9.56411 10.3431 10.0776C9.81616 10.5912 9.51807 11.2718 9.51807 12C9.51807 12.7282 9.81616 13.4088 10.3431 13.9223C10.8701 14.4359 11.5682 14.7261 12.3146 14.7261C13.061 14.7261 13.759 14.4359 14.286 13.9223L24.9714 3.50912C27.3009 1.23896 30.3892 3.07368e-06 33.6854 3.07368e-06C36.9816 3.07368e-06 40.07 1.23896 42.3994 3.50912C44.7289 5.77926 46 8.78845 46 12C46 15.2116 44.7289 18.2207 42.3994 20.4909C40.009 22.8206 36.8611 24 33.6854 24C30.5396 24 27.3625 22.821 24.9714 20.4909L24.6439 20.1717ZM21.3561 3.82832L19.6808 5.46096L19.3521 5.14059C15.4567 1.34445 9.14231 1.34668 5.2776 5.14002C1.38174 8.93662 1.38344 15.0921 5.27642 18.8588C7.16965 20.7038 9.64347 21.706 12.3145 21.706C14.9856 21.706 17.4589 20.7044 19.3521 18.8594L30.0375 8.44618C30.9986 7.50961 32.3109 6.97996 33.6854 6.97996C35.0602 6.97996 36.3722 7.50961 37.3333 8.44618C38.2945 9.38269 38.8376 10.6611 38.8376 12C38.8376 13.3389 38.2945 14.6173 37.3333 15.5538C36.3722 16.4904 35.0602 17.02 33.6854 17.02C32.3109 17.02 30.9986 16.4904 30.0375 15.5538L29.71 15.2346L31.3854 13.602L31.7139 13.9223C32.2409 14.4359 32.9392 14.7261 33.6854 14.7261C34.432 14.7261 35.1299 14.4359 35.6569 13.9223C36.1839 13.4088 36.4818 12.7281 36.4818 12C36.4818 11.2718 36.1839 10.5912 35.6569 10.0776C35.1299 9.56411 34.432 9.27395 33.6854 9.27395C32.9392 9.27395 32.2409 9.56411 31.7139 10.0776L21.0286 20.4909C18.6991 22.761 15.6108 24 12.3145 24C9.0183 24 5.93002 22.761 3.6005 20.4909C1.27103 18.2207 0 15.2116 0 12C0 8.78845 1.27103 5.77926 3.6005 3.50912C5.93002 1.23895 9.0183 0 12.3145 0C15.6108 0 18.6991 1.23895 21.0286 3.50912L21.3561 3.82832Z" fill="#B7B8BB"/>
                </svg>
              </a>
            </figure>
          </li>
        </ul>
        <ul>
          <li>
            <a href="framework.html" class="contrast">Framework</a>&nbsp;&ensp;
            <a href="https://fedn.readthedocs.io/en/stable/index.html" target="_blank" class="contrast">Docs</a>&nbsp;&ensp;
            <a href="projects.html" class="contrast">Projects</a>&nbsp;&ensp;
            <a href="about.html" class="contrast">About</a>&nbsp;&ensp;
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

// Footer component
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="container">
      <nav>
        <ul>
          <li>
          Scaleout&ensp;&nbsp;
          <a href="https://github.com/scaleoutsystems"> <img width="18" height="auto" src="https://cdn.simpleicons.org/github/B7B8BB?viewbox=auto" alt="GitHub icon"> </a>&ensp;
          <a href="https://www.linkedin.com/company/scaleout-systems"> <img width="18" height="auto" src="https://cdn.simpleicons.org/linkedin/B7B8BB?viewbox=auto" alt="LinkedIn icon"> </a>&ensp;
          <a href="https://discord.gg/KMg4VwszAd"> <img width="18" height="auto" src="https://cdn.simpleicons.org/discord/B7B8BB?viewbox=auto" alt="Discord icon"> </a>
          </li>
        </ul>
          <li>
            <small>
            <a href="framework.html" class="contrast">Framework</a>&nbsp;&ensp;
            <a href="https://fedn.readthedocs.io/en/stable/index.html" target="_blank" class="contrast">Docs</a>&nbsp;&ensp;
            <a href="articles.html" class="contrast">Articles</a>&nbsp;&ensp;
            <a href="projects.html" class="contrast">Projects</a>&nbsp;&ensp;
            <a href="about.html" class="contrast">About</a>&nbsp;&ensp;
            <a href="pricing.html" class="contrast">Pricing</a>&nbsp;&ensp;
            <a href="terms.html" class="contrast">Terms</a>
            </small>
          </li>
        </ul>
      </nav>
    </footer>
    `;
  }
}

// Define custom elements
customElements.define('nav-bar', NavBar);
customElements.define('site-footer', Footer);
