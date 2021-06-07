import { Component } from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     backdrop: {
//         zIndex: theme.zIndex.drawer + 1,
//         color: '#fff',
//     },
// }));

export class Loader extends Component {

    render() {

        // const classes = useStyles();
        const open = true
        // className={classes.backdrop}
        return (
            <div>
                <Backdrop open={open}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        );
    }
}