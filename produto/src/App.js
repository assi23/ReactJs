import { Component } from "react";
import Categoria from "./components/categoria-form";
import CategoriaList from "./components/categoria-list/categoriaList";
import Produto from "./components/produto-form";
import ProdutoList from "./components/produto-list";

class App extends Component {
  list = [];
  listCat = [];
  constructor(){
    super();
    this.state = {
      list : this.list,
      listCat : this.listCat
    }
  }
  create(model){
    this.list.push(model);
    this.setState({
      list : this.list
    })
  }
  createCat(nome){
    this.listCat.push(nome);
    this.setState({
      listCat:this.listCat
    })
  }
  delete(id){
    let item = this.list.findIndex(p=>p.id === id);
    this.list.splice(item, 1);
    this.setState({
      list : this.list
    })
  }
  deleteCat(nome){
    let itemNome = this.listCat.findIndex(c=> c === nome);
    this.listCat.splice(itemNome,1);
    this.setState({
      listCat : this.listCat
    })
  }
  render (){
    return (
      <section>
        <Produto create = {this.create.bind(this)} listCat = {this.state.listCat}/>
        <ProdutoList list = {this.state.list} delete = {this.delete.bind(this)}/>
        <Categoria createCat = {this.createCat.bind(this)}/>
        <CategoriaList listCat = {this.state.listCat}  deleteCat = {this.deleteCat.bind(this)}/>
      </section>
  )
  }
    
}

export default App;
