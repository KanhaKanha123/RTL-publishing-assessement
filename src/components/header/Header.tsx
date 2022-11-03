import { Container, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    return <Navbar data-testid="header-wrapper-div" className='header'>
        <Container >
            <Navbar.Brand>
                <Link className='headerText' data-testid="header-anchor" to='/'>RTL News</Link>
            </Navbar.Brand>
            <Nav>
                <Dropdown>
                    <Badge className='headerText' data-testid="header-login" bg="inherit">Login</Badge>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
}

export default Header;