import { Component } from "react";
import {ReactComponent as DeleteImg} from "../../assets/img/delete.svg" 

class CategoriaList extends Component {

    handlerDelete(nome,event){
        event.stopPropagation();
        event.preventDefault();
        this.props.deleteCat(nome);
    }
  render() {
    return (
      <section>
        <br />
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.listCat.map((c, i) => (
              <tr key={i}>
                <td>{c}</td>
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

export default CategoriaList;
