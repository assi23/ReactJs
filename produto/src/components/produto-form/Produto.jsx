import { Component } from "react";
class Produto extends Component {
  id = 1;
  nome;
  categoria;
  handlerInputName(event) {
    this.nome = event.target.value;
    event.stopPropagation();
  }
  handlerInputCategory(event) {
    this.categoria = event.target.value;
    event.stopPropagation();
  }
  handlerSave(event) {
    let model = { id: this.id, nome: this.nome, categoria: this.categoria };
    //Para não atulizar a página quando der o submit
    event.preventDefault();
    event.stopPropagation();
    this.props.create(model);
    this.id+=1;
  }
  render() {
    return (
      <section>
        <form onSubmit={this.handlerSave.bind(this)}>
          <label>Id:</label>
          <input
            type="number"
            readOnly
            value={this.id}
          />
          <br />

          <label>Nome:</label>
          <input
            type="text"
            placeholder="Digite o nome"
            onChange={this.handlerInputName.bind(this)}
          />
          <br />

          <label>Categoria:</label>
          <select onClickCapture={this.handlerInputCategory.bind(this)}>
            <option value="" disabled selected>Selecione a Categoria</option>
            {this.props.listCat.map((c, i) => (
              <option key={i} value={c}>
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
