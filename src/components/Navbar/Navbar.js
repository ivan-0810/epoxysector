import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg'
import Logo2 from '../../images/Logo2.jpg'
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavbarMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [acn1,setAcn1] = useState('active') // assumes link 1 is default active
  const [acn2,setAcn2] = useState('')
  const [acn3,setAcn3] = useState('')  
  const [acn4,setAcn4] = useState('')
  const [acn5,setAcn5] = useState('')
  const startChangeVis = id => {
    setAcn1('')
    setAcn2('')
    setAcn3('')
    setAcn4('')
    setAcn5('')
    if(id === 'a')      setAcn1('active')
    else if(id === 'b') setAcn2('active')
    else if(id === 'c') setAcn3('active')
    else if(id === 'd') setAcn4('active') 
    else if(id === 'e') setAcn5('active')
  }
  const toggle = () => setIsOpen(!isOpen);

  const aHrefStyle= {
    marginRight: '15px',
    fontSize:'15px',
    textTransform: 'uppercase',
  }
 
  
  return (
    <div>
      <Navbar color="light" light expand="md" >
        <Container >
  <NavbarBrand tag={Link} to="/"><img src={Logo2} alt="" style={{width:"100px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
      
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink id='a' tag={Link} style={aHrefStyle} to='/'
                onClick={() => { startChangeVis('a')}} className={acn1}
               >Home</NavLink>
            </NavItem>
            <NavItem>
              < NavLink id='b' tag={Link}  style={aHrefStyle} to="/our-tables" 
                onClick={() => { startChangeVis('b')}} className={acn2}
              >Our Tables</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id='c' tag={Link} style={aHrefStyle} to="/colours"
                onClick={() => { startChangeVis('c')}} className={acn3}
                >Colours</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} style={aHrefStyle} to='/gallery'
              onClick={() => { startChangeVis('d')}} className={acn4}
               >Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} style={aHrefStyle} to='/contact-us' 
              onClick={() => { startChangeVis('e')}} className={acn5}
              >Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;