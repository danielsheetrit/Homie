import { Popper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}));


export function DropdownFilter({ msg = 'Enter a Message' }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div className="dropdown-filter">
            {/* <p>{msg}</p> */}
            <div>
                <button aria-describedby={id} type="button" onClick={handleClick}>
                    Toggle Popper
                </button>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <div className={classes.paper}>The content of the Popperrr.</div>
                </Popper>
            </div>
        </div>
    )
}


