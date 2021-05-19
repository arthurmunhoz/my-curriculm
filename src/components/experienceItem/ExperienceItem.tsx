import { Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";
import styled from "styled-components";

const StyledExperienceItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    .header {
        display: flex;
        align-items: top; 
        flex-direction: row-reverse;
    }

    #company-position-frame {
        width: 100%;
        display: flex; 
        flex-direction: column;
    }

    #company-dates-frame {
        display: flex;
        align-items: center;
    }

    #period-text {
        font-size: 0.8rem;
        margin-left: 12px;
        color: #aaaaaa;
    }

    #company-name {
        margin-bottom: auto;
    }

    #position {
        display: flex; 
        align-items: center;
        margin-top: 12px;
    }

    #label {
        font-size: 0.85rem;
        /* font-weight: bold; */
        margin-top: 2px;
        color: #aaaaaa;
        margin-bottom: auto;
        white-space: nowrap;
    }

    #description {
        font-size: 1rem; 
        margin-left: 12px;
        opacity: 0.8;
    }

    #responsabilities-frame, #tech-frame {
        display: flex; 
        align-items: center; 
        margin-top: 8px;
    }

    #tech-frame {
        margin-top: 12px;
    }

    #chips-frame {
        width: fit-content;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
    }

    .chip {
        height: fit-content;
        width: fit-content;
        margin-left: 10px;
        margin-bottom: 10px;
        padding: 3px 10px;

        border: solid;
        border-radius: 18px;
        border-color: rgb(201, 201, 201);
        border-width: 1px;
    }

    .chip-text {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 680px) {

        .chip {
            margin-left: 0;
            margin-bottom: 0;
            margin-right: 6px;
            margin-top: 8px;
            text-align: center;
        }

        .header, #responsabilities-frame, #tech-frame {
            flex-direction: column;
            align-items: flex-start;
        }

        #company-dates-frame {
            flex-direction: column;
            align-items: flex-start;
        }

        #company-name {
            font-weight: bold;
        }

        #period-text {
            margin-left: 0;
        }

        #position {
            flex-direction: column;
            align-items: flex-start;
        }

        #label {
            margin-top: 8px;
        }

        #description {
            margin-left: 0px;
        }
    }
`;

const ExperienceItem = (props: { img: string, exp: any }) => {

    return (
        <StyledExperienceItem>

            {/* HEADER */}
            <div className="header">
                <img src={props.img}
                    style={{
                        height: '35px',
                        width: '125px',
                        marginBottom: '12px',
                        marginLeft: '-10px',
                        cursor: 'pointer'
                    }}
                    alt="logo" 
                    onClick={() => window.open(props.exp.companysWebsite as string)}
                    />

                <div id="company-position-frame">
                    <div id="company-dates-frame">
                        <Typography id="company-name">{(props.exp.company as string).toUpperCase()}</Typography>
                        <Typography id="period-text">
                            {`(${moment(props.exp.startDate, "YYYYMMDD").calendar()} - ${props.exp.endDate ? moment(props.exp.endDate, "YYYYMMDD").calendar().concat(')') : "Current)"}`}
                        </Typography>
                    </div>

                    <div id="position">
                        <Typography id="label">Position:</Typography>
                        <Typography id="description">{props.exp.position}</Typography>
                    </div>
                </div>
            </div>

            {/* RESPONSABILITIES */}
            <div id="responsabilities-frame">
                <Typography id="label">Responsabilities:</Typography>
                <Typography id="description">
                    {props.exp.responsabilities}
                </Typography>
            </div>

            {/* TECH STACK */}
            <div id="tech-frame">
                <Typography id="label">Tech stack:</Typography>
                <div id="chips-frame">
                    {
                        props.exp.tags.map((item: string) => {
                            return <div className="chip">
                                <Typography className="chip-text">{item}</Typography>
                            </div>
                        })
                    }
                </div>
            </div>


        </StyledExperienceItem>
    );
}

export default ExperienceItem;