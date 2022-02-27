function navbar(){
   return `<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar1">
        <div class="container-fluid">
          <a class="navbar-brand" href="/index.html"
            ><img
              class="logo"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"
              alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/cart.html">Cart</a>
              </li>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
             
            </ul>
            <a href="/cart.html"
              ><button class="cart btn btn-outline-success">CART</button></a
            >
            <div class="cartno"></div>
            <select name="select" id="userlist">
  
            </select>
                
              </button>
            </form>
          </div>
        </div>
      </nav>`;
}
export default navbar