import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 250,
        padding: '10px'
    },
});

export function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 250]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={handleChange}
            // valueLabelDisplay="off"

            />
        </div>
    );
}