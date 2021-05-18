import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface ProjectItemProps {
    link: string, 
    name: string, 
    imgs: string[]
}

const StyledProjectItem = styled.section`

    margin-right: 16px;

    .project-item-frame {
        width: fit-content;

        display: 'flex';
        align-items: center;

        margin-bottom: 24px;
        padding: 12px;

        border: solid;
        border-width: 1px;
        border-color: rgba(128, 128, 128, 0.63);
        border-radius: 6px;

        img {
            height: 12rem;
            margin-top: 12px;
            margin-left: 6px;
            margin-right: 6px;
        }

        a {
            font-size: 0.7rem;
            color: blue;
        }

        :hover {
            background-color: rgba(128, 128, 128, 0.178);
            cursor: pointer;
        }
    }

    @media screen and (max-width: 680px) {
        #projects-frame {
            flex-direction: column;
        }
    }
`;

const ProjectItem = (props: ProjectItemProps) => {

    return <StyledProjectItem>
        <div className="project-item-frame" onClick={() => window.open(props.link)}>
            <div>
                <Typography>{props.name}</Typography>
                {/* <a href={curriculum.githubProjects[0].link}> {curriculum.githubProjects[0].link}</a> */}
            </div>
            <div style={{ display: 'flex' }}>
                {
                    props.imgs.map(img => <img src={img} alt={props.name} />)
                }
            </div>
        </div>
    </StyledProjectItem>;
}

export default ProjectItem;