import { Component, useState } from "react";
class Categoria extends Component {
    nome;
    handlerInputNome(event){
      event.stopPropagation();
      this.nome = event.target.value;
      if(event.keyCode === 13){        
        event.preventDefault();
        this.props.createCat(this.nome);
        document.getElementById("nome").value = "";
      }
    }
    render() { 
        return (
          <section>
            <form>
              <label>Nome:</label>
              <input 
              type="text"
              id="nome"
               placeholder="Digite o nome da categoria" 
              onKeyDown={this.handlerInputNome.bind(this)}
               />
              <br />
            </form>
          </section>
        );
    }
}

export default Categoria;
 