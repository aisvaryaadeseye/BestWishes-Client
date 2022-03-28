import React from 'react'
import {Container,Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import logout from "../../assets/icons/logout.svg";


const TopRightNav = ({user}) => {
  const logOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div>
           <Navbar bg="light" expand="lg" id='topRightNavContainer'>
              <Container>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto topRightNav">
                      <Nav.Link className='topRightNavLink' ><Link to='/productScreenChange'>Product</Link></Nav.Link>
                      <Nav.Link  className='topRightNavLink'><Link to='/blogScreen'>Blog</Link></Nav.Link>
                      <NavDropdown title="Help" id='topRightDropdown' className='topRightDropdown'>                 
                          <NavDropdown.Item href="#action/3.1" className='topRightLink'>Services</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2" className='topRightLink'>About us</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className='topRightLink'>Support center</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4" className='topRightLink'>Term of use</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4" className='topRightLink'>Contact</NavDropdown.Item>
                      </NavDropdown>
                      { user ?<NavDropdown title="Account" id='topRightDropdown' className='topRightDropdown'>
                          <NavDropdown.Item  className='topRightLink'> <Link to='/profileScreen/overview'>View Profile</Link> </NavDropdown.Item>
                          <NavDropdown.Item  className='topRightLink'><Link to='#'>Message</Link></NavDropdown.Item>
                          <NavDropdown.Item  className='topRightLink'><Link to='#'>Orders</Link></NavDropdown.Item>
                          <NavDropdown.Item  className='topRightLink'><Link to='/registerScreen/sellerRegisterAccount'>Sell on Best Wishes</Link></NavDropdown.Item>
                          <NavDropdown.Item  className='topRightLink' onClick={logOut}> <img src={logout} alt="" className="logOutIcon" />Log-out</NavDropdown.Item>
                      </NavDropdown> :
                       <NavDropdown title="Account" id='topRightDropdown' className='topRightDropdown'>
                          <NavDropdown.Item  className='topRightLink'> <Link to='/loginScreen/customerLoginAccount'>Sign In</Link> </NavDropdown.Item>
                          <NavDropdown.Item  className='topRightLink'><Link to='/registerScreen/customerRegisterAccount'>Sign Up</Link></NavDropdown.Item>
                      </NavDropdown>
                      }
                      
                    
                      <Nav.Link href="#link" className='topRightNavLink'>
                        <p>
                          Cart&nbsp;<i className='fa fa-cartfa fa-shopping-cart'></i>
                        </p> 
                      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    </div>
  )
}

export default TopRightNav