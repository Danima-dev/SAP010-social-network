import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db} from '../../firebase/firebase.config'


export default () => {
    const container = document.createElement('div');
  
    const template = `
    <h2>Seja bem vinda!</h2>
    <div class="post">
      <input id="campo-de-mensagem" placeholder="Que tal compartilhar experiências sobre suas viagens?"/>
      <button id="postar-botao" type="submit">postar</button>
    </div> 
    <div id="lista-de-posts"></div>
    `;
    container.innerHTML = template
  
    const button = container.querySelector('#postar-botao');
    button.addEventListener('click', (event) => {
      event.preventDefault()
      const mensagem = container.querySelector('#campo-de-mensagem').value
      console.log('Testando botao', mensagem)
        addDoc(collection(db, "postagem"), {
        texto: mensagem
      }).then(()=>{
         lista ()
      })
    })

    
    lista()

    function lista (){
      const post = []
      getDocs(collection(db, "postagem")).then((banana)=>{
    
       banana.forEach((doc) =>{
        post.push(doc.data())
        
       })
       console.log(post);
      const elementoLista = container.querySelector("#lista-de-posts") 
       elementoLista.innerHTML = post
      })
     return post;
    }

    return container;
  }

  // aqui serão criado os templates