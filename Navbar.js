
import React, { Component } from 'react'
import './Navbar.css'
import { MenuItems } from './MenuItems'
import {Button} from './Button'


 class Navbar extends Component {
     state= {clicked: false}

     handleClick=()=>{
         this.setState({clicked: !this.state.clicked}) //opposite of clicked (false as defined above) is true
         // when clicked , clicked gives true value
     }


    render() {
        return (
            <nav className="NavbarItems">   
                <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}>  
                    {/* when clicked, if true gives cross sign otherwise bar sign */}
                    </i>

                </div>
                
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item,index)=> { 
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>

                                </li>
                            )
                        })}
                    </ul>
                    
                
                <Button>Sign up</Button>

            </nav>
        )
    }
}

export default Navbar
