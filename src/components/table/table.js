import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    tableStyle: {
        borderRadius: 5,
        fontSize: 18,
        fontWeight: 'normal',
        border: 'none',
        borderCollapse: 'collapse',
        width: '100%',
        minWidth: 500,
        maxWidth: '100%',
        tableLayout: 'fixed',
        backgroundColor: 'white',
    },

    '@global': {
        'td:first-child': {
            maxWidth: 300,
        },
    },
});

const TableComponent = props => {
    const classes = useStyles();

    return  <table className={classes.tableStyle}>
                {props.children}
            </table>
};

export default TableComponent;