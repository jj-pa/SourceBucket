import styled from 'styled-components';

type Props = {};

export const CountryContainer = styled.div<Props>`
  width: 80%;
  height: 200px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountryDescription = styled.div<Props>`
  width: 45%;
`;
