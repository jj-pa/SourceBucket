import React, { FC } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const DashboardSidebarData = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: AiIcons.AiFillHome,
  },
  {
    title: 'Overview',
    path: '/overview',
    icon: AiIcons.AiFillHome,
    iconClosed: RiIcons.RiArrowDownSFill,
    iconOpend: RiIcons.RiArrowUpSFill,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: IoIcons.IoIosPaper,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: IoIcons.IoIosPaper,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: IoIcons.IoIosPaper,
  },
  {
    title: 'Products',
    path: '/products',
    icon: FaIcons.FaCartPlus,
  },
  {
    title: 'Team',
    path: '/team',
    icon: IoIcons.IoMdPeople,
  },
  {
    title: 'Message',
    path: '/message',
    icon: FaIcons.FaEnvelopeOpenText,
  },
  {
    title: 'Support',
    path: '/support',
    icon: IoIcons.IoMdHelpCircle,
  },
];
