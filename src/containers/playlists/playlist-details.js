import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearPlaylistDetail } from '../../redux/actions/spotify/spotify-actions';
import { millisToMinutesAndSeconds } from '../../util/utility';
import { title, artist, album, date_added, duration } from '../../constants/playlist-text';
import PlaylistsHeader from '../../components/header/header-playlist-detail';
import TableList from '../../components/table/table';
import TableHeader from '../../components/table/table-header';
import TableBodyRow from '../../components/table/table-body';
import HoverDisplay from '../../components/modal/modal-display/hover-display';
import TrackInfo from '../../components/modal/modal-display/track-info';

const PlaylistDetail = () => {
    const playlist = useSelector(state => state.spotify_playlist_details);
    const dispatch = useDispatch();
    const [hoverData, setHoverData] = useState(null); //Displays track data when hover. Doesn't show when selectedTrack is not null.
    const [showHoverDisplay, setShowHoverDisplay] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null); //Get the index of row from table body.
    const [selectedTrack, setSelectedTrack] = useState(null); //set the track data based from the selectedRow.

    const backButton = () => {
        setSelectedRow(null);
        setHoverData(null);
        setShowHoverDisplay(false);
        dispatch(clearPlaylistDetail())
    };

    const onMouseHover = trackIndex => {
        setHoverData(playlist.tracks.items[trackIndex]);
        setShowHoverDisplay(true);
    };

    const onMouseHoverOut = () => {
        if (selectedRow === null) {
            setHoverData(null);
            setShowHoverDisplay(false);
        }
    };

    const handleOnClick = trackIndex => {
        if (trackIndex === selectedRow) {
            setSelectedRow(null);
        } else {
            setSelectedRow(trackIndex);
            setSelectedTrack(playlist.tracks.items[trackIndex]);
        }
    };

    const trackInfo = () => selectedRow !== null ? selectedTrack : hoverData;

    return  (
        <div>
            <PlaylistsHeader
                buttonName={'Back to Playlists'}
                handleOnClick={backButton}
                name={playlist.name.toUpperCase()}
                totalFollowers={playlist.followers.total}
                totalTracks={playlist.tracks.total}
                imgSrc={playlist.images[0].url}
            />
            <TableList>
                <TableHeader
                    headerRow={[title.name, artist.name, album.name, date_added.icon, duration.icon]}
                />
                <tbody>
                    {
                        playlist.tracks.items.map((item, index) => {
                            return  <TableBodyRow
                                        key={`table-row-${index}`}
                                        bodyRow={[
                                            item.track.name,
                                            item.track.artists[0].name,
                                            item.track.album.name,
                                            item.added_at,
                                            millisToMinutesAndSeconds(item.track.duration_ms),
                                        ]}
                                        selectedRow={selectedRow}
                                        trackIndex={index}
                                        hoverInCallback={onMouseHover}
                                        hoverOutCallback={onMouseHoverOut}
                                        handleOnClick={handleOnClick}
                                    />
                        })
                    }
                </tbody>
            </TableList>
            <HoverDisplay showHoverDisplay={showHoverDisplay}>
                <TrackInfo
                    trackData={trackInfo()}
                />
            </HoverDisplay>
        </div>
    );
};

export default PlaylistDetail;