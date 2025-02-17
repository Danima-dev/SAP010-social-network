import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db} from '../../firebase/firebase.config'


export default () => {
    const container = document.createElement('div');
  
    const template = `
    <h2>Seja bem vinda!</h2>
      <input id="campo-de-mensagem" placeholder="Que tal compartilhar experiências sobre suas viagens?"/>
      <button id="postar-botao" type="submit">postar</button>
    
    <div id="lista-de-posts">
    </div>
    `;
    container.innerHTML = template
  
    const button = container.querySelector('#postar-botao');
    const campoDeMensagem = container.querySelector('#campo-de-mensagem');
    const listaDePost = container.querySelector('#lista-de-posts');
    
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const mensagem = campoDeMensagem.value;
      console.log('Testando botao', mensagem);

      try {
        await addDoc(collection(db, "postagem"), {
          texto: mensagem
      });

        campoDeMensagem.value = '';
        
        await listaPosts();
        } catch (error){
          console.error('erro ao fazer o post', error);
        }
      });
        
      /*}).then(()=>{
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
*/
    async function listaPosts (){
      listaDePost.innerHTML = '';

      try {

        const imprimirPost = await getDocs(collection(db, 'postagem'));

        imprimirPost.forEach(async (post) => {
          const postFeed = post.data();
          const elementoPost = document.createElement('div');
          elementoPost.classList.add('posts');
          elementoPost.innerHTML = `${postFeed.texto} <button class="excluir-botao" post-id= "${post.id}"> excluir </button> `
          listaDePost.appendChild(elementoPost);
          elementoPost.querySelector('.excluir-botao').addEventListener( 'click', async () => {
            
           // const botao = elementoPost.querySelector('.excluir-botao').getAttribute('post-id');
           const idPost = post.id;
            console.log(idPost, 'post excluido');

            try {
              await deleteDoc (doc(db, 'postagem', idPost));
              elementoPost.remove();
      } catch (error){
        console.error('erro ao excluir post', error);
      }
    });
  });
} catch (error){
        console.error('erro ao listar post', error);
      }

    }
      listaPosts();
    return container;
  }

  // aqui serão criado os templates