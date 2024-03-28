import React from 'react';
import { MenuButton, Span } from './BtnMenu.styled';
import { useAppContext } from '../context';



const BtnMenu = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();

  return (
    <div>
      <MenuButton type="button" onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <Span>{isMenuOpen ? 'CLOSE' : 'MENU'}</Span>
      </MenuButton>
    </div>
  );
};

export default BtnMenu;
