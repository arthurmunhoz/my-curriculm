import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import ProfilePicture from '../../res/images/profile-pic-2.jpeg';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import moment from 'moment';
import curriculum from '../../data_en.json';
import { toast } from "react-toastify";

const StyledHeader = styled.div`
  height: fit-content;
  min-width: 100%;
  
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

  .info-holder {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 50px;
  }

  .info-section-frame {
    display: flex;
    flex-direction: column;
  }

  .info-section-frame-top,
  .info-section-frame-bottom {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
  }

  .info-section {
    display: flex; 
    margin-top: 12px;
    margin-right: 30px;
    align-items: center;
  }

  .info-section > span {
    margin-left: 12px;
    font-size: 0.8rem;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  #separator {
    height: 1px;
    width: 90%;
    max-width: 380px;
    opacity: 0.3;
    background-color: white;
    margin-top: 16px;
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

  #phone, #email {
    svg {
      width: 33px;
      margin-left: 1px;
    }
  }

  @media screen and (max-width: 680px) {

    height: 122px;

    img {
      height: 90px;
      width: 90px;
    }

    h2 {
      font-size: 1rem;
    }

    span {
      font-size: 0.7rem;
    }

    #separator {
      margin-top: 12px;
    }

    .info-section-frame {
      display: flex;
      flex-direction: row;
    }

    .info-section svg {
      cursor: pointer;
    }

    .info-section span {
      display: none;
    }

    #linkedin {
      height: 27px;   
      width: 27px;
      margin-top: 14px;
      margin-left: 4px;
    } 
    
    #github {
      height: 22px;   
      width: 22px;   
      margin-top: 10px;
      margin-left: 16px;
      :hover {
        background-color: rgba(255, 255, 255, 0.596);
        border-radius: 50%;
        color: #202020;
      }
    }

    #email {
      :hover {
        background-color: rgba(255, 255, 255, 0.596);
        border-radius: 50%;
        color: #e99a06;
      }
    }

    #phone {
      :hover {
        background-color: rgba(255, 255, 255, 0.596);
        border-radius: 50%;
        color: #019909;
      }
    }
}`;

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
      <div className="info-holder">
        <h2>{"Arthur Regatieri Munhoz"}</h2>
        <span>Frontend Developer, {moment(curriculum.birthday, 'YYYYMMDD').fromNow().replace('ago', 'old')}</span>

        <span id="separator" />

        <section className="info-section-frame">

          <section className="info-section-frame-top">
            <section id="phone" className="info-section" onClick={() => {
              navigator.clipboard?.writeText(curriculum.phone);
              toast("Phone number copied to the clipboard!");
            }}>
              <PhoneIcon color="inherit" />
              <span >
                {curriculum.phone}
              </span>
            </section>
            <section id="email" className="info-section" onClick={() => {
              window.open('mailto:arthurmunhoz@hotmail.com')
            }}>
              <EmailIcon color="inherit" />
              <span>{curriculum.email}</span>
            </section>
          </section>

          <section className="info-section-frame-bottom">
            <StyledButton onClick={() => window.open(curriculum.linkedin)}>
              <LinkedInIcon id="linkedin" fontSize="large" color="inherit" />
            </StyledButton>

            <StyledButton onClick={() => window.open(curriculum.github)}>
              <GitHubIcon id="github" fontSize="large" color="inherit" />
            </StyledButton>
          </section>
        </section>
      </div>
    </StyledHeader>)
}

export default Header;