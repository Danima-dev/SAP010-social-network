import home from "./pages/login/login.js";
import feed from "./pages/feed/feed.js";
import cadastro from "./pages/cadastro/cadastro.js";

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    console.log(window.location.hash)
    switch(window.location.hash){
      case " ":
        main.appendChild(home());
        break;
      case "#cadastro":
        main.appendChild(cadastro());
        break;  
      case "#feed":
        main.appendChild(feed());
        break;
        default:  
        main.appendChild(home());
    }
  })
}

window.addEventListener("load", () =>{
  window.location.hash = "";
  main.appendChild(home());
  init();
})