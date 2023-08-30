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


    container.innerHTML = template
  
    
    
    return container;
    
  }