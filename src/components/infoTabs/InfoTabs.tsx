import { AppBar, Box, Tab, Tabs, Tooltip, Typography, useTheme } from '@material-ui/core';
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
import DootaxLogo from '../../res/images/dootax-logo.png';
import DisneyLogo from '../../res/images/walt-disney-logo.png';
import RockPaperScissors1 from '../../res/images/rps1.jpeg';
import RockPaperScissors2 from '../../res/images/rps2.jpeg';
import MoviesList from '../../res/images/moviesList.jpeg';
import MoviesDetailsTop from '../../res/images/moviesDetailsTop.jpeg';
import MoviesDetailsBottom from '../../res/images/moviesDetailsBottom.jpeg';
import CountriesList from '../../res/images/countriesList.jpeg';
import CountryDetails from '../../res/images/countryDetails.jpeg';
import ExperienceItem from '../experienceItem/ExperienceItem';
import ProjectItem from '../ProjectItem';

const StyledTabs = styled.div`
    height: calc(100% - 220px);
    width: calc(100% - 55px);
    display: flex;

    margin: 0px 1rem 1rem 1rem;
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
        height: calc(100vh - 268px);
    }

    #tech-stack-frame a {
        margin-left: 8px;
    }

    #projects-frame {
        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 680px) {
        height: calc(100% - 185px);

        #full-width-tabpanel-0 ,
        #full-width-tabpanel-1 ,
        #full-width-tabpanel-2 {
            height: calc(100vh - 235px);
        }

        #projects-frame {
            flex-direction: column;
        }
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

    const logos = [ DootaxLogo, KaffaLogo, SamsungLogo, HSTLogo, HSTLogo, DisneyLogo ];

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
                            <Typography style={{ marginBottom: '24px' }}>{curriculum.about['text-professional']}</Typography>
                            <Typography style={{ marginBottom: '24px' }}>{curriculum.about['text-fav-tech']}</Typography>
                        </div>

                        {/* SEPARATOR LINE */}
                        <div style={{ height: '1px', width: '100%', backgroundColor: '#d8d8d8', marginBottom: '24px' }} />
                        <Typography style={{ marginBottom: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>MY FAVORITE TECH STACK:</Typography>

                        <p id="tech-stack-frame">
                            <Tooltip title="Typescript"><a href="https://www.typescriptlang.org/" ><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" /></a></Tooltip>
                            <Tooltip title="Javascript"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" ><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /></a></Tooltip>
                            <Tooltip title="ReactJs"><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40px" height="40px" /></a></Tooltip>
                            <Tooltip title="Redux"><a href="https://redux.js.org"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="HTML5"><a href="https://www.w3.org/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="CSS3"><a href="https://www.w3schools.com/css/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Bootstrap"><a href="https://getbootstrap.com"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Sass"><a href="https://getbootstrap.com"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Android"><a href="https://www.android.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg" alt="android" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="GraphQL"><a href="https://graphql.org"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" alt="graphql" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Linux"><a href="https://ubuntu.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Kotlin"><a href="https://kotlinlang.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg" alt="kotlin" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Git"><a href="https://git-scm.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Figma"><a href="https:www.figma.com//"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" alt="figma" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Sketch"><a href="https://www.sketch.com"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sketch/sketch-original.svg" alt="sketch" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="NodeJS"><a href="https://nodejs.org"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Npm"><a href="https://www.npmjs.com"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40px" height="40px" /> </a></Tooltip>
                            <Tooltip title="Yarn"><a href="https://yarnpkg.com"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg" alt="yarn" width="40px" height="40px" /> </a></Tooltip>
                        </p>
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

                            <Typography style={{ marginBottom: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>SOME OF MY GITHUB PROJECTS:</Typography>
                            <section id="projects-frame">
                                <ProjectItem
                                    name={curriculum.githubProjects[0].name}
                                    link={curriculum.githubProjects[0].link}
                                    imgs={[RockPaperScissors1, RockPaperScissors2]}
                                />
                                <ProjectItem
                                    name={curriculum.githubProjects[1].name}
                                    link={curriculum.githubProjects[1].link}
                                    imgs={[CountriesList, CountryDetails]}
                                />
                                <ProjectItem
                                    name={curriculum.githubProjects[2].name}
                                    link={curriculum.githubProjects[2].link}
                                    imgs={[MoviesList, MoviesDetailsTop, MoviesDetailsBottom]}
                                />
                            </section>
                            {/* <a href={curriculum.github} style={{ marginBottom: '16px' }}>{curriculum.github}</a> */}

                            {/* SEPARATOR LINE */}
                            {/* <div style={{ height: '1px', width: '100%', backgroundColor: '#d8d8d8', marginBottom: '16px' }} /> */}

                            {/* <Typography style={{ marginBottom: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>COURSES:</Typography> */}
                            {/* {
                                curriculum.courses.map(course => {
                                    return <section style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex' }}>
                                            <SchoolIcon fontSize='default' />
                                            <div style={{ marginLeft: '6px', color: '#000' }}>{course.company}</div>
                                        </div>
                                        <div style={{ fontSize: '0.8rem', marginLeft: '32px', marginTop: '2px', color: '#3f3f3f' }}>{course.name}</div>
                                    </section>
                                })
                            } */}

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
                        {
                            curriculum.experiences.map((experience, index) => <>
                                <ExperienceItem img={logos[index]} exp={experience} />
                                <div style={{ height: '1px', width: '100%', backgroundColor: '#d8d8d8', marginBottom: '24px' }} />
                            </>)
                        }
                    </TabPanel>
                </SwipeableViews>
            </div>
        </StyledTabs >
    );
}

export default InfoTabs;