import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { saveAs } from 'file-saver'
import mergeImages from 'merge-images';
// Images
import * as hairImages from './alpaca/hair';
import * as accessoryImages from './alpaca/accessories';
import * as backgroundImages from './alpaca/backgrounds';
import * as earImages from './alpaca/ears';
import * as eyeImages from './alpaca/eyes';
import * as legImages from './alpaca/leg';
import * as mouthImages from './alpaca/mouth';
import * as neckImages from './alpaca/neck';
import nose from './alpaca/nose.png';

function App() {

    // useStates to show button options
    const [showHairStyles, setShowHairStyles] = useState(true);
    const [showAccessoryStyles, setShowAccessoryStyles] = useState(false);
    const [showBackgroundStyles, setShowBackgroundStyles] = useState(false);
    const [showEarStyles, setShowEarStyles] = useState(false);
    const [showEyeStyles, setShowEyeStyles] = useState(false);
    const [showLegStyles, setShowLegStyles] = useState(false);
    const [showMouthStyles, setShowMouthStyles] = useState(false);
    const [showNeckStyles, setShowNeckStyles] = useState(false);

    // useStates to switch between Images
    const [currentHairImage, setCurrentHairImage] = useState(hairImages.defaultHair);
    const [currentAccessoryImage, setCurrentAccessoryImage] = useState(accessoryImages.headphoneImg);
    const [currentBackgroundImage, setCurrentBackgroundImage] = useState(backgroundImages.blue1Img);
    const [currentEarImage, setCurrentEarImage] = useState(earImages.defaultEar);
    const [currentEyeImage, setCurrentEyeImage] = useState(eyeImages.defaultEyes);
    const [currentLegImage, setCurrentLegImage] = useState(legImages.defaultLeg);
    const [currentMouthImage, setCurrentMouthImage] = useState(mouthImages.defaultMouth);
    const [currentNeckImage, setCurrentNeckImage] = useState(neckImages.defaultNeck);
    const [combinedImage, setCombinedImage] = useState('');

    useEffect(() => {
        mergeImages([
            { src: currentBackgroundImage },
            { src: currentLegImage },
            { src: currentNeckImage },
            { src: nose },
            { src: currentAccessoryImage },
            { src: currentEarImage },
            { src: currentHairImage },
            { src: currentEyeImage },
            { src: currentMouthImage }
        ]).then(b64 => setCombinedImage(b64));
    }, [currentAccessoryImage, currentBackgroundImage, 
    currentEarImage, currentEyeImage, currentHairImage, 
    currentLegImage, currentMouthImage, currentNeckImage, nose]);

    // Function used to handle download button
    const handleDownload = () => {
    // Merge the images into one base64 image
        mergeImages([
            { src: currentBackgroundImage },
            { src: currentLegImage },
            { src: currentNeckImage },
            { src: nose },
            { src: currentAccessoryImage },
            { src: currentEarImage },
            { src: currentHairImage },
            { src: currentEyeImage },
            { src: currentMouthImage }
        ])
        .then(b64 => {
            // Convert base64 to Blob
            const byteString = atob(b64.split(',')[1]);
            const mimeString = b64.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);

            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            const blob = new Blob([ab], { type: mimeString });

            // Use FileSaver to trigger download
            saveAs(blob, 'alpaca.png');
        });
    }

    // Functions used to handle randomizer

    const getRandomKey = (styleObject) => {
        const keys = Object.keys(styleObject);
        return keys[Math.floor(Math.random() * keys.length)];
    };
    const handleRandomizer = () => {
        setCurrentHairImage(hairStyles[getRandomKey(hairStyles)]);
        setCurrentAccessoryImage(accessoryStyles[getRandomKey(accessoryStyles)]);
        setCurrentBackgroundImage(backgroundStyles[getRandomKey(backgroundStyles)]);
        setCurrentEarImage(earStyles[getRandomKey(earStyles)]);
        setCurrentEyeImage(eyeStyles[getRandomKey(eyeStyles)]);
        setCurrentLegImage(legStyles[getRandomKey(legStyles)]);
        setCurrentMouthImage(mouthStyles[getRandomKey(mouthStyles)]);
        setCurrentNeckImage(neckStyles[getRandomKey(neckStyles)]);
    }

    // Event Handlers for toggling options
    const toggleHairStyles = () => {
        setShowHairStyles(!showHairStyles);
        setShowAccessoryStyles(false);
        setShowBackgroundStyles(false);
        setShowEarStyles(false);
        setShowEyeStyles(false);
        setShowLegStyles(false);
        setShowMouthStyles(false);
        setShowNeckStyles(false);
    }
    const toggleAccessoryStyles = () => {
        setShowHairStyles(false);
        setShowAccessoryStyles(!showAccessoryStyles);
        setShowBackgroundStyles(false);
        setShowEarStyles(false);
        setShowEyeStyles(false);
        setShowLegStyles(false);
        setShowMouthStyles(false);
        setShowNeckStyles(false);
    }
    const toggleBackgroundStyles = () => {
        setShowHairStyles(false);
        setShowAccessoryStyles(false);
        setShowBackgroundStyles(!showBackgroundStyles);
        setShowEarStyles(false);
        setShowEyeStyles(false);
        setShowLegStyles(false);
        setShowMouthStyles(false);
        setShowNeckStyles(false);
    }
    const toggleEarStyles = () => {
        setShowHairStyles(false);
        setShowAccessoryStyles(false);
        setShowBackgroundStyles(false);
        setShowEarStyles(!showEarStyles);
        setShowEyeStyles(false);
        setShowLegStyles(false);
        setShowMouthStyles(false);
        setShowNeckStyles(false);
    }
    const toggleEyeStyles = () => {
        setShowHairStyles(false);
        setShowAccessoryStyles(false);
        setShowBackgroundStyles(false);
        setShowEarStyles(false);
        setShowEyeStyles(!showEyeStyles);
        setShowLegStyles(false);
        setShowMouthStyles(false);
        setShowNeckStyles(false);
    }
    const toggleLegStyles = () => {
        setShowHairStyles(false);
        setShowAccessoryStyles(false);
        setShowBackgroundStyles(false);
        setShowEarStyles(false);
        setShowEyeStyles(false);
        setShowLegStyles(!showLegStyles);
        setShowMouthStyles(false);
        setShowNeckStyles(false);
    }
    const toggleMouthStyles = () => {
        setShowHairStyles(false);
        setShowAccessoryStyles(false);
        setShowBackgroundStyles(false);
        setShowEarStyles(false);
        setShowEyeStyles(false);
        setShowLegStyles(false);
        setShowMouthStyles(!showMouthStyles);
        setShowNeckStyles(false);
    }
    const toggleNeckStyles = () => {
        setShowHairStyles(false);
        setShowAccessoryStyles(false);
        setShowBackgroundStyles(false);
        setShowEarStyles(false);
        setShowEyeStyles(false);
        setShowLegStyles(false);
        setShowMouthStyles(false);
        setShowNeckStyles(!showNeckStyles);
    }

    // Objects to map option styles
    const hairStyles = {
        Default: hairImages.defaultHair,
        Curls: hairImages.curlsHair,
        Short: hairImages.shortHair,
        Bang: hairImages.bangHair,
        Elegant: hairImages.elegantHair,
        Quiff: hairImages.quiffHair,
        Fancy: hairImages.fancyHair
    };

    const accessoryStyles = {
        Headphones: accessoryImages.headphoneImg,
        Glasses: accessoryImages.glassesImg,
        Earings: accessoryImages.earingsImg,
        Flower: accessoryImages.flowerImg
    };

    const backgroundStyles = {
        Blue50: backgroundImages.blue1Img,
        Blue60: backgroundImages.blue2Img,
        Blue70: backgroundImages.blue3Img,
        DarkBlue30: backgroundImages.darkblue1Img,
        DarkBlue50: backgroundImages.darkblue2Img,
        DarkBlue70: backgroundImages.darkblue3Img,
        Green50: backgroundImages.green1Img,
        Green60: backgroundImages.green2Img,
        Green70: backgroundImages.green3Img,
        Grey40: backgroundImages.grey1Img,
        Grey70: backgroundImages.grey2Img,
        Grey80: backgroundImages.grey3Img,
        Red50: backgroundImages.red1Img,
        Red60: backgroundImages.red2Img,
        Red70: backgroundImages.red3Img,
        Yellow50: backgroundImages.yellow1Img,
        Yellow60: backgroundImages.yellow2Img,
        Yellow70: backgroundImages.yellow3Img
    };

    const earStyles = {
        Default: earImages.defaultEar,
        Backward: earImages.backwardEar,
        Forward: earImages.forwardEar
    };

    const eyeStyles = {
        Default: eyeImages.defaultEyes,
        Angry: eyeImages.angryEyes,
        Naughty: eyeImages.naughtyEyes,
        Panda: eyeImages.pandaEyes,
        Smart: eyeImages.smartEyes,
        Start: eyeImages.starEyes
    };

    const legStyles = {
        Default: legImages.defaultLeg,
        BubbleTea: legImages.bubbleteaLeg,
        Cookie: legImages.cookieLeg,
        GameConsole: legImages.gameconsoleLeg,
        Backward: legImages.backwardLeg,
        Forward: legImages.forwardLeg
    };

    const mouthStyles = {
        Default: mouthImages.defaultMouth,
        Astonished: mouthImages.astonishedMouth,
        Eating: mouthImages.eatingMouth,
        Laughing: mouthImages.laughMouth,
        Tongue: mouthImages.tongueMouth
    };

    const neckStyles = {
        Default: neckImages.defaultNeck,
        BendBackward: neckImages.backwardNeck,
        BendForward: neckImages.forwardNeck,
        Thick: neckImages.thickNeck
    };

    // Event Handler for setting the current hair style
    const handleHairChange = (style) => {
        setCurrentHairImage(hairStyles[style]);
    }

    const handleAccessoryChange = (style) => {
        setCurrentAccessoryImage(accessoryStyles[style]);
    }

    const handleBackgroundChange = (style) => {
        setCurrentBackgroundImage(backgroundStyles[style]);
    }

    const handleEarChange = (style) => {
        setCurrentEarImage(earStyles[style]);
    }

    const handleEyeChange = (style) => {
        setCurrentEyeImage(eyeStyles[style]);
    }

    const handleLegChange = (style) => {
        setCurrentLegImage(legStyles[style]);
    }

    const handleMouthChange = (style) => {
        setCurrentMouthImage(mouthStyles[style]);
    }

    const handleNeckChange = (style) => {
        setCurrentNeckImage(neckStyles[style]);
    }

    // Return Statement
    return (
        <div>
            <h1> ALPACA GENERATOR </h1>
            <div class="container">
            <div className="modify-container"> 
                <h4> Accesorize the Alpaca's </h4>
                <button onClick={toggleHairStyles}> Hair </button>
                <button onClick={toggleEarStyles}> Ears </button>
                <button onClick={toggleEyeStyles}> Eyes </button>
                <button onClick={toggleMouthStyles}> Mouth </button>
                <button onClick={toggleNeckStyles}> Neck </button>
                <button onClick={toggleLegStyles}> Leg </button>
                <button onClick={toggleAccessoryStyles}> Accessories </button>
                <button onClick={toggleBackgroundStyles}> Background </button>
                <h4> Style </h4>
                {showHairStyles && (
                   <div>
                        {Object.keys(hairStyles).map((style) => (
                            <button key={style} onClick={() => handleHairChange(style)}> {style} </button>
                        ))}
                    </div>
                )}
                {showAccessoryStyles && (
                   <div>
                        {Object.keys(accessoryStyles).map((style) => (
                            <button key={style} onClick={() => handleAccessoryChange(style)}> {style} </button>
                        ))}
                    </div>
                )}
                {showBackgroundStyles && (
                   <div>
                        {Object.keys(backgroundStyles).map((style) => (
                            <button key={style} onClick={() => handleBackgroundChange(style)}> {style} </button>
                        ))}
                    </div>
                )}
                {showEarStyles && (
                   <div>
                        {Object.keys(earStyles).map((style) => (
                            <button key={style} onClick={() => handleEarChange(style)}> {style} </button>
                        ))}
                    </div>
                )}
                {showNeckStyles && (
                   <div>
                        {Object.keys(neckStyles).map((style) => (
                            <button key={style} onClick={() => handleNeckChange(style)}> {style} </button>
                        ))}
                    </div>
                )}
                {showEyeStyles && (
                   <div>
                        {Object.keys(eyeStyles).map((style) => (
                            <button key={style} onClick={() => handleEyeChange(style)}> {style} </button>
                        ))}
                    </div>
                )}
                {showMouthStyles && (
                   <div>
                        {Object.keys(mouthStyles).map((style) => (
                            <button key={style} onClick={() => handleMouthChange(style)}> {style} </button>
                        ))}
                    </div>
                )}
                {showLegStyles && (
                   <div>
                        {Object.keys(legStyles).map((style) => (
                            <button key={style} onClick={() => handleLegChange(style)}> {style} </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="image-container">
                <img class="comb-image" src={combinedImage} alt="Alpaca" />
                <button onClick={handleRandomizer}> Random </button>
                <button onClick={handleDownload}> Download </button>
            </div>
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

