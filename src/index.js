import anime from 'animejs';
import $ from 'jquery';
import store from './store'


const generateNavBar = function() {
  return `
  <div id = 'navbar'>
  <i id = 'menu-button' class="fas fa-bars"></i> 
  <ul id = 'nav-buttons' class = 'dropdown'> 
      <li class = 'content'> <a href = '#about-me-container'> About Me </a> </li>
      <li class = 'content'> <a href = '#project-container'> Projects </a> </li>
      <li class = 'content'> <a href = '#contact'> Contact Info </a> </li>
  <ul>
  </div>
  `;
}

const generateAboutMe = function () {
  return `
  <div id = 'about-me-container'>
  <h1 id = 'name'>Hi, my name is Jacob Flaxman</h1>
  <div id = 'about-me-div'>
      <span id = 'about-body'> 
              I am a fullstack developer,  musician,  and green belt in lean & six sigma.
              I am graduate of Thinkful's Engineering Immersion course, however my education 
              began at the University of San Diego studying Industrial and Systems Engineering. 
              I have experience with data analytics as well as manufacturing processes. Engineering has 
              always been my passion and bringing change to my community through technology is my goal. 
              <br> <br>
              Outside of work, I am an avid and self-taught musician who can play anything from the
              trumpet to the synthesizer. I strive to learn and grow my abilities as an engineer and
              as a person everyday.  
      </span>
  </div> 
  <button class = 'slider' type = 'button'> View Projects </button>
</div> 
  
  `;
}


const generateProjects = function () {
  return `
  <div id = 'project-container'> 
  <div class = 'project' id = 'project-one'>
       <h1 class = 'project-header'>Quiz App</h1>
       <img id = 'quiz' src = 'https://i.imgur.com/ZaEhnUu.png' alt = 'quiz screenshot'>
       <p class = 'project-description'>In this project, I was tasked with building a functional quiz application. The application 
          tests the user with a series of questions about Star Wars. The user information is logged 
          and displayed. 
       </p>
       <div class = 'technologies'>
          <i class="fab fa-html5 font-awesome tech-padding" aria-label="HTML Five logo"></i>
          <i class="fab fa-js font-awesome tech-padding" aria-label="JavaScript logo"></i>
          <i class="fab fa-css3-alt font-awesome tech-padding" aria-label="CSS Three logo"></i>
      </div>
       <div class = 'project-buttons'> 
          <div class = 'view-button' id = 'view-quiz-code'> View Code</div>
          <div class = 'view-button' id = 'view-project'> View Project </div>
      </div>
      <button class = 'slider' type = 'button'> Home </button>
  </div>
  `;
}



const generateFooter = function () {
  return `
    <div class = 'footer' id = 'contact'>
    <div id = 'icons'>
    <!-- <h1 id = 'contact'>Contact Info </h1>  -->
      <i class="icon fas fa-envelope" id = 'email-link'> </i>
      <i class="icon fab fa-github"></i> 
      <i class="icon fab fa-linkedin"></i>
    </div>
    
    
    </div>
  
  
  `;
}

const handleSliderClick = function () {

}


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



const render = function() {


  const aboutMe = `${generateAboutMe()} ${generateFooter()}`
  const projects = `${generateProjects()} ${generateFooter()}`
  $('.container').html(aboutMe)

  $('.container').on('click', '.slider', event => {
    console.log('test', store.store)
      if (store.store === 0) {
        console.log('test0', store.store)
          
         $('.container').html('')
         $('.container').html(aboutMe)
         store.store++;
      }
      else if (store.store === 1) {
        console.log('test1', store.store)
        
        $('.container').html('')
        $('.container').html(projects)
        store.store--;
      }
      // else {
      //   console.log('testElse', store.store)
      //   $('.container').html('')
      //   $('.container').html(aboutMe)
      // }
  })

}

// const renderOne = function () {
//   const aboutMe = `${generateAboutMe()} ${generateFooter()}`
//   const projects = `${generateProjects()} ${generateFooter()}`
//   const both = aboutMe + projects
//   $('.container').html(both)
// }



handleViewCodeClick();
handleViewProjectClick();
handleLinkedInClick();
handleMailClick();
handleMenuClick();
handleGitHubClick();
handleSliderClick();
render();
// renderOne();