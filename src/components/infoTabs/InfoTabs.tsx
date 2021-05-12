import { AppBar, Box, Tab, Tabs, Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components';
import curriculum from '../../data_en.json';
import SchoolIcon from '@material-ui/icons/School';
import BrazilFlag from '../../res/images/brazil.svg';
import USAFlag from '../../res/images/united-states.svg';
import SpainFlag from '../../res/images/spain.svg';
import KaffaLogo from '../../res/images/kaffa-mobile.svg';
import SamsungLogo from '../../res/images/samsung-logo.png';
import HSTLogo from '../../res/images/hst-logo.png';
import ExperienceItem from '../experienceItem/ExperienceItem';

const StyledTabs = styled.div`
    height: calc(100% - 245px);

    display: flex;

    margin: 0px 1.3rem 1.3rem 1.3rem;
    padding: 12px;

    background-color: rgba(255, 250, 240, 0.11);
    border-radius: 6px;

    #tabs-background {
        min-height: 100%;
        width: 100%;
        background-color: white;
        color: black;
    }

    #full-width-tabpanel-0 ,
    #full-width-tabpanel-1 ,
    #full-width-tabpanel-2 {
        height: calc(100vh - 294px);
    }
`;

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const InfoTabs = () => {

    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <StyledTabs>
            <div id="tabs-background">
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="About me" {...a11yProps(0)} />
                        <Tab label="Education" {...a11yProps(1)} />
                        <Tab label="Experiences" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    {/* ABOUT ME */}
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography style={{ marginBottom: '12px' }}>{curriculum.about.title}</Typography>
                            <Typography style={{ marginBottom: '12px' }}>{curriculum.about['text-personal']}</Typography>
                            <Typography style={{ marginBottom: '12px' }}>{curriculum.about['text-professional']}</Typography>
                        </div>
                    </TabPanel>

                    {/* EDUCATION */}
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* EDUCATIONS */}
                            {
                                curriculum.educations.map(ed => {
                                    return <section style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex' }}>
                                            <SchoolIcon fontSize='default' />
                                            <div style={{ marginLeft: '6px' }}>{ed.level}</div>
                                        </div>
                                        <div style={{ fontSize: '0.8rem', marginLeft: '32px', marginTop: '2px', color: '#3f3f3f' }}>{ed.institution} - {ed.location}</div>
                                    </section>
                                })
                            }

                            {/* SEPARATOR LINE */}
                            <div style={{ height: '1px', width: '100%', backgroundColor: '#d8d8d8', marginBottom: '16px' }} />

                            <Typography style={{ marginBottom: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>COURSES:</Typography>
                            {
                                curriculum.courses.map(course => {
                                    return <section style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex' }}>
                                            <SchoolIcon fontSize='default' />
                                            <div style={{ marginLeft: '6px', color: '#000' }}>{course.company}</div>
                                        </div>
                                        <div style={{ fontSize: '0.8rem', marginLeft: '32px', marginTop: '2px', color: '#3f3f3f' }}>{course.name}</div>
                                    </section>
                                })
                            }


                            {/* SEPARATOR LINE */}
                            <div style={{ height: '1px', width: '100%', backgroundColor: '#d8d8d8', marginBottom: '16px' }} />

                            {/* LANGUAGES */}
                            <Typography style={{ marginBottom: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>LANGUAGES:</Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{ height: '30px', marginRight: '6px' }} src={BrazilFlag} alt="brazil-flag" />
                                {curriculum.languages[0].name} {`(${curriculum.languages[0].proficiency})`}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{ height: '30px', marginRight: '6px' }} src={USAFlag} alt="brazil-flag" />
                                {curriculum.languages[1].name} {`(${curriculum.languages[1].proficiency})`}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{ height: '30px', marginRight: '6px' }} src={SpainFlag} alt="brazil-flag" />
                                {curriculum.languages[2].name} {`(${curriculum.languages[2].proficiency})`}
                            </div>

                        </div>
                    </TabPanel>

                    {/* EXPERIENCES */}
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <ExperienceItem img={KaffaLogo} exp={curriculum.experiences[0]} />
                        <ExperienceItem img={SamsungLogo} exp={curriculum.experiences[1]} />
                        <ExperienceItem img={HSTLogo} exp={curriculum.experiences[2]} />
                        <ExperienceItem img={HSTLogo} exp={curriculum.experiences[3]} />
                    </TabPanel>
                </SwipeableViews>
            </div>
        </StyledTabs >
    );
}

export default InfoTabs;