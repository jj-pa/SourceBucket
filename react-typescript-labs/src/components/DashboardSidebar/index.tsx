import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import {
  SidebarContainer,
  SidebarHeader,
  MenuItemContainer,
  MenuItem,
  ImageIcon,
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
  selected: number;
};

type Props = {
  sidebarHeader: {
    fullName: string;
    shortName: string;
  };
  menuItems: MenuItemStructure[];
  initialMenuName?: string;
};

const DashboardSidebar: FC<Props> = (props: Props) => {
  const {
    sidebarHeader = {
      fullName: '',
      shortName: '',
    },
    menuItems = [],
    initialMenuName = '',
  } = props;

  // state
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);
  const [subMenusStates, setSubmenus] = useState({});

  // layoutEffects
  useLayoutEffect(() => {
    initialMenuName &&
      setSelectedMenuItem(
        initialMenuName.charAt(0).toUpperCase() + initialMenuName.slice(1)
      );
  }, []);

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
    } else {
      for (let item in subMenusStates) {
        subMenusCopy[item]['isOpen'] = false;
        subMenusCopy[item]['selected'] = null;
      }
      setSubmenus(subMenusCopy);
    }
  };

  const handleSubMenuItemClick = (
    menuItemIdx: number,
    subMenuItemIdx: number
  ) => {
    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

    subMenusCopy[menuItemIdx]['selected'] = subMenuItemIdx;
    setSubmenus(subMenusCopy);
  };

  const menuItemJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;

    const hasSubmenus = !!item.subMenuItems.length;
    // @ts-ignore
    const isOpen = subMenusStates[index]?.isOpen;

    const subMenusJSX = item.subMenuItems.map(
      (subMenuItem, subMenuItemIndex) => {
        const isSubmenuItemSelected = // @ts-ignore
          subMenusStates[index]?.selected === subMenuItemIndex;
        return (
          <Link
            to={`${item.to}${subMenuItem.to}`}
            style={{ textDecoration: 'none' }}
            key={subMenuItemIndex}
          >
            <SubmenuItem
              onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
              selected={isSubmenuItemSelected}
            >
              {subMenuItem.name}
            </SubmenuItem>
          </Link>
        );
      }
    );

    return (
      <ItemContainer key={index}>
        <Link to={item.to} style={{ textDecoration: 'none' }}>
          <MenuItem
            selected={isItemSelected}
            onClick={() => handleMenuItemClick(item.name, index)}
            isSidebarOpen={isSidebarOpen}
            isOpen={isOpen}
          >
            <ImageIcon src={item.icon} isSidebarOpen={isSidebarOpen} />
            <Text isSidebarOpen={isSidebarOpen}>{item.name}</Text>
            {hasSubmenus && isSidebarOpen && (
              <DropdownIcon selected={isItemSelected} isOpen={isOpen} />
            )}
          </MenuItem>
        </Link>
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
