import React, { FC } from 'react';
import { MainViewContainer } from './DashboardMainView.styles';
import Routes from './Routes';

type Props = {};

const DashboardMainView: FC<Props> = (props: Props) => {
  return (
    <MainViewContainer>
      <Routes />
    </MainViewContainer>
  );
};

export default DashboardMainView;
