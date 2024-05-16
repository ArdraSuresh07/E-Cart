import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Header() {

  const wishlist = useSelector((state=>state.wishListReducer))
  const cart = useSelector((state=>state.cartReducer))

  return (
    <>
        <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{color:'white',fontWeight:'bold',textDecoration:'none'}} ><i class="fa-solid fa-truck-fast fa-bounce"></i>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/wishlist'} style={{color:'white',fontWeight:'bold',textDecoration:'none'}} ><i class="fa-regular fa-heart fa-beat"></i>WishList
            <Badge bg="success rounded ms-2">{wishlist.length}</Badge>
            </Link></Nav.Link>
            <Nav.Link><Link to={'/cart'} style={{color:'white',fontWeight:'bold',textDecoration:'none'}} ><i class="fa-solid fa-cart-shopping fa-beat"></i>Cart
            <Badge bg="success rounded ms-2">{cart.length}</Badge>
            </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header