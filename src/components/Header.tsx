import * as React from 'react';
import styled from 'styled-components';

export default class Header extends React.PureComponent {
    render() {
        return (
            <HeaderBar>
                <HeaderLink>Just Bookings</HeaderLink>
            </HeaderBar>
        )
    }
}

const HeaderBar = styled.header.attrs({
    className: 'text-center py-2'
})`
  background-color: #20232a;
`;

const HeaderLink = styled.a.attrs({
    href: '#'
})`
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    color: #61dafb;
    text-decoration: none;
  }
`;
