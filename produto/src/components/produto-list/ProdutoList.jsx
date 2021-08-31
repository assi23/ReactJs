import { Component } from "react";
import {ReactComponent as DeleteImg} from "../../assets/img/delete.svg"

class ProdutoList extends Component {
  constructor(props){
    super(props);
    this.list = props.list;
  }
  handlerDelete(id,event){
    event.stopPropagation();
    event.preventDefault();
    this.props.delete(id);
  }
    render() { 
        return (
          <section>
            <br />
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Categoria</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.list.map((c, i) => (
                  <tr key={i}>
                    <td>{c.id}</td>
                    <td>{c.nome}</td>
                    <td>{c.categoria}</td>
                    <td>
                      <DeleteImg
                        title="deletar"
                        onClick={this.handlerDelete.bind(this, c.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
    }
}
 
export default ProdutoList;