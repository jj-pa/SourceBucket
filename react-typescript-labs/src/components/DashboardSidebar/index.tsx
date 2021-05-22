import React, { FC, useEffect, useState } from 'react';
import {
  SidebarContainer,
  SidebarHeader,
  MenuItemContainer,
  MenuItem,
  Icon,
  Text,
  TogglerContainer,
  Toggler,
  DropdownIcon,
  ItemContainer,
  SubmenuItem,
  SubMenuItemContainer,
} from './DashboardSidebar.styles';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type SubMenuItemStructure = {
  name: string;
  to: string;
};

type MenuItemStructure = {
  name: string;
  to: string;
  icon: any;
  subMenuItems: SubMenuItemStructure[];
};

type SubMenuObject = {
  isOpen: boolean;
  selected: any;
};

type Props = {
  sidebarHeader: {
    fullName: string;
    shortName: string;
  };
  menuItems: MenuItemStructure[];
};

const DashboardSidebar: FC<Props> = (props: Props) => {
  const {
    sidebarHeader = {
      fullName: '',
      shortName: '',
    },
    menuItems = [],
  } = props;

  // state
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);
  const [subMenusStates, setSubmenus] = useState({});

  // effects

  // Update of header state
  useEffect(() => {
    isSidebarOpen
      ? setTimeout(() => setHeader(sidebarHeader.fullName), 200)
      : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader]);

  // Update of sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1200) setSidebarState(false);
      else setSidebarState(true);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [isSidebarOpen]);

  // Add index of menu items with submenus to state
  useEffect(() => {
    const newSubmenus: any = {};

    menuItems.forEach((item: MenuItemStructure, index) => {
      const hasSubmenus = item.subMenuItems.length !== 0;

      if (hasSubmenus) {
        newSubmenus[index] = {};
        newSubmenus[index]['isOpen'] = false;
        newSubmenus[index]['selected'] = null;
      }
    });

    setSubmenus(newSubmenus);
  }, [menuItems]);

  const handleMenuItemClick = (name: any, index: number) => {
    setSelectedMenuItem(name);

    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));
    if (subMenusStates.hasOwnProperty(index)) {
      // @ts-ignore
      subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen'];
      setSubmenus(subMenusCopy);
    }
  };

  const menuItemJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;

    const hasSubmenus = !!item.subMenuItems.length;
    // @ts-ignore
    const isOpen = subMenusStates[index]?.isOpen;

    const subMenusJSX = item.subMenuItems.map(
      (subMenuItem, subMenuItemIndex) => {
        return (
          <SubmenuItem key={subMenuItemIndex}>{subMenuItem.name}</SubmenuItem>
        );
      }
    );

    return (
      <ItemContainer key={index}>
        {/*<Link to={item.to} style={{ textDecoration: 'none' }}>*/}
        <MenuItem
          selected={isItemSelected}
          onClick={() => handleMenuItemClick(item.name, index)}
          isSidebarOpen={isSidebarOpen}
          isOpen={isOpen}
        >
          <Icon src={item.icon} isSidebarOpen={isSidebarOpen} />
          <Text isSidebarOpen={isSidebarOpen}>{item.name}</Text>
          {hasSubmenus && isSidebarOpen && (
            <DropdownIcon selected={isItemSelected} isOpen={isOpen} />
          )}
        </MenuItem>
        {/*</Link>*/}
        {/*Display submenus if they exist*/}
        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <SubMenuItemContainer isSidebarOpen={isSidebarOpen}>
                {subMenusJSX}
              </SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </ItemContainer>
    );
  });

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SidebarHeader>{header}</SidebarHeader>
      <MenuItemContainer>{menuItemJSX}</MenuItemContainer>
      <TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <Toggler />
      </TogglerContainer>
    </SidebarContainer>
  );
};

export default DashboardSidebar;
