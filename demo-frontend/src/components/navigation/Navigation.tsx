import React, {useEffect, useState} from 'react';
import {AppBar, Box, makeStyles, Tab, Tabs, Typography} from "@material-ui/core";

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const Navigation: React.FC = () => {
    // const [error, setError] = useState(null);
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [firstTab, setValueFirstTab] = React.useState(0);
    const [secondTab, setValueSecondTab] = React.useState(0);
    const [thirdTab, setValueThirdTab] = React.useState(0);

    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {

        let givenNumber = Number(newValue) + 1;

            // fetch(`http://localhost:8080/random/${givenNumber}`)
            fetch(`http://localhost:8080/random`)
            .then(res => res.json())
                .then(
                    (result) => {
                        setValue(newValue);

                        switch (givenNumber) {
                            case 1:
                                setValueFirstTab(result.content);
                                break;
                            case 2:
                                setValueSecondTab(result.content);
                                break;
                            case 3:
                                setValueThirdTab(result.content);
                                break;
                        }
                        console.log(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        console.log(error);
                        setValue(error);
                    }
                )
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={0} index={0}>
                {firstTab}
            </TabPanel>
            <TabPanel value={1} index={1}>
                {secondTab}
            </TabPanel>
            <TabPanel value={2} index={2}>
                {thirdTab}
            </TabPanel>
        </div>
    )


}

export default Navigation;
