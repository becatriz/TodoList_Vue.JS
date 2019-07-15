import Vue from 'vue';

export default  Vue.component("NotFound", {
    template:
      /*html*/
      `
      <div>
          
          <h1>Ops! Página não encontrada</h1>
          <p>A pagina que voce esta pesquisando nao existe . Volte
          para  a pagina inicial</p><router-link to='/'>Aqui</router-link>
  
      </div>

    `


});