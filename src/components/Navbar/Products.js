import React, { useState } from 'react';
import './navbar.scss';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import translate from '../../i18Provider/translate'

const Products = (props) => {
  const { id, active, onClick} = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret onClick={onClick}
      className={`products ${active}` }id={id}>
      {translate('products')}
        </DropdownToggle>
      <DropdownMenu className="products-menu">
        <DropdownItem>{translate('wood')}</DropdownItem>
        <DropdownItem>{translate('colours')}</DropdownItem>
        <DropdownItem>{translate('finishing-coatings')}</DropdownItem>
        <DropdownItem>{translate('feet')}</DropdownItem>
      </DropdownMenu>
    </Dropdown>

  );
}

export default Products;