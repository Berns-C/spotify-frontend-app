import React from 'react';
import PropTypes from 'prop-types';
import spotifyImg from '../../assets/images/spotify.png';
import { styled } from '@material-ui/core/styles';

const HeaderField = styled('header')({
    borderBottom: '1px solid black',
    paddingLeft: 30,
    paddingRight: 30,
    boxShadow: '1px 2px rgba(0,0,0, 0.4)',
});

const Div = styled('div')({
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'middle',
});

const User = styled('span')({
    position: 'absolute',
    right: 140,
    top: 20,
    fontSize: 18,
    display: 'inline-block',
});

const Button = styled('button')({
    display: 'inline-block',
    position: 'absolute',
    right: 30,
    top: 15,
    width: 100,
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
        fontSize: 16,
        backgroundColor: 'rgba(0,255,255, 0.2)',
        textDecoration: 'none',
        border: '2px solid #000',
        fontWeight: 'bold',
        '-ms-transform': 'scale(1.1)', /* IE 9 */
        '-webkit-transform': 'scale(1.1)', /* Safari 3-8 */
        transform: 'scale(1.1)',
    }
});

const Image = styled('img')({
    width: 40,
    height: 40,
    paddingLeft: 2,
    margin: 10,
});

const Header = props => {
    const welcomeString = 'Welcome, ';
    return (
        <HeaderField>
            <Div>
                <Image src={spotifyImg} />
            </Div>
            <Div>
                {
                    props.user !== undefined
                    ?   <User>
                            {welcomeString}
                            <strong> {props.user} </strong>
                        </User>
                    : null
                }
                <Button onClick={() => { props.handleOnClick() }}>
                    {props.buttonName}
                </Button>
            </Div>
        </HeaderField>
    );
};

Header.prototype = {
    user: PropTypes.string,
    buttonName: PropTypes.string,
    handleOnClick: PropTypes.func.isRequired,
};

export default Header;