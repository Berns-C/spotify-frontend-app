import React from 'react';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const GridBlock = styled('div')({
    width: 250,
    height: 216,
    fontSize: 20,
    textAlign: 'center',
    margin: 40,
    '&:hover .inner': {
        fontWeight: 'bolder',
    },
});

const Img = styled('img')({
    minWidth: 251,
    maxWidth: 251,
    minHeight: 175,
    maxHeight: 175,
    cursor: 'pointer',
    'transform-origin': 'center center',
    'transition': 'transform 1s, filter .5s ease-out',
    '&:hover': {
        '-ms-transform': 'scale(1.1)', /* IE 9 */
        '-webkit-transform': 'scale(1.1)', /* Safari 3-8 */
        transform: 'scale(1.1)',
        zIndex: 1
    }
});

const DisplayWithImg = props => {
    return  <GridBlock key={props.prop_key}>
                <Img src={props.img_src} alt='no image' onClick={props.handleClick} />
                <div>
                    <span className='inner'>
                        {props.text}
                    </span>
                </div>
            </GridBlock>
};

DisplayWithImg.propTypes = {
    img_src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default DisplayWithImg;