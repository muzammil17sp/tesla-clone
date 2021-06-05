import React, { useState } from "react";
import styled from "styled-components";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
const Header = () => {
    const [Show, setShow] = useState(false)
    const openBurger = () => {
        setShow(!Show)
    }
  return (
    <Container>
      <a>
        <img src="/images/Logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={openBurger} />
          </RightMenu>
          {Show &&      <BurgerMenu>
              <CustomClose onClick={openBurger}>              <CustomCloseButton />
</CustomClose>
              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Used Inventory</a></li>
              <li><a href="#"> Trade-in</a></li>
              <li><a href="#">Cybertruck</a></li>
              <li><a href="#">Roadster</a></li>
              <li><a href="#">SEMI</a></li>
              <li><a href="#">charging</a></li>
              <li><a href="#">PowerWall</a></li>
              <li><a href="#">Commercial energy</a></li>
              <li><a href="#">utilities</a></li>
              <li><a href="#">test drive</a></li>
              <li><a href="#">Find us</a></li>


          </BurgerMenu>}

    
    </Container>
  );
};

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  @media (max-width: 768px) {
   font-size: 13px;
margin-left: 5px;
}


`;
const CustomMenu = styled(MenuOutlinedIcon)`
  cursor: pointer;
`;
const BurgerMenu = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
list-style: none;
display: flex;
flex-direction: column ;
padding: 20px;
transition: all .2s ;
li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.8);
    a{
        font-weight: 600;
text-transform: uppercase;
    }
}

`
const CustomClose = styled.div`
display: flex;
justify-content: flex-end;
`
const CustomCloseButton = styled(CloseOutlinedIcon)`
`