import anime from 'animejs';
import $ from 'jquery';
import store from './store'




const generateAboutMe = function () {
  return `

  <div id = 'about-me-container'>
    <header>
      <h1 id = 'name'>Hi, my name is Jacob Flaxman</h1>
    </header>
  <body>
    <div id = 'about-me-div'>
        <p id = 'about-body'> 
                I am a fullstack developer,  musician,  and green belt in lean & six sigma.
                I am graduate of Thinkful's Engineering Immersion course, however my education 
                began at the University of San Diego studying Industrial and Systems Engineering. 
                I have experience with data analytics as well as manufacturing processes. Engineering has 
                always been my passion and bringing change to my community through technology is my goal. 
                <br> <br>
                Outside of work, I am an avid and self-taught musician who can play anything from the
                trumpet to the synthesizer. I strive to learn and grow my abilities as an engineer and
                as a person everyday.  
        </p>
    </div> 
    <button class = 'slider two' type = 'button'> View Projects </button>
  </body>
</div> 
  
  `;
}


const generateProjects = function () {
  return `
  <main>
    <div id = 'project-container'> 
    <button class = 'slider one' type = 'button'> Home </button>
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
           <a href = 'https://thinkful-ei-narwhal.github.io/quizz-app-ren-jacob' target = '_blank' class = 'view-button' id = 'view-quiz-code'> View Code</a>
            <a href = 'https://github.com/thinkful-ei-narwhal/quizz-app-ren-jacob' target = '_blank' class = 'view-button' id = 'view-project'> View Project </a>
        </div>
    </div>
  </main>
  `;
}



const generateFooter = function () {
  return `
  <footer>
    <div class = 'footer' id = 'contact'>
      <div id = 'icons'>
        <a href = 'mailto:jacobflaxman1@gmail.com' target = '_blank' > <i class="icon fas fa-envelope"> </i> </a>
        <a href = 'https://github.com/jacobflaxman1' target = '_blank' > <i class="icon fab fa-github"></i> </a>
        <a href = 'https://www.linkedin.com/in/jacob-flaxman-513064171' target = '_blank'> <i class="icon fab fa-linkedin"></i> </a>
      </div>
    </div>
  </footer>
  
  
  `;
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
 
  })

}


render();
