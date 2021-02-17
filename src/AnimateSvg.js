import React from 'react';
import ReactVivus from 'react-vivus';
import svg1 from './images/svg/hello.svg';
import svg2 from './images/svg/hellofill.svg';

const showTextFill = () => {
  setTimeout(() => {  const element = document.querySelector('.svg-fill');
  element.classList.add('active')}, 3200);

}


const AnimateSvg = () => (
  <div id="svg-header">
  <ReactVivus
    className="svg-line"
    id="PLACEHOLDER"
    option={{
      file: svg1,
      type: 'sync',
      animTimingFunction: 'EASE-OUT BOUNCE',
      duration: 1500,
      onReady: showTextFill
    }}
    style={{ height: '150px', width: '538px' }}
    callback={console.log}
  />
  <ReactVivus
    className="svg-fill"
    id="PLACEHOLDER1"
    option={{
      file: svg2,
      type: 'sync',
      animTimingFunction: 'EASE-OUT BOUNCE',
      duration: 1500,
      onReady: console.log
    }}
    style={{ height: '150px', width: '538px' }}
    callback={console.log}
  />
  </div>
);
export default AnimateSvg;
