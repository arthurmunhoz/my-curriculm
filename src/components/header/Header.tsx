import styled from "styled-components";
import ProfilePicture from '../../res/images/profile-pic-2.jpeg';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import moment from 'moment';
import curriculum from '../../data_en.json';

const StyledHeader = styled.div`
  height: 178px;
  width: 100%;
  
  display: flex;
  margin: 1.3rem 1.3rem 0 1.3rem;

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-right: 24px;
    object-fit: contain;
    padding: 4px;
    background-color: white;
  }

  h2 {
    margin: 0px 0px 10px 0px;
  }

  #info-section-frame {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
  }

  #info-section {
    display: flex; 
    margin-top: 12px;
    margin-right: 36px;
    align-items: center;
  }

  #info-section > span {
    margin-left: 12px;
    font-size: 0.8rem;

    cursor: pointer;
  }

  #separator {
    height: 1px;
    background-color: white;
    margin-top: 12px;
  }

  #linkedin {
    margin-top: 2px;
    font-size: 2.55rem !important;

    :hover {
      background-color: rgba(255, 255, 255, 0.596);
      border-radius: 4px;
      color: #2a2ada;
    }
  }

  #github {
    font-size: 2.08rem !important;
    padding: 5px;
    :hover {
      background-color: rgba(255, 255, 255, 0.596);
      border-radius: 50%;
      color: #202020;
    }
  }

`;

const StyledButton = styled.div`
  height: fit-content;
  width: fit-content;
  margin-right: 16px;
  cursor: pointer;
`;

const Header = () => {

    return (
        <StyledHeader>
            <img src={ProfilePicture} alt='Profile' />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>{"Arthur Regatieri Munhoz"}</h2>
                <span>Frontend Developer, {moment(curriculum.birthday, 'YYYYMMDD').fromNow().replace('ago', 'old')}</span>

                <span id="separator" />

                <section id="info-section-frame">
                    <section id="info-section">
                        <PhoneIcon color="inherit" />
                        <span onClick={() => {
                            navigator.clipboard.writeText(curriculum.phone);
                        }}>
                            {curriculum.phone}
                        </span>
                    </section>
                    <section id="info-section">
                        <EmailIcon color="inherit" />
                        <span onClick={() => {
                            navigator.clipboard.writeText(curriculum.email);
                        }}>{curriculum.email}</span>
                    </section>
                </section>

                <section id="info-section-frame">
                    <StyledButton onClick={() => window.open(curriculum.linkedin)}>
                        <LinkedInIcon id="linkedin" fontSize="large" color="inherit" />
                    </StyledButton>

                    <StyledButton onClick={() => window.open(curriculum.github)}>
                        <GitHubIcon id="github" fontSize="large" color="inherit" />
                    </StyledButton>
                </section>
            </div>
        </StyledHeader>)
}

export default Header;