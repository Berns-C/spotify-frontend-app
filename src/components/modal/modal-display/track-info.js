import React from 'react';
import PropTypes from 'prop-types';
import { styled, makeStyles } from '@material-ui/core/styles';
import Aux from '../../../hoc/_Aux/_Aux';

const useStyles = makeStyles({
    text_wrapper_no_animation: {
        position: 'absolute',
        width: 300,
        fontSize: '1.8em',
        marginTop: 8,
        color: '#fff',
        verticalAlign: 'middle',
    },
    text_wrapper: {
        position: 'absolute',
        width: 300,
        whiteSpace: 'nowrap',
        fontSize: '1.8em',
        marginTop: 8,
        color: '#fff',
        verticalAlign: 'middle',
        'transition': 'all 0.8s ease-in-out',
        '-webkit-transition': 'all 0.8s ease-in-out',
        '-moz-transition': 'all 0.8s ease-in-out',
        '-o-transition': 'all 0.8s ease-in-out',
        '-ms-transition': 'all 0.8s ease-in-out',
        'animation': '$anim 8.5s infinite',
        'animation-direction': 'alternate-reverse',
        '-webkit-animation-timing-function': 'linear', /* Chrome, Safari, Opera */
        'animation-timing-function': 'linear',
    },
    '@-webkit-keyframes anim': {
        'from': { left: '-100%' },
        'to': { left: '100%' }
    },
    '@keyframes anim': {
        'from': { left: '-100%' },
        'to': { left: '100%' }
    }
});

const DivImg = styled('div')({
    display: 'inline-block',
    verticalAlign: 'top',
    minWidth: 190,
    maxWidth: 190,
    height: '100%',
});

const Img = styled('img')({
    minWidth: 150,
    maxWidth: 150,
    minHeight: 150,
    maxHeight: 150,
    margin: 18,
});

const Div = styled('div')({
    display: 'inline-block',
    verticalAlign: 'top',
    minWidth: 300,
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
});

const ArtistHeader = styled('h4')({
    marginTop: 42,
});

const SpanLabel = styled('span')({
    display: 'inline-block',
    fontWeight: 600,
    marginRight: 5,
});

const Audio = styled('audio')({
    position: 'absolute',
    bottom: 17,
});

const NoPreview = styled('h3')({
    position: 'absolute',
    bottom: 50,
});

const TrackInfo = props => {
    const classes = useStyles();
    const { track } = props.trackData;
    const trackImage  = track.album.images[0] !== undefined ? track.album.images[0].url : null;
    const trackPreview =track.preview_url;
    const trackName = track.name;
    const trackArtist = track.artists[0] !== undefined ? track.artists[0].name : null;
    const albumType = track.album.album_type;
    const albumName = track.album.name;
    const titleStyle = trackName.length >= 26 ? classes.text_wrapper : classes.text_wrapper_no_animation;

    return  <Aux>
                <DivImg>
                    <Img src={trackImage} />
                </DivImg>
                <Div>
                    <div className={titleStyle}> {trackName} </div>
                    <ArtistHeader> {trackArtist} </ArtistHeader>
                    <div>
                        {
                            albumType === 'single'
                            ?   <Aux>
                                    <SpanLabel> Album Type: </SpanLabel>
                                    <span> {albumType.toUpperCase()} </span>
                                </Aux>
                            :   <Aux>
                                    <SpanLabel> Album Name: </SpanLabel>
                                    <span> {albumName} </span>
                                </Aux>
                        }
                    </div>
                    {
                        trackPreview !== null
                        ?   <Audio controls="controls" autoPlay id="audioPreview" name="media" key={trackName}>
                                <source src={trackPreview} type="audio/mpeg" />
                            </Audio>
                        :   <NoPreview> Preview Not Available </NoPreview>
                    }
                </Div>
            </Aux>
};

TrackInfo.prototype = {
    trackData: PropTypes.object.isRequired,
};

export default TrackInfo;