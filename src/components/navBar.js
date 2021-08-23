import React, { Component } from 'react';

class NavBar extends Component {
    state = { 
        login: false,
        user: 'tal@gmail.com',
        classN: 'newClass',
        num: 45,
     }
     
     getSize(){
         return this.state.num > 30 ? 'big' : 'small'
     }
    
    render() { 
        const {login, user,} = this.state
        return ( 
            <div>
                <h2 style={{backgroundColor:"green"}}>{user}</h2>
                <h3 className = {this.state.classN}>{login ? "online" : "offline"}</h3>
                <p>{this.getSize()}</p>
                <span style={styles.myStyle}>this is an out of the component style object</span>
            </div>
         );
         
    }
    
}
const styles = {
    myStyle: {
        color: "red",
        backgroundColor: 'yellow'
        
    }
}
 
export default NavBar;