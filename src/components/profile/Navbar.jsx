import React from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { Avatar } from "@mui/material";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 100;
  height: 40px;
  width: 80%;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
  margin: 0 1.5rem;
  cursor: pointer;

  &:hover ul {
    display: block;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #b3b3b3;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 5px;
  min-width: 150px;

  li {
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #444;
    }
  }
`;

const AvatarWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(90deg, #000000, #1a1a1a);
  height: 80px;
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <Logo>Fashioneur.</Logo>
        <NavMenu>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Products <FiChevronDown />
            </NavLink>
            <DropdownMenu>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Resources <FiChevronDown />
            </NavLink>
            <DropdownMenu>
              <li>Resource 1</li>
              <li>Resource 2</li>
              <li>Resource 3</li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#">Pricing</NavLink>
          </NavItem>
        </NavMenu>
        <AvatarWrapper>
          <Avatar alt="User" src="https://via.placeholder.com/150" />
        </AvatarWrapper>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
