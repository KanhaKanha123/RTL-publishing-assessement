import {Container,Navbar, Nav, Dropdown, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header=()=>{
 
return <Navbar data-testid="header-wrapper-div" className='header'>
    <Container >
        <Navbar.Brand>
            <Link to='/'>RTL News</Link>
        </Navbar.Brand>
        <Nav>
            <Dropdown>
                <Dropdown.Toggle variant='success'>
                    <Badge bg="inherit">Login</Badge>
                </Dropdown.Toggle>
            </Dropdown>
        </Nav>
    </Container>
</Navbar>
}

export default Header;