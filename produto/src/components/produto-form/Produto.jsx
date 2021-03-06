import { Component } from "react";
class Produto extends Component {
  id = 1;
  nome;
  categoria;
  handlerInputName(event) {
    event.stopPropagation();
    this.nome = event.target.value;
  }
  handlerInputCategory(event) {
    this.categoria = event.target.value;
    event.stopPropagation();
  }
  handlerSave(event) {
    let model = { "id": this.id, "nome": this.nome, "categoria": this.categoria };
    //Para não atulizar a página quando der o submit
    event.preventDefault();
    event.stopPropagation();
    this.props.create(model);
    document.getElementById("nomeProduto").value = "";
    document.getElementById("nomeCat").value = document.getElementById("gg").value;
    this.id+=1;
  }
  render() {
    return (
      <section>
        <form onSubmit={this.handlerSave.bind(this)}>
          <label>Id:{this.id}</label>
          <br />

          <label>Nome:</label>
          <input
            id="nomeProduto"
            type="text"
            placeholder="Digite o nome"
            onChange={this.handlerInputName.bind(this)}
          />
          <br />

          <label>Categoria:</label>
          <select
          id="nomeCat"
          defaultValue = "default"
          onClickCapture={this.handlerInputCategory.bind(this)}
           >
            <option id= "gg" value="default" disabled >Selecione a Categoria</option>
            {this.props.listCat.map((c, i) => (
              <option key={i} value={c} >
                {c}
              </option>
            ))}
          </select>
          <br />
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default Produto;
