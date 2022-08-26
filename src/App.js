import classes from './App.module.css';
import GlowBar from './Loading/GlowBar/GlowBar.jsx';
import AnimatedInput from './Form/AnimatedInput/AnimatedInput';
import FullImageCard from './Card/FullImageCard/FullImageCard';
import NeonButton from './Button/NeonButton/NeonButton';
import NeonButtonAnimated from './Button/NeonButtonAnimated/NeonButtonAnimated';
// import image from './Assets/Images/JWSTHD.jpg';

function App() {

  // Neon Button example settings
  const neonButtonSettings = {
    color: '#7deddc',
    colorBg: `#007ba7`,
    fontSize: '3rem',
    transitionSpeed: 500,
    clickAction: () => console.log('Custom Click')
  }

  const neonButtonAnimatedSettings = { 
    colorPrimary: '#ef3e9c', 
    colorSecondary: '#aaffb8',
    fontSize: '16px',
    transitionSpeed: .5
  }

  // Glow Bar loader example settings
  // Replace GlowBar settings prop with this object to see customization examples
  const glowBarSettings = {
    loaderColors: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'], // list of colors as strings 
    loaderColorsRepeat: 1, // increase number to make color sections smaller
    loaderColorSize: 200, // Higher number makes each section larger
    animationSpeed: 10, //Time in seconds to complete one full animation
    height: 15, // height (in px) of the bar
    blurSize: 20 // larger number gives larger blur
  }

  const fullImageCardSettings = {
    backgroundImage: '/JWSTHD.jpg',
    maxWidth: '38ch',
    animationSpeed: 900,
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
    cardButtonSecondaryColor: '#25cf51'
  }

  const animatedInputSettings = {
    type: 'text',
    label: 'first name',
    textTransform: 'uppercase',
    width: '300px',
    colorBackground: '#79b4f5', // Not needed but recommended or label text will default to white when focused
    colorAccent: '#c1e463',
    colorMain: '#8bc0d0',
    colorText: '#9dccac',
    animationSpeed: 1,
    labelSpacing: '.4em',
    useAltTheme: true
  }
  return (
    <div className="App">
      <section className={`${classes.sectionContainer} ${classes.buttonSection}`}>
        <NeonButton settings={{}}>Text</NeonButton>
        <br></br>
        <NeonButton 
          settings={neonButtonSettings}>Button</NeonButton>
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
        <FullImageCard 
          settings={fullImageCardSettings}
        />
      </section>
      <section className={`${classes.sectionContainer} ${classes.formsSection}`}>
        <h1>Forms and Input</h1>
        <AnimatedInput settings={{}}/>
        <AnimatedInput 
          settings={animatedInputSettings}
        />
      </section>
    </div>
  );
}

export default App;