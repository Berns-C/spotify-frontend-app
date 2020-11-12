import React from 'react';
import { styled } from '@material-ui/core/styles';

const FooterDiv = styled('div')({
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#000',
    width: '100%',
    height: 25,
})

const Footer = () => <FooterDiv />;

export default Footer;