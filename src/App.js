import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
//from https://www.udemy.com/course/react-guia-definitiva-hooks-router-redux-next-proyectos
class App extends Component{
  state={
    productos:[
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', price: 1000, img: '/productos/arbejas.jpg'},
      {name: 'Lechugas', price: 500, img: '/productos/lechuga.jpg'},

    ], 
    carro:[],
    esCarroVisible: true,

  }
  agregarAlcarro=(producto)=>{
    const{ carro } =this.state
    if (carro.find(x=>x.name === producto.name)){
      const newCarro= carro.map(x=> x.name===producto.name 
        ?({
          ...x,
          cantidad: x.cantidad+1
        })     
      : x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad:1,
      })
    })
  }

  render(){

    return (
      <div> 
        <Navbar carro={this.state.carro} 
   />
        <Layout>
        <Title />
        <Productos
        agregarAlcarro={this.agregarAlcarro}
        productos={this.state.productos}
        />

        </Layout>
        
      </div>

    )
  }
}

export default App;
