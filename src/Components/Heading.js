import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Nav, Navbar, NavbarBrand,NavItem} from 'reactstrap'

export const Heading = () => {
    return (
        <div>
<Navbar color="dark" dark>
    <Container>
    <NavbarBrand href="/">
            My Branch

        </NavbarBrand>
   
      
        <Nav>
            <NavItem>

            <Link className="btn btn-primary" to="/add">Add Branch</Link>
            </NavItem>
        </Nav>
    </Container>
</Navbar>
        </div>
    )
}
