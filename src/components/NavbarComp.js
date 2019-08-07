import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { 
    Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const NavbarComp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Container>
                <NavbarToggler onClick={toggle} />          
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem >
                        <NavLink className = "navItem"><Link to ='/' style ={{color: 'white'}}>Home</Link></NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className = "navItem"><Link to ='/projects' style ={{color: 'white'}}>Projects</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  className = "navItem"><Link to ='/contact' style ={{color: 'white'}}>Contact</Link></NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp
