import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';

const TableRow = styled('tr')({
    textAlign: 'center',
    padding: 8,
    borderRight: '1px solid #f8f8f8',
    fontSize: 16,
});

const TableHeader= styled('th')({
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: 8,
    color: '#ffffff',
    background: '#000',
});

const TableHeaders = props => {

    return  <thead>
                <TableRow>
                {
                    props.headerRow.map((header, index) => {
                        return  <TableHeader key={`table-header-${index}`}>
                                    {header}
                                </TableHeader>
                    })
                }
                </TableRow>
            </thead>
};

TableHeader.prototype = {
    headerRow: PropTypes.array.isRequired
};

export default TableHeaders;