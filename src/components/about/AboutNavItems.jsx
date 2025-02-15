import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background: #222;
  padding: 10px;
`;

const NavItem = styled.button`
  position: relative;
  background: none;
  border: none;
  color: #d0d5dd;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  border-radius: 8px;

  &:hover {
    color: white;
  }

  ${({ active }) => active && `color: white;`}

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    border: 2px solid transparent;
    transition: border-color 0.3s ease-in-out;
  }

  ${({ active }) =>
    active &&
    `
    &::after {
      border-color: white;
    }
  `}
`;

const AboutNavItems = () => {
  const menuItems = ["About", "Portfolio", "Service", "Review"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Nav>
      {menuItems.map((item, index) => (
        <NavItem
          key={item}
          active={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        >
          {item}
        </NavItem>
      ))}
    </Nav>
  );
};

export default AboutNavItems;
