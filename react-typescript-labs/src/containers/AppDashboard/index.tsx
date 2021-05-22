import React, { FC } from 'react';
import './AppDashboard.scss';
import { App, Header } from './AppDashboard.styles';

import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardMainView from '../../components/DashboardMainView/DashboardMainView';

import iconHome from '../../assets/images/icon-home.svg';
import iconAbout from '../../assets/images/icon-about.svg';
import iconBlog from '../../assets/images/icon-blog.svg';
import iconDestinations from '../../assets/images/icon-destinations.svg';
import iconServices from '../../assets/images/icon-services.svg';
import iconContacts from '../../assets/images/icon-contacts.svg';

type Props = {};

const AppDashboard: FC<Props> = (props: Props) => {
  const sidebarHeader = {
    fullName: 'parkjeongjin',
    shortName: 'jj-pa',
  };
  const menuItems = [
    { name: 'Home', icon: iconHome, to: '/dashboard', subMenuItems: [] },
    {
      name: 'About',
      icon: iconAbout,
      to: '/dashboard/about',
      subMenuItems: [],
    },
    {
      name: 'Destinations',
      icon: iconDestinations,
      to: '/dashboard/destinations',
      subMenuItems: [
        { name: 'Canada', to: '/dashboard/canada' },
        { name: 'Brazil', to: '/dashboard/brazil' },
        { name: 'India', to: '/dashboard/india' },
        { name: 'Australia', to: '/dashboard/australia' },
        { name: 'Kenya', to: '/dashboard/kenya' },
        { name: 'Moldova', to: '/dashboard/moldova' },
      ],
    },
    { name: 'Blog', icon: iconBlog, to: '/dashboard/blog', subMenuItems: [] },
    {
      name: 'Services',
      icon: iconServices,
      to: '/dashboard/services',
      subMenuItems: [],
    },
    {
      name: 'Contacts',
      icon: iconContacts,
      to: '/dashboard/contacts',
      subMenuItems: [],
    },
  ];

  return (
    <App>
      <DashboardSidebar sidebarHeader={sidebarHeader} menuItems={menuItems} />
      <DashboardMainView />
    </App>
  );
};

export default AppDashboard;
