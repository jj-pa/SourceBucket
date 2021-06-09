import React, { FC } from 'react';
import './AppDashboard.scss';
import { App } from './AppDashboard.styles';

import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardMainView from '../../components/DashboardMainView/DashboardMainView';

import iconHome from '../../assets/images/icon-home.svg';
import iconAbout from '../../assets/images/icon-about.svg';
import iconBlog from '../../assets/images/icon-blog.svg';
import iconDestinations from '../../assets/images/icon-destinations.svg';
import iconServices from '../../assets/images/icon-services.svg';
import iconContacts from '../../assets/images/icon-contacts.svg';
import { BrowserRouter as Router } from 'react-router-dom';

type Props = {
  match: {
    params: {
      menu?: string;
    };
  };
};

const AppDashboard: FC<Props> = (props: Props) => {
  const urlMenuName = props.match.params.menu;

  const sidebarHeader = {
    fullName: 'SourceBucket',
    shortName: 'Bucket',
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
      name: 'Back-end',
      icon: iconDestinations,
      to: '/dashboard/destinations',
      subMenuItems: [
        { name: 'Canada', to: '/canada' },
        { name: 'Brazil', to: '/brazil' },
        { name: 'India', to: '/india' },
        { name: 'Australia', to: '/australia' },
        { name: 'Kenya', to: '/kenya' },
        { name: 'Moldova', to: '/moldova' },
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
      <Router>
        <DashboardSidebar
          sidebarHeader={sidebarHeader}
          menuItems={menuItems}
          initialMenuName={urlMenuName}
        />
        <DashboardMainView />
      </Router>
    </App>
  );
};

export default AppDashboard;
