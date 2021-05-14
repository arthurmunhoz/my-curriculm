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
        margin-top: 2px;
        color: #a5a5a5;
        margin-bottom: auto;
    }

    #description {
        font-size: 1rem; 
        margin-left: 12px;
        opacity: 0.8;
    }

    #responsabilities-frame {
        display: flex; 
        align-items: center; 
        margin-top: 8px;
    }
    

    @media screen and (max-width: 680px) {

        .header, #responsabilities-frame {
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
        </StyledExperienceItem>
    );
}

export default ExperienceItem;