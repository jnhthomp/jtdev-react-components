import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  font-family: sans-serif;
  box-shadow: 0 18px 200px -60px black;
  border-radius: 50px;
  background-color: ${props => props.profileSettings.cardBackgroundColor};
  backdrop-filter: ${props => `blur(${props.profileSettings.cardBlurLevel}px)`};
  width: 650px;
  padding: 3rem 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: 768px){
    width: auto;
  }

  & figure {
    width: 85%;
    display: flex;
    justify-content: center;
  }

  & figure img {
    margin: auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    box-shadow: 0 10px 60px -10px rgba(13, 28, 39, .5);
  }

  & div.cardDesc {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 25px;

    & h1 {
      color: ${props => props.profileSettings.titleColor};
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0;
    }

    & h1 + div {
    color: ${props => props.profileSettings.subtitleColor};
    font-size: 20px;
    }

    & div.location {
      color: ${props => props.profileSettings.mapTextColor};
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
    }
  }

  & div.cardInfo {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;

    @media screen and (max-width: 576px){
      gap: 30px;
    }

    & > div {
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;

      & > *:first-child {
        font-weight: bold;
        color: ${props => props.profileSettings.infoDataColor};
        letter-spacing: 3px;
        margin-bottom: 15px;
      }

      & > *:last-child {
        color: ${props => props.profileSettings.infoLabelColor};
        font-size: 16px;

      }
    }
  }

  & div.social {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    & a {
      display: inline-flex;
      width: 55px;
      height: 55px;
      margin: 15px;
      border-radius: 40%;
      justify-content: center;
      align-items: center;
      color: white;
      position: relative;
      flex-shrink: 0;
      transition: all .2s;

      @media screen and (max-width: 768px){
        width: 50px;
        height: 50px;
        margin: 10px;
      }

      @media screen and (min-width: 768px){
        &:hover {
          transform: scale(1.2) translateY(-5px);
        }
      }

      &.facebook {
        background: linear-gradient(45deg, #3b5998, #0078d7);
        box-shadow: 0 4px 30px rgba(43, 98, 169, 0.5);
      }

      &.linkedin {
        background: linear-gradient(45deg, #0072b1, #0072b1);
        box-shadow: 0 4px 30px rgba(0, 114, 177, 0.498);
      }

      &.twitter {
        background: linear-gradient(45deg, #1da1f2, #0e71c8);
        box-shadow: 0 4px 30px rgba(19, 127, 212, 0.7);
      }

      &.instagram {
        background: linear-gradient(45deg,
          #5851db,
          #833ab4,
          #c13584,
          #e1306c,
          #fd1d1d
          );
        box-shadow: 0 4px 30px rgba(120, 64, 190, 0.6);
      }

      &.behance {
        background: linear-gradient(45deg, #1769ff, #213fca);
        box-shadow: 0 4px 30px rgba(27, 86, 231, 0.7);
      }

      &.github {
        background: linear-gradient(45deg, #333333, #626b73);
        box-shadow: 0 4px 30px rgba(63, 65, 67, 0.6);
      }

      &.link {
        background: linear-gradient(45deg, #b82323, #b60000);
        box-shadow: 0 4px 30px rgba(184, 35, 35, 0.6);
      }
    }
  }

  & div.actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 576px){
      flex-direction: column;
      gap: 1.5rem;
    }

    & > button {
      font-weight: bold;
      font-size: 22px;
      padding: 15px 0;
      min-width: 250px;
      border-radius: 50px;
      border: none;
      color: white;
      cursor: pointer;
      transition: all .2s;

      @media screen and (max-width: 768px){
        min-width: 170px;
      }

      @media screen and (max-width: 576px){
        min-width: inherit;
        width: 100%;
        max-width: 350px;
      }

      @media screen and (min-width: 576px){
        &:hover {
          transform: translateY(-5px);
        }
      }

      &.btnPrimary {
        color: ${props => props.profileSettings.btnPrimaryTextColor};
        background: ${props => props.profileSettings.btnPrimaryColor};
        

        &:hover{
          box-shadow: 0 4px 15px ${props => props.profileSettings.btnPrimaryColor};
        }
      }

      &.btnSecondary {
        color: ${props => props.profileSettings.btnSecondaryTextColor};
        background: ${props => props.profileSettings.btnSecondaryColor};
        

        &:hover{
          box-shadow: 0 4px 15px ${props => props.profileSettings.btnSecondaryColor};
        }
      }
    }
  }

`
const ProfileCard = (props) => {

  // Check if data object was passed via props if so use it, if not use default
  const dataDefaults = {
    imagePath: '/logo512.png', // Default image provided with CRA
    title: 'John Doe',
    subtitle: 'Lorem ipsum dolor',
    location: 'Mos Eisley, Tatooine',
    info: [
      // 3 suggested but will wrap however many you add (can be omitted entirely)
      // { data: '999', title: 'Followers' },
      // { data: '999', title: 'Commits' },
      // { data: '99', title: 'Repos' }
    ],
    social: [
      //  < 5 max suggested but will wrap however many you add (can be omitted entirely)
      //? if type is invalid (not listed in socialSVGs) then will default to 'link' type and style
      // { type: 'facebook', link: 'https://facebook.com' },
      // { type: 'linkedin', link: 'https://linkedin.com' },
      // { type: 'twitter', link: 'https://twitter.com' },
      // { type: 'instagram', link: 'https://instagram.com' },
      // { type: 'github', link: 'https://github.com' }
      // { type: 'behance', link: 'https://behance.com' },
    ],
    btnPrimary: {
      text: 'Send Message',
      action: () => {
        console.log('btnPrimary clicked')
      }
    },

    btnSecondary: {
      text: 'Follow Me',
      action: () => console.log('btnSecondary clicked')
    }

  }
  const userData = props.settings.data ? props.settings.data : dataDefaults

  const defaultTextColor = props.settings.defaultTextColor || 'black'
  const finalSettings = {
    cardBackgroundColor: props.settings.cardBackgroundColor || 'background-color: rgba(0, 0, 0, 0)',
    cardBlurLevel: props.settings.cardBlurLevel || 5,
    titleColor: props.settings.titleColor || defaultTextColor,
    subtitleColor: props.settings.subtitleColor || defaultTextColor,
    mapPinColor: props.settings.mapPinColor || defaultTextColor,
    mapTextColor: props.settings.mapTextColor || defaultTextColor,
    infoDataColor: props.settings.infoDataColor || defaultTextColor,
    infoLabelColor: props.settings.infoLabelColor || defaultTextColor,
    btnPrimaryColor: props.settings.btnPrimaryColor || 'linear-gradient(45deg, #1da1f2, #0e71c8)',
    btnPrimaryTextColor: props.settings.btnPrimaryTextColor || 'white',
    btnSecondaryColor: props.settings.btnSecondaryColor || 'linear-gradient(45deg, #d5135a, #f05924)',
    btnSecondaryTextColor: props.settings.btnSecondaryTextColor || 'white',
    data: userData
  }

  const infoJSX = finalSettings.data.info.map((data, idx) => { 
    return(
      <div key={idx}>
        <div>{data.data}</div>
        <div>{data.title}</div>
      </div>
    )
  })

  const socialSVGs = {
    'facebook': 
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke='white' fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>,

    'linkedin':
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <line x1="8" y1="8" x2="8" y2="8.01" />
        <line x1="12" y1="16" x2="12" y2="11" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
      </svg>,

    'twitter':
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke='white' fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
      </svg>,

    'instagram': 
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke='white' fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
      </svg>,

    'behance': 
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-behance" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke='white' fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
        <line x1="3" y1="12" x2="7.5" y2="12" />
        <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
        <line x1="16" y1="6" x2="19" y2="6" />
      </svg>,

    'github':
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke='white' fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>,

    'link':
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
        <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
      </svg>

  }

  const socialsJSX = finalSettings.data.social.map((data, idx) => {
    let network;
    if(socialSVGs.hasOwnProperty(data.type)){
      network = data.type
    } else {
      network = 'link'
    }
    return (
      <a href={data.link} className={network} key={idx}>
        {socialSVGs[network]}
      </a>
    )
  })

  return (
    <Card profileSettings={finalSettings}>
      <figure>
        <img src={finalSettings.data.imagePath} alt="profile" />
      </figure>
      <div className='cardDesc'>
        <h1>{finalSettings.data.title}</h1>
        <div>{finalSettings.data.subtitle}</div>
        <div className='location'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={finalSettings.mapPinColor} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <span>{finalSettings.data.location}</span>
        </div>
      </div>

      <div className='cardInfo'>
        {infoJSX}
      </div>

      <div className='social'>
        {socialsJSX}
      </div>

      <div className='actions'>
        <button className="btnPrimary" onClick={finalSettings.data.btnPrimary.action}>{finalSettings.data.btnPrimary.text}</button>
        <button className="btnSecondary" onClick={finalSettings.data.btnSecondary.action}>{finalSettings.data.btnSecondary.text}</button>
      </div>
    </Card>
  )
}

export default ProfileCard