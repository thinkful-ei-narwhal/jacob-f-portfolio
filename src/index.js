import anime from 'animejs';
import $ from 'jquery';


  anime({
    targets: '.about-me h1',
    translateY: [-800, 0], // from 100 to 250
    delay: 1000,
    direction: 'alternate',
    loop: false
  });

  
  anime({
    targets: '.page-anchor',
    translateY: [-300, 0], // from 100 to 250
    delay: 750,
    direction: 'alternate',
    loop: false
  });

  anime({
    targets: '.profile',
    translateY: [-800, 0], // from 100 to 250
    delay: 1200,
    direction: 'alternate',
    loop: false
  });