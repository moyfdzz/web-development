import React from 'react';
import './App.css';
import Hoby from './Hoby';
import NuevoHoby from './NuevoHoby';
import Students from './Students';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: "Alfredo",
      apellido: "Salazar",
      hobbies: [{
        nombre: "Programar"
      },
      {
        nombre: "Dar clases"
      },
      {
        nombre: "Escuchar música"
      },
      {
        nombre: "Ver peliculas"
      }
      ],
      students: [],
      apiURL: "http://localhost:8080"
    }
  }

  agregaHoby = (hoby) => {
    let listaNueva = [...this.state.hobbies, hoby];

    // listaNueva.push(hoby);

    this.setState({
      hobbies: listaNueva
    });
  }

  componentDidMount() {
    let url = `${this.state.apiURL}/api/students`;
    let settings = {
      method: 'GET'
    }

    fetch(url, settings)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJSON => {
        this.setState({
          students: responseJSON
      })})
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <BrowserRouter>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/students'> Students </Link>
      </nav>
      <Route path='/students'
        render={(props) => <Students lista={this.state.students}/>}/>
      <div>
        Hola de nuevo {this.state.nombre} {this.state.apellido}

        <NuevoHoby agregaHoby={this.agregaHoby}/>
        <div>
          {this.state.hobbies.map((hoby, index) => {
            return (
              <Hoby accion={hoby.nombre} test={index} />
            )
          })}
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;