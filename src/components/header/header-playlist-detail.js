import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/_Aux/_Aux';
import { styled } from '@material-ui/core/styles';

const DivImg = styled('div')({
    display: 'inline-block',
    verticalAlign: 'top',
    minWidth: 190,
    maxWidth: 190,
    height: '100%',
});

const Div = styled('div')({
    display: 'inline-block',
    verticalAlign: 'top',
    minWidth: 300,
    padding: 30,
    wordBreak: 'break-word'
});

const Img = styled('img')({
    minWidth: 150,
    maxWidth: 150,
    minHeight: 150,
    maxHeight: 150,
    margin: 18,
});

const SpanLabel = styled('span')({
    display: 'block',
    fontWeight: 600,
    marginRight: 5,
});

const Span = styled('span')({
    fontWeight: 400,
});

const Button = styled('button')({
    display: 'inline-block',
    position: 'absolute',
    right: 30,
    top: 75,
    width: 140,
    height: 37,
    fontFamily: 'inherit',
    fontWeight: 400,
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0, 0.0)',
    border: '1px hidden #000',
    textDecoration: 'underline',
    'transform-origin': '15% 25%',
    'transition': 'transform 1s, filter .5s ease-out',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgba(0,255,255, 0.2)',
        textDecoration: 'none',
        border: '2px solid #000',
        fontWeight: 'bold',
        '-ms-transform': 'scale(1.1)', /* IE 9 */
        '-webkit-transform': 'scale(1.1)', /* Safari 3-8 */
        transform: 'scale(1.1)',
    }
});

const HeaderPlaylist = props => {
    return (
        <Aux>
            <Button onClick={() => { props.handleOnClick() }}>
                {props.buttonName}
            </Button>
            <DivImg>
                <Img src={props.imgSrc} />
            </DivImg>
            <Div>
                <h2> {props.name} </h2>
                <Aux>
                    <SpanLabel> Followers: <Span> {props.totalFollowers} </Span> </SpanLabel>
                </Aux>
                <Aux>
                    <SpanLabel> Total Tracks: <Span> {props.totalTracks} </Span> </SpanLabel>
                </Aux>
            </Div>
        </Aux>
    );
};

HeaderPlaylist.prototype = {
    buttonName: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    name: PropTypes.string,
    totalFollowers:PropTypes.string,
    totalTracks: PropTypes.string,
    imgSrc: PropTypes.string
};

export default HeaderPlaylist;