import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../../images/Logo2.jpg';
import translate from '../../i18Provider/translate'
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
import Products from './Products';

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
      <Navbar color="light" light expand="md"style={{paddingTop:"0"}}>
        <Container >
  <NavbarBrand tag={Link} to="/"><img src={Logo2} alt="" style={{width:"139px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
      
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink id='a' tag={Link} style={aHrefStyle} to='/'
                onClick={() => { startChangeVis('a')}} className={acn1}
               >{translate('home')}</NavLink>
            </NavItem>
            <NavItem>
              < Products id='b'  style={aHrefStyle} 
                onClick={() => { startChangeVis('b')}} active={acn2}
              />
            </NavItem>
            <NavItem>
              <NavLink tag={Link} style={aHrefStyle} to='/gallery'
              onClick={() => { startChangeVis('d')}} className={acn4}
  >{translate('gallery')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} style={aHrefStyle} to='/contact-us' 
              onClick={() => { startChangeVis('e')}} className={acn5}
  >{translate('contactUs')}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;