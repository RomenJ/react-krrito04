import { findByLabelText } from "@testing-library/react";
import { Component } from "react";
const styles={
    layout:{
        backgroundColor:'rgba(255, 255, 255, 0.4)',
        alignItems:  'center',
        display: 'flex',
        flexDirection:'column',

    }, 
    containter:{
        width: '1200px',
    }

}
class Layout extends Component{
    render(){
        return(
        <div style={styles.layout}> 
            <div style={styles.container}>
            {this.props.children}
            </div>
        
        </div>
        
        )
    }
}

export default Layout