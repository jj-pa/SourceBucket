import React, { FC } from 'react';
import SignIn from '../../components/Signin';
import ScrollToTop from '../../components/ScrollToTop';

type Props = {};

const SigninPage: FC<Props> = (props: Props) => {
  return (
    <>
      <ScrollToTop />
      <SignIn />
    </>
  );
};

export default SigninPage;
