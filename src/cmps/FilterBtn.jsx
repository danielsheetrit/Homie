import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Popper, Fade } from '@material-ui/core';

export function FilterBtn({ openDropdown }) {
    let buttonEl = React.useRef(null);
    const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState
    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popper' : undefined;
    return (
        <>
            <button onClick={openDropdown} buttonref={buttonEl}>gg</button>
            <Popper
            // id={id} open={open} anchorEl={anchorEl}
            >
                <div className={classes.paper} anchorEl={buttonEl}>Content
            {/* {this.state.price && <form>rrgrggrgrg</form>}
            {this.state.type && <form>rrgrggrgrg</form>}
            {this.state.amenities && <form>rrgrggrgrg</form>}
            {this.state.rules && <form>rrgrggrgrg</form>} */}
                </div>
            </Popper>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        border: '1px solid',
        padding: theme.spacing(5),
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        marginTop: '8px'
    },
}));