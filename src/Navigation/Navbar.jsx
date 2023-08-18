import React, {useState} from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  position: sticky;
  top:0;
  width: 100%;
  height: 5vh;
  min-height: 30px;
  padding: 30px 14.284% 35px 14.284%;
  /* background-color: #20232f; */
  background-color: ${props => props.settings.backgroundColor};
  border-bottom: ${props => props.settings.bottomBorderHeight} solid ${props => props.settings.bottomBorderColor};
  display: flex;
  align-items: center;
  font-size: ${props => props.settings.textPrimarySize};
  margin: 0;
  z-index: 100;

  & > ul {
    width: 100%;
    padding: 0px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${props => props.settings.textPrimaryColor};
  }

  & ul li {
    font-weight: ${props => props.settings.textPrimaryWeight};
    font-family: ${props => props.settings.textFontFamily};
    color: ${props => props.settings.textPrimaryColor};
    transition: .3s;
  }

  & ul li:hover {
    color: ${props => props.settings.textHoverColor};
    cursor: pointer;
  }

  .active {
    color: ${props => props.settings.textActiveColor};
    font-weight: 400;
  }

  .burger {
    display: none;
  }

  & a {
    text-decoration: none;
    color: inherit;
    text-align: center;
  }

  @media screen and (max-width: 975px){

    & { 
      display: flex;
      justify-content: flex-start;
      padding-left: 1rem;
      padding-right: 1rem;
      height: 5vh;
    }

    .burger {
      display: block;
      color: ${props => props.settings.menuIconColor};
    }

    & > ul {
      display: none;
    }

    & ul.expanded {
      display: flex;
      flex-direction: column;
      list-style:none;
    }

    &.hasExpanded {
      height: 100%;
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
`

const Navbar = (props) => {

  const [showMobile, setShowMobile] = useState(false);
  const [activeLi, setActiveLi] = useState(0);

  const toggleShowMobile = (e) => {
    setShowMobile((prevState) => !prevState)
  }

  // const closeMobile = () => {
  //   setShowMobile(false)
  // }

  const clickHandler = (i) =>  {
    setActiveLi(i)
  }

  const menuItems = props.settings.menuItems || [{ name: 'Item1', navTo: '#first' }, { name: 'Item2', navTo: '#second' }, { name: 'Item3', navTo: '#third' }, { name: 'Item4', navTo: '#fourth' }]
  const menuComponents = menuItems.map((el, i) => {
    return (
      <li key={i}>
        <a
          onClick={() => clickHandler(i)} 
          href={el.navTo}
          className={`${activeLi === i ? 'active' : ''}`}>{el.name}</a>
      </li>
    )
  })

  console.log(props.settings.textPrimaryWeight);
  const finalSettings = {
    backgroundColor: props.settings.backgroundColor|| '#20232f',
    bottomBorderColor: props.settings.bottomBorderColor || '#5faed3',
    bottomBorderHeight: props.settings.bottomBorderHeight || '5px',
    textFontFamily: props.settings.textFontFamily || 'Montserrat',
    textPrimaryWeight: props.settings.textPrimaryWeight || '300',
    textPrimarySize: props.settings.textPrimarySize || '2.5rem',
    textPrimaryColor: props.settings.textPrimaryColor || 'rgba(184, 186, 197, 0.8)',
    textHoverColor: props.settings.textHoverColor || '#83fcea',
    textActiveColor: props.settings.textActiveColor || '#d85ecd',
    menuIconColor: props.settings.menuIconColor || '#c6009e'
  }

  return (
    <Nav settings={finalSettings} className={`${finalSettings.showMobile ? 'hasExpanded' : ''}`}>
      <div onClick={toggleShowMobile} className='burger'>
        {/* "&#8212" unicode - and "&#9776" unicode hamburger style symbol*/}
        {showMobile ? <>&#8212;</> : <>&#9776;</>} 
      </div>
      <ul className={`${showMobile ? 'expanded' : ''}`}>
        {menuComponents}
      </ul>
    </Nav>
  )
}

export default Navbar