import styled from 'styled-components';

type SidebarContainerProps = {
  isSidebarOpen: boolean;
};

export const SidebarContainer = styled.div<SidebarContainerProps>`
  width: ${(p) => (p.isSidebarOpen ? '20%' : '5%')};
  max-width: 280px;
  min-width: 80px;
  background: #fff;
  position: relative; // Toggler
  transition: 0.2s ease-in all;
`;

export const SidebarHeader = styled.h3`
  padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

export const MenuItemContainer = styled.div``;
export const ItemContainer = styled.div``;

type MenuItemProps = {
  selected: boolean;
  isSidebarOpen: boolean;
  isOpen: boolean;
};

export const MenuItem = styled.div<MenuItemProps>`
  ${(p) =>
    !p.isSidebarOpen &&
    `
    text-align: center;
    ${p.selected && 'background-color: rgba(0, 0, 0, 0.6);'};
  `}

  font-weight: 400;
  color: ${(p) => (p.selected ? 'rgba(0, 0, 0)' : 'rgba(19, 15, 64)')};
  white-space: nowrap;
  position: relative; // Dropdown icon
  transition: 0.2s ease-in all;
  padding: 6px 20px;
  margin: 8px 0 4px;
  &:hover {
    color: rgba(0, 0, 0);
    transition: 0.1s ease-in all;
  }
`;

type IconProps = {
  isSidebarOpen: boolean;
};

export const Icon = styled.img<IconProps>`
  ${(p) =>
    p.isSidebarOpen &&
    `
    margin-right: 20px;
    transition: 0.2s ease-in all;
  `};
  height: 16px;
  width: 16px;
`;

type TextProps = {
  isSidebarOpen: boolean;
};

export const Text = styled.p<TextProps>`
  display: ${(p) => (p.isSidebarOpen ? 'inline' : 'none')};
`;

// Sub menu item
type SubMenuItemContainerProps = {
  isSidebarOpen: boolean;
};
export const SubMenuItemContainer = styled.div<SubMenuItemContainerProps>`
  font-size: 14px;
  ${(p) =>
    p.isSidebarOpen &&
    `
    padding-left: 15%;
  `};
  ${(p) =>
    !p.isSidebarOpen &&
    `
    text-align: center;
  `};
`;
export const SubmenuItem = styled.div`
  color: rgba(19, 15, 64);
  cursor: pointer;
  margin: 8px 0 4px;
  padding: 6px 35px;
`;

// Dropdown icon
type DropdownIconProps = {
  selected: boolean;
  isOpen: boolean;
};
export const DropdownIcon = styled.span<DropdownIconProps>`
  position: absolute;
  top: ${(p) => (p.isOpen ? '16px' : '12px')};
  right: 24px;
  border: solid
    ${(p) => (p.selected ? 'rgba(255, 255, 255)' : 'rgba(10, 15, 64)')};
  border-width: 0 1px 1px 0;
  padding: 3px;
  transform: ${(p) => (p.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transition: 0.4s;
`;

// Toggler
export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Toggler = styled.div`
  height: 40px;
  cursor: pointer;
  position: relative; // horizontal lines

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25em;
    height: 0.1em;
    width: 100%;
    background: #000;
    box-shadow: 0 0.75em 0 0 #000, 0 1.5em 0 0 #000;
  }
`;
