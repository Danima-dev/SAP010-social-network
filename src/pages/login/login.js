import { entrar} from '../../firebase/firebase.js'
// aqui serão criado os templates

export default () => {
    const container = document.createElement('div');
  
    const template = `
    <div class="login">
      <div class="descricao">
        <p>
          Uma rede social segura para mulheres que curte viajar 
          sozinha e gosta compartilhar dicas,  experiências 
          sobre as viagens e também  fazer novas amizades.
        </p>
        
      </div>
      <form>
        <h2>Login</h2>
        
        <input id="email" type="text" name="email" placeholder="Seu email..."/>
        <input id="password" type="password" name="senha" placeholder="Sua senha..."/>
        <a href="http://127.0.0.1:5173/#cadastro">Criar nova conta</a>
        <button id="botao" type="submit">ENTRAR</button>
      </form>
    </div>
    `;


    container.innerHTML = template
  
    

    const botao = container.querySelector('#botao')

    botao.addEventListener('click', (event) =>{
      event.preventDefault()
      const email = container.querySelector('#email').value
      const senha = container.querySelector('#password').value
      console.log('Testando botão', email, senha)
      entrar(email, senha).then(() =>{
        window.location.hash = '#feed';
      })
    })
    
    return container;
    
  }

  
    