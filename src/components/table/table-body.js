import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';

const TableRow = styled('tr')({
    textAlign: 'center',
    padding: 8,
    borderRight: '1px solid #f8f8f8',
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0.05)',
    'transform-origin': 'center center',
    'transition': 'transform 1s, filter .5s ease-out',
    '&:hover': {
        '-ms-transform': 'scale(1.03)', /* IE 9 */
        '-webkit-transform': 'scale(1.03)', /* Safari 3-8 */
        transform: 'scale(1.03)',
        zIndex: 1,
        fontSize: 28,
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,255,255, 0.2)',
    },
});

const TableDataCell = styled('td')({
    textAlign: 'center',
    padding: 8,
    borderRight: '1px solid #f8f8f8',
    fontSize: 14,
});

const onClickStyle = {
    border: '3px solid black',
    fontWeight: 600,
    backgroundColor: '#008B8B',
    color: '#fff'
};

const TableBody = props => {
    const style = props.trackIndex === props.selectedRow ? onClickStyle : null;

    return  <TableRow
                onMouseEnter={() => { props.hoverInCallback(props.trackIndex) }}
                onMouseLeave={() => { props.hoverOutCallback() }}
                onClick={() => { props.handleOnClick(props.trackIndex) }}
            >
                {
                    props.bodyRow.map(
                        (row, index) => <TableDataCell style={style} key={`table-data-cell-${index}`}>
                                            {row}
                                        </TableDataCell>
                    )
                }
            </TableRow>
};

TableBody.prototype = {
    trackIndex: PropTypes.number.isRequired,
    selectedRow: PropTypes.number.isRequired,
    bodyRow: PropTypes.array.isRequired,
    hoverInCallback: PropTypes.func.isRequired,
    handleOnClick: PropTypes.func.isRequired,
};

export default TableBody;