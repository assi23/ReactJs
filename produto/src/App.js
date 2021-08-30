import { Component } from "react";
import Produto from "./components/Produto";
import ProdutoList from "./components/ProdutoList";

class App extends Component {
  list = [];
  constructor(){
    super();
    this.state = {
      list : this.list
    }
  }
  create(model){
    this.list.push(model);
    this.setState({
      list : this.list
    })
  }
  render (){
    return (
      <section>
        <Produto create = {this.create.bind(this)}/>
        <ProdutoList list = {this.state.list}/>
      </section>
  )
  }
    
}

export default App;
