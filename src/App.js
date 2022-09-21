import classes from './App.module.css';
import GlowBar from './Loading/GlowBar/GlowBar.jsx';
import AnimatedInput from './Form/AnimatedInput/AnimatedInput';
import FullImageCard from './Card/FullImageCard/FullImageCard';
import NeonButton from './Button/NeonButton/NeonButton';
import NeonButtonAnimated from './Button/NeonButtonAnimated/NeonButtonAnimated';
import GlitchText from './TextEffect/GlitchText/GlitchText';
import TypewriterText from './TextEffect/TypewriterText/TypewriterText';
import SamuraiText from './TextEffect/SamuraiText/SamuraiText';
// import image from './Assets/Images/JWSTHD.jpg';

function App() {

  // Quick colorway settings if you don't want to think of any
  // https://colorkit.co/color-palette-generator/15114f-4a5acc-e859c7-93dbe2-ff2200/
  const primaryDark = '#15114f'
  const primaryLight = '#4a5acc'
  const accentDark = '#e859c7'
  const accentLight = '#93dbe2'
  const accentAlt = '#ff2200'

  // Neon Button example settings
  const neonButtonSettings = {
    color: accentLight,
    colorBg: primaryLight,
    fontSize: '3rem',
    transitionSpeed: 500,
    clickAction: () => console.log('Custom Click')
  }

  const neonButtonAnimatedSettings = { 
    colorPrimary: accentDark, 
    colorSecondary: primaryDark,
    fontSize: '16px',
    transitionSpeed: .5,
    clickAction: () => console.log('Custom click')
  }

  // Glow Bar loader example settings
  // Replace GlowBar settings prop with this object to see customization examples
  const glowBarSettings = {
    // loaderColors: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'], // list of colors as strings 
    loaderColors: [primaryDark, primaryLight, accentDark, accentLight, accentAlt],
    loaderColorsRepeat: 2, // increase number to make color sections smaller
    loaderColorSize: 100, // Higher number makes each section larger
    animationSpeed: 15, //Time in seconds to complete one full animation
    height: 15, // height (in px) of the bar
    blurSize: 20 // larger number gives larger blur
  }

  const fullImageCardSettings = {
    backgroundImage: '/JWSTHD.jpg',
    maxWidth: '38ch',
    animationSpeed: '900ms', // time unit must be provided, ms recommended
    scaleUp: 1.25,
    barUpperPadding: 5,
    padding: '2rem',
    titleColor: '#9f81d7',
    bodyColor: '#7a68bb',
    barHeight: '2px',
    accentColor: '#7cf9b7',
    //buttonTextColor: 'hsl(207, 19%, 9%)', // Set to match title if no value given
    cardTitle: 'Custom Settings',
    cardBody: 'Here you can add custom text for the card. You should keep it relatively short.',
    cardButtonText: 'Click Here',
    // cardButtonPrimaryColor: '', // set to match accentColor if no value given
    cardButtonSecondaryColor: '#25cf51',
    buttonAction: () => console.log('Custom click')
  }

  const animatedInputSettings = {
    type: 'text',
    label: 'first name',
    textTransform: 'uppercase',
    width: '300px',
    colorBackground: primaryDark, // Not needed but recommended or label text will default to white when focused
    colorAccent: accentLight,
    colorMain: primaryLight,
    colorText: accentDark,
    animationSpeed: 1,
    labelSpacing: '.4em',
    useAltTheme: true
  }

  const glitchTextSettings = {
    color: primaryDark,
    fontSize: '6rem',
    fontWeight: 500,
    rColor: accentDark + '7b', // ~.75 opacity recommended but not required
    gColor: accentAlt + '7b', // ~.75 opacity recommended but not required
    bColor: primaryLight + '7b' // ~.75 opacity recommended but not required
  }

  const typewriterTextSettings = {
    showSubtitle: true, 
    titleContent: 'Custom Typewriter Text.', // Can be assigned here or passed as child
    subtitleContent: 'Optional customizable subtitle',
    // !titleFont! Must be monospace; 
    // !titleFont & subtitleFont! 
    // !  Include the link listed within the component to get correct font; 
    // !  To specify a downloadable font include the link in your index.html file
    titleFont: '\'Roboto Mono\', monospace', 
    subtitleFont: '\'Montserrat\', sans-serif',
    titleColor: primaryDark,
    subtitleColor: accentDark + '7a',
    titleWeight: 200,
    subtitleWeight: 100,
    titleFontSize: '4rem',
    subtitleFontSize: '3rem',
    typeTime: 6000, // ! in ms & must be integer
    blinkTime: '750ms',
    typeDelay: 1500, // ! in ms & must be integer
    subtitleDelay: 1000, // ! in ms & must be integer
    background: '#bfe7ff', // !required property unless using white background
    // caretColor: 'white' // Recommend to not use to match text color but wanted to give the option
  }

  const samuraiTextSettings = {
    color: primaryDark,
    fontSize: '4rem',
    fontWeight: '500',
    sliceColor: accentDark,
    sliceLength: '5%',
    sliceTime: 1000,
    sliceDelay: 500
  }
  
  return (
    <div className="App">
      <section className={`${classes.sectionContainer} ${classes.buttonSection}`}>
        <NeonButton settings={{}}>Text</NeonButton>
        <br></br>
        <NeonButton settings={neonButtonSettings}>Button</NeonButton>
        <br></br>
        <NeonButtonAnimated settings={{}}>Standard</NeonButtonAnimated>
        <NeonButtonAnimated settings={neonButtonAnimatedSettings}>Custom</NeonButtonAnimated>
      </section>
      <section className={`${classes.sectionContainer} ${classes.loadingSection}`}>
        <h2>Loading Bars</h2>
        <GlowBar settings={{}}/>
        <GlowBar settings={glowBarSettings}/>
      </section>
      <section className={`${classes.sectionContainer} ${classes.cardSection}`}>
        <FullImageCard settings={{}}/>
        <FullImageCard settings={fullImageCardSettings}
        />
      </section>
      <section className={`${classes.sectionContainer} ${classes.formsSection}`}>
        <h1>Forms and Input</h1>
        <AnimatedInput settings={{}}/>
        <AnimatedInput settings={animatedInputSettings} />
      </section>
      <section className={`${classes.sectionContainer} ${classes.textEffectSection}`}>
        <h1>Text Effects</h1>
        <GlitchText settings={{}}>Glitch</GlitchText>
        <GlitchText settings={glitchTextSettings}>Custom</GlitchText>
        <TypewriterText settings={{ background: '#bfe7ff'}}>Typewriter Text</TypewriterText>
        <TypewriterText settings={typewriterTextSettings}></TypewriterText>
        <SamuraiText settings={{}}>Samurai Text</SamuraiText>
        <SamuraiText settings={samuraiTextSettings}>Nani?</SamuraiText>
      </section>
    </div>
  );
}

export default App;