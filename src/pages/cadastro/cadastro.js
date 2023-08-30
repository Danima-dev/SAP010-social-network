import { cadastrar } from "../../firebase/firebase";

export default () => {
    const container = document.createElement('div');
  
    const template = `
      <div class="cadastro">
        <form class="formulario-cadastro">

          <h2>Cadastro</h2>
          <input id="nome" type="text" placeholder="Seu nome completo"/>
          <input id="email" type="email" name="email" placeholder="Seu email..."/>
          
          <input id="password" type="password" name="senha" placeholder="Sua senha..."/>
          <button id="botao-cadastrar" type="submit">cadastrar</button>
        </form>
      </div>
    `;

    const cadastroBotao = container.querySelector('#botao-cadastrar');
    cadastroBotao.addEventListener('click', (event) => {
      event.preventDefault()
      const name = container.querySelector('#nome').value
      const email = container.querySelector('#email').value
      const password = container.querySelector('#password').value
      console.log('Testando botao', )
      cadastrar(name, email, password)
    })

  
    container.innerHTML = template
  
    
    
    return container;
    
  }