import { Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";

const ExperienceItem = (props: { img: string, exp: any }) => {

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '48px' }}>

            {/* HEADER */}
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
                <img src={props.img}
                    style={{
                        height: '35px',
                        width: '125px',
                        marginBottom: '12px',
                        marginLeft: '-10px'
                    }}
                    alt="logo" />

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography style={{ marginBottom: 'auto' }}>{(props.exp.company as string).toUpperCase()}</Typography>
                        <Typography style={{ fontSize: '0.8rem', color: '#696969', marginLeft: '12px' }}>
                            {`(${moment(props.exp.startDate, "YYYYMMDD").calendar()} - ${props.exp.endDate ? moment(props.exp.endDate, "YYYYMMDD").calendar().concat(')') : "Current)"}`}
                        </Typography>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography style={{ fontSize: '0.8rem', marginTop: '2px' }}>Position:</Typography>
                        <Typography style={{ fontSize: '0.8rem', color: '#696969', marginLeft: '12px' }}>
                            {props.exp.position}
                        </Typography>
                    </div>
                </div>
            </div>

            {/* RESPONSABILITIES */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
                <Typography style={{ fontSize: '0.8rem', marginTop: '2px', marginBottom: 'auto' }}>Responsabilities:</Typography>
                <Typography style={{ fontSize: '0.8rem', color: '#555555', marginLeft: '12px' }}>
                    {props.exp.responsabilities}
                </Typography>
            </div>
        </div>
    );
}

export default ExperienceItem;