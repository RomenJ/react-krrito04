import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'
const styles={
    navbar:{
        backgroundColor:'rgba(255, 255, 255, 0.4)',
        width:'100%',
        display:'flex',
        flexDirection: 'row',
        alignItems:'center', 
        height:'100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0px 2px 3px rgb(0,0,0,0.1)'
        
    }, 
    containter:{
        width: '1200px',
    }

}
class Navbar extends Component{

render(){
 const{ carro}= this.props
return(
    <nav style={styles.navbar}>
    <Logo />
    <Carro carro= {carro}

    />
    </nav>

     )
   }
}

export default Navbar