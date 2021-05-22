import React, { FC } from 'react';

type Props = {};

const Home: FC<Props> = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <h1>hello</h1>
    </div>
  );
};

export { Home };
