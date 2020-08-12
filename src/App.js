import React from 'react';
import Axios from 'axios'; 

const API = "https://api.hgbrasil.com/weather?woeid=455821&format=json-cors" // Estamos colocando o endereço da API que vamos usar

class App extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      city: "load .....", // Estamos criando aqui um elemento vazio, mas que vai ser preenchido com o elemento que pegarmos da API
     
      clima: [] // Neste arrai vamos adicionar as reposta da API sobre clima, dia, etc
    }
  }

  componentDidMount(){

      Axios.get(API) // O axios é uma outra forma de buscar links externos (no caso a nossa API) e ele também é uma Promesie
        .then (response=> {
          const json = response.data // Estamos acessando a resposta do servidor (O Axios entende por si só o tipo de resposta não porecisa falar que é JSON)
          
           // Agora que convertemos a resposta em JSON podemos de fato pegar os elementos dentro dele 

            this.setState ({ // Uma vez convertendo a resposta em JSON podemos de fato alterar os dados da nossa aplicação
              city: json.results.city_name, 
              /*Aqui nos pegamos o nosso elemento (city) e estamos alterando o estado dela passando como novo estado o elemento
              alocado no json.results.city_name
              
              Se navegarmos no link da nossa API vamos ver que o nome da cidade esta justamente dentro de results que por sua vez
              é um react, ou seja, basicamente estamos alterando o status da nossa aplicação por meio de uma navegação PONTO*/

              clima: json.results.forecast

            })
  
        
        })

  }
/* Outra coisa que podemos observear é que a função (fetch) é uma Promesie e por sua vez vai retornando dados por meio 
dos métodos (.then) */
  render(){

    return ( 
      <div className= "container">  
            <h1> {this.state.city} </h1>

            <table className="striped centered"> 
              <thead>

                <tr>

                  <th>DATA</th>
                  <th>MIN.</th>
                  <th>MAX.</th>
                  <th>DESC.</th>

                </tr>

              </thead>

              <tbody>

                {
                  this.state.clima.map((day, indice) =>{ //Vamos alterar o estado dos nossos elementos
                    return (
                      <tr key={indice}>  
                        <td>{day.date}</td>
                        <td>{day.min}</td>
                        <td>{day.max}</td>
                        <td>{day.description}</td>
                      </tr>
                    ); // Estamos alterando os dados do nosso clima passando uma (map) pegando os elementos detro dele
                  })
                }

              </tbody>
              
            </table>
      </div>
    );
  }
}

export default App;