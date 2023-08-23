import { Component } from "react";
const styles={
    button: {
        backgroundColor: 'darkgrey',
        padding: '10px 15px',
        borderRadius: '10px',
        cursor: 'pointer',
        color:'white',
        border:'none',
    }
}
class Button extends Component{

    render(){
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button