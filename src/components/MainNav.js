import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import zIndex from '@material-ui/core/styles/zIndex';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#1c1e24",
        zIndex: 100,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory()

    useEffect(() => {
        if (value === 0)
            history.push("/");
        else if (value === 1)
            history.push("/search");
    }, [value, history]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Search" icon={<HomeIcon />} />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}
