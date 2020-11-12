import React from 'react';
import { styled } from '@material-ui/core/styles';

const GridContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'flex-start',
});

const DisplayWithImg = props => <GridContainer> {props.children} </GridContainer>;

export default DisplayWithImg;