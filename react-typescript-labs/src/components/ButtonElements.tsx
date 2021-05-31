import styled from 'styled-components';
import { Link } from 'react-scroll';

type ScrollButtonProps = {
  big?: boolean;
  fontBig?: boolean;
  exact: string;
  primary: any;
  dark?: boolean;
};

export const ScrollButton = styled(Link)<ScrollButtonProps>`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#F9A826' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#F9A826')};
  }
`;

type HtmlButtonProps = {
  big?: boolean;
  fontBig?: boolean;
  primary: any;
  dark?: boolean;
  href: string;
};

export const HtmlButton = styled.a<HtmlButtonProps>`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#F9A826' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#F9A826')};
  }
`;
