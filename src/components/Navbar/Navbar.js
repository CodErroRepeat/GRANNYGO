import React,{ Component } from 'react';
import { MenuItems }from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
class Navbar extends Component
{
    state={ clicked:false}
    handleClick= () =>{
        this.setState({clicked:!this.state.clicked})
    }
 render()
 {
    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">GRANNY GO<i className="fa-solid fa-person-cane"></i></h1>
            <div className="menu-icon"onClick={this.handleClick}>
              <i className={this.state.clicked ? 'fas fa-xmark' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
              {MenuItems.map((item, index)=>{
                 return(
                        <li key={index}>
                            <a className={item.cname}href={item.url}>{item.title}
                            </a>
                        </li>
                       )
              })}
            </ul>
            <Button>SIGNUP</Button>
        </nav>
    )
 }
}
export default Navbar