import React, { FC, useState } from 'react';
import {
  SidebarLink,
  SidebarLabel,
  DropdownLink,
} from './DashboardNavbarElements';

type SubItemProps = {
  title: string;
  path: string;
  icon: any;
};

type ItemProps = {
  item: {
    title: string;
    path: string;
    icon: any;
    iconClosed?: any;
    iconOpend?: any;
    subNav?: SubItemProps[];
  };
};

const SubMenu: FC<ItemProps> = ({ item }: ItemProps) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {<item.icon />}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav ? (
            <item.iconOpend />
          ) : item.subNav ? (
            <item.iconClosed />
          ) : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav &&
        item.subNav.map((subMenuData, index) => {
          return (
            <DropdownLink to={subMenuData.path} key={index}>
              {<subMenuData.icon />}
              <SidebarLabel>{subMenuData.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
