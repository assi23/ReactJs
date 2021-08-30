import { Component } from "react";

class ProdutoList extends Component {
  constructor(props){
    super(props);
    this.list = props.list;
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
                </tr>
              </thead>
              <tbody>
                {this.list.map ((c,i) => 
                  <tr key = {i} >
                      <td>{c.id}</td>
                      <td>{c.nome}</td>
                      <td>{c.categoria}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        );
    }
}
 
export default ProdutoList;