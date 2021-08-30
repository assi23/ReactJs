import { Component } from "react";

class Produto extends Component {
    id;
    nome;
    categoria;
    constructor(props){
        super(props);
    }
    handlerInputId(event){
        this.id = event.target.value;
        event.stopPropagation();
    }
    handlerInputName(event){
        this.nome = event.target.value;
        event.stopPropagation();
    }
    handlerInputCategory(event){
        this.categoria = event.target.value;
        event.stopPropagation();
    }
    handlerSave(event){
        let model = {"id":this.id,"nome":this.nome,"categoria":this.categoria};
        //Para não atulizar a página quando der o submit
        event.preventDefault();
        event.stopPropagation();
        this.props.create(model);
    }
    render() { 
        return (
            <section>
                 <form onSubmit={this.handlerSave.bind(this)}>
                    <label>Id</label>
                    <input 
                    type="text" 
                    placeholder="Digite o Id" 
                    onChange={this.handlerInputId.bind(this)} 
                    /> 
                    <br />

                    <label>Nome</label>
                    <input 
                    type="text"
                    placeholder="Digite o Nome"
                    onChange={this.handlerInputName.bind(this)}
                      /> 
                      <br />

                    <label>Categoria</label>
                    <input 
                    type="text" 
                    placeholder="Digite o Categoria"
                    onChange={this.handlerInputCategory.bind(this)}
                     />
                     <br />

                    <input type="submit"/>
                 </form>
            </section>
        );
    }
}
 
export default Produto;