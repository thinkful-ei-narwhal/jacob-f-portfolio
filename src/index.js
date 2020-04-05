import anime from 'animejs';
import $ from 'jquery';


const handleMenuClick = function() {
  $('.container').on('click', '#menu-button', event => {
    console.log('working')
      $('#nav-buttons').toggleClass('active')
      $('.navbar').css('height', '50%')
  })
}


const handleMailClick = function () {
  $('.container').on('click', '.fa-envelope', event => {
    console.log('working');
    event.preventDefault();
    let email = 'jacobflaxman1@gmail.com'
    window.location = 'mailto:' + email;
  })
}

const handleGitHubClick = function () {
  $('.container').on('click', '.fa-github', event => {
    console.log('working');
    event.preventDefault();
    window.open('https://github.com/jacobflaxman1', '_blank')
  })
}

const handleLinkedInClick = function () {
  $('.container').on('click', '.fa-linkedin', event => {
    console.log('working');
    event.preventDefault();
    window.open('https://www.linkedin.com/in/jacob-flaxman-513064171', '_blank')
  })
}

const handleViewProjectClick = function () {
  $('.container').on('click', '#view-project', event => {
    console.log('working');
    event.preventDefault();
    window.open('https://thinkful-ei-narwhal.github.io/quizz-app-ren-jacob/', '_blank')
  })
}

const handleViewCodeClick = function () {
  $('.container').on('click', '#view-quiz-code', event => {
    console.log('working');
    event.preventDefault();
    window.open('https://github.com/thinkful-ei-narwhal/quizz-app-ren-jacob', '_blank')
  })
}



handleViewCodeClick();
handleViewProjectClick();
handleLinkedInClick();
handleMailClick();
handleMenuClick();
handleGitHubClick();

  anime({
    targets: '.about-me h1',
    translateY: [-800, 0], // from 100 to 250
    delay: 750,
    direction: 'alternate',
    loop: false
  });

