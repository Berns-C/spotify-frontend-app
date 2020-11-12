import React from 'react';
import { styled } from '@material-ui/core/styles';

const Div = styled('div')({
    maxWidth: 'calc(100% - 30px)',
    maxWidth: '-moz-calc(100% - 30px)',
    maxWidth: '-webkit-calc(100% - 30px)',
    height: '100%',
    padding: 30,
    overflowX: 'hidden',
});

const Layout = props => <Div> {props.children} </Div>;

export default Layout;