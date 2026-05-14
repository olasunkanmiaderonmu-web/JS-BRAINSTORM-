
const ANSWER_KEY = {
  'js-basics-beginner': ['B', 'B', 'C', 'B', 'B', 'B', 'C', 'B', 'C', 'D', 'B', 'B', 'B', 'C', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'A', 'A', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'B', 'C', 'B', 'C', 'C', 'D', 'C', 'B', 'C', 'D', 'D', 'C', 'C', 'C', 'D', 'C', 'D', 'C', 'D', 'C'],
  'js-basics-intermediate': ['B','B','B','B','B','B','A','B','B','B','B','A','C','C','C','B','B','B','C','B','A','B','B','B','B','B','C','B','A','B','B','B','A','D','C','C','C','C','B','C','B','C','C','D','B','D','C','B','D','A'],
  'js-basics-advanced':['A','B','A','B','B','C','B','B','A','B','B','A','C','C','C','B','B','B','C','B','A','B','B','B','B','B','C','B','A','B','B','D','C','D','C','B','B','C','B','D','C','D','C','B','D','D','C','C','B','C'],
  'dom-beginner': ['A','B','A','B','B','B','A','B','A','B','B','B','B','B','B','A','B','B','B','B','A','B','A','B','B','B','B','B','A','B','B','B','C','C','B','C','C','C','B','B','C','C','D','B','C','D','B','B','B','C'],
  'dom-intermediate': ['B','C','C','A','B','B','B','B','A','B','B','B','B','B','A','B','B','B','B','B','A','B','B','B','A','B','B','B','A','A','D','C','B','B','B','B','B','C','B','A','B','B','B','C','B','B','C','C','B','C'],
  'dom-advanced':['A','B','B','A','A','B','A','B','B','B','B','B','A','B','B','B','B','B','B','B','A','B','A','B','B','B','A','A','B','A','B','B','B','B','B','B','B','B','B','B','B','B','C','B','A','B','D','C','C','C','D'],
  'functions-beginner': ['C','B','B','C','B','B','B','B','A','A','C','B','B','B','B','B','B','B','A','B','A','A','B','A','C','A','B','A','B','A','B','D','D','B','B','C','B','B','C','D','D','B','D','C','D','B','C','D','C','C'],
  'functions-intermediate': ['B','B','A','C','A','B','B','A','B','B','B','B','B','B','B','B','A','B','A','B','A','B','B','B','A','A','A','B','A','B','B','C','B','B','B','C','B','D','C','B','B','C','B','C','B','B','B','D','D','C'],
  'functions-advanced':['A','B','B','B','A','A','B','B','A','B','B','A','B','A','A','B','B','B','A','B','A','B','A','B','A','B','A','B','A','B','B','B','B','B','B','B','C','B','B','B','B','B','C','B','D','B','B','C','B','C','B'],
  'es6-beginner':['B','C','A','B','B','B','B','A','B','A','B','A','B','A','A','B','B','A','C','A','B','B','B','A','B','B','B','B','B','B','B','D','B','C','B','B','C','B','D','D','B','B','B','D','B','B','A','B','B','D'],
  'es6-intermediate': ['B', 'B', 'C', 'B', 'B', 'B', 'A', 'B', 'C', 'B', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'D', 'B', 'D', 'B', 'C', 'B', 'D', 'A', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'D'],
  'es6-advanced': ['B', 'B', 'D', 'B', 'B', 'B', 'C', 'B', 'C', 'B', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'B', 'C', 'A', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'D', 'B', 'D', 'B', 'B', 'C', 'B', 'A', 'B', 'D', 'B', 'B', 'B', 'D', 'B', 'C', 'B', 'B', 'C'],
  'async-beginner': ['B', 'B', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'C', 'C', 'D', 'B', 'B', 'D', 'B', 'D', 'C', 'C', 'B', 'B'],
  'async-intermediate':['B','B','B','B','B','B','A','B','A','B','A','B','B','B','B','B','B','B','B','B','B','B','A','B','A','B','B','A','B','B','D','C','B','C','B','B','C','D','C','B','A','B','C','B','B','A','C','C','D','C'],
  'async-advanced': ['A','B','A','B','A','B','B','B','A','A','A','A','A','B','A','B','B','B','A','A','A','B','A','B','A','B','A','A','A','B','B','C','C','B','D','C','B','B','B','C','C','B','B','B','C','A','B','D','B','B'],
};

// DOM declarations
let form = document.querySelector('.quiz-form');
let result = document.querySelector('.result');
let take = document.querySelector('.take-quiz');
let powered = document.querySelector('.powered');
let takebtn = document.querySelector('.takebtn');
let calBtn = document.querySelector('.calculator-btn');
let calContainer = document.querySelector('.calc-container');
let body = document.querySelector('body');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc-box button');
let test = document.querySelector('.test');
let welcome = document.querySelector('.welcome');
let textContainer = document.querySelector('.text-container');
let beginJourney = document.querySelector('.journey');
let startQuizNav = document.querySelector('.start-quiz-nav');
let timely = document.querySelector('.timely');
let welcomeBox = document.querySelector('.welcome-box');
let categories = document.getElementById('categories');
let timerElement = document.querySelector('.timer');
let beforeTimer = document.querySelector('.before-timer');
let startbtn = document.querySelector('.startbtn');
let quiz = document.querySelector('.quiz');
const homeBtn = document.getElementById("homeBtn");
let homeNav = document.querySelector('.home');
let aboutNav = document.querySelector('.about');
let categoryNav = document.querySelector('.categories');
let dashboardNav = document.querySelector('.dashboard');
let aboutStartBtn = document.querySelector('.about-start-btn');
let theoryBtn = document.querySelector('.theory-btn');
let theoryData = document.querySelector('.theory-data');
let inprove = document.querySelector('.improve');

theoryBtn.addEventListener('click', e=>{
  e.preventDefault();
  theoryData.classList.toggle('d-none');
})


let time = 1200;
let timeInterval;
let lastCategory = null;
let lastLevel = null;
let inCategoryMode = false;

// startTimer function
function startTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) seconds = '0' + seconds;
  timerElement.textContent = `${minutes}:${seconds}`;
  time--;

  if (time < 0) {
    clearInterval(timeInterval);
    timerElement.textContent = 'Time up!';
    alert('Time is up! Submitting automatically.');
    if (inCategoryMode) {
      handleCategorySubmit();
    } else {
      form.dispatchEvent(new Event('submit'));
    }
  }
}


// resetTimer function

function resetTimer() {
  clearInterval(timeInterval);
  time = 1200;
  timerElement.textContent = '20:00';
}


// startCountdown function

function startCountdown() {
  resetTimer();
  if (beforeTimer) beforeTimer.classList.remove('d-none');
  timeInterval = setInterval(startTimer, 1000);
}

// animate score

function animateScore(targetPercent) {
  result.classList.remove('d-none');
  let span = result.querySelector('span');
  let current = 0;
  const step = setInterval(() => {
    span.textContent = `${current}%`;
    if (current >= targetPercent) {
      clearInterval(step);
    } else {
      current++;
    }
  }, 20);
}



// ABOUT IMAGE ANIMATION

const aboutImage = document.querySelector('.about-img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

observer.observe(aboutImage);


// nav links animation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});



//
function hideSiteSections() {
  categories.style.display = 'none';
  const intro = document.querySelector('.intro');
  const timing = document.querySelector('.timing');
  const about = document.getElementById('about');
  const dashboard = document.getElementById('dashboard');
  const nav = document.querySelector('#navbarNav');
  intro.style.display = 'none';
  timing.style.display = 'none';
  about.style.display = 'none';
  dashboard.style.display = 'none';
  powered.style.display = 'none';
  nav.classList.remove('show');
}

function showSiteSections() {
  if (categories) categories.style.display = '';
  const intro = document.querySelector('.intro');
  const timing = document.querySelector('.timing');
  const about = document.getElementById('about');
  const dashboard = document.getElementById('dashboard');
  const nav = document.querySelector('#navbarNav');
  intro.style.display = '';
  timing.style.display = '';
  about.style.display = '';
  dashboard.style.display = '';
  powered.style.display = '';
  nav.style.display = '';
}


// 
startbtn.addEventListener('click', e => {
  e.preventDefault();
  alert('Select a category');
  categories.scrollIntoView();

});


//
startQuizNav.addEventListener('click', e => {
  e.preventDefault();
  alert('Select a category');
  categories.scrollIntoView();
});


//
aboutStartBtn.addEventListener('click', e => {
  e.preventDefault();
  alert('Select a category');
  categories.scrollIntoView();
});



const scoreDisplay = document.getElementById("scoreDisplay");

function showScore(score){

    scoreDisplay.innerText = score + "%";

    // Bounce effect when score appears
    scoreDisplay.animate(
        [
            { transform: "scale(0.5)", opacity: 0 },
            { transform: "scale(1.3)", opacity: 1 },
            { transform: "scale(1)", opacity: 1 }
        ],
        {
            duration: 700,
            easing: "ease"
        }
    );

    // Dynamic color based on score
    if(score < 40){
        scoreDisplay.classList.remove("text-success","text-warning");
        scoreDisplay.classList.add("text-danger");
    }

    else if(score < 70){
        scoreDisplay.classList.remove("text-success","text-danger");
        scoreDisplay.classList.add("text-warning");
    }

    else{
        scoreDisplay.classList.remove("text-warning","text-danger");
        scoreDisplay.classList.add("text-success");
    }
}

/* Example */
showScore(85);




// take quiz again 
takebtn.addEventListener('click', e => {
  e.preventDefault();

  display.value = '';

  result.classList.add('d-none');
  result.querySelector('span').textContent = '0%';
  take.classList.add('d-none');
  calBtn.classList.remove('d-none');
  calContainer.classList.add('d-none');
  startQuizNav.style.display = 'none';

  if (inCategoryMode && lastCategory && lastLevel) {
    launchCategoryQuiz(lastCategory, lastLevel);
  } else {
    form.reset();
    startCountdown();
  }
});


//  
const categoryButtons = document.querySelectorAll('.cat-btn');
const allQuestionSets = document.querySelectorAll('.question-set');
const quizArea = document.getElementById('quizArea');
const quizAreaSubmitBtn = document.querySelector('.quiz-area-submit');


// handle submit category
function handleCategorySubmit() {
  clearInterval(timeInterval);
  if (beforeTimer) beforeTimer.classList.add('d-none');

  const key = `${lastCategory}-${lastLevel}`;
  const answers = ANSWER_KEY[key] || [];

  if (answers.length === 0) {
    alert('No answer key found for this quiz.');
    return;
  }

  // Gather user answers from  question set
  const activeSet = document.querySelector(
    `.question-set[data-category="${lastCategory}"][data-level="${lastLevel}"]`
  );

  if (!activeSet) { animateScore(0); return; }

  const radios = activeSet.querySelectorAll('input[type="radio"]');
  // Group by name
  const groups = {};
  radios.forEach(r => {
    if (!groups[r.name]) groups[r.name] = [];
    groups[r.name].push(r);
  });

  const names = Object.keys(groups);
  let score = 0;

  names.forEach((name, i) => {
    const selected = groups[name].find(r => r.checked);
    const userAns = selected ? selected.value : '';
    const correct = answers[i] || '';
    const isRight = userAns === correct;
    if (isRight) score++;

  });

  const pct = answers.length > 0 ? Math.round((score / answers.length) * 100) : 0;
  console.log(`[Category Quiz ${key}] Score: ${score}/${answers.length} = ${pct}%`);

  // hide visible dom
  quizArea.classList.add('d-none');
  hideSiteSections()
  calContainer.style.display = 'none'
  scrollTo(0, 0);
  take.classList.remove('d-none');
  calBtn.classList.add('d-none');
  homeBtn.classList.remove("d-none");
  powered.style.display = 'none';
  startQuizNav.style.display = 'none';
  animateScore(pct);
}


// submit button function

if (quizAreaSubmitBtn) {
  quizAreaSubmitBtn.addEventListener('click', handleCategorySubmit);
}



homeBtn.addEventListener("click", function () {
  location.href = "index.html";
});


homeNav.addEventListener("click", function () {
  location.href = "index.html"; // change to your home page file
});



// launch a category & level function
function launchCategoryQuiz(category, level) {
  inCategoryMode = true;
  lastCategory = category;
  lastLevel = level;


  // Reset visual feedback on all options
  document.querySelectorAll('.question-set label, .question-set input[type="radio"]').forEach(el => {
    el.style.color = '';
    el.style.fontWeight = '';
  });

  // Uncheck all radios in target set
  const targetSet = document.querySelector(
    `.question-set[data-category="${category}"][data-level="${level}"]`
  );

  if (!targetSet) {
    alert('No questions found for this selection.');
    return;
  }

  hideSiteSections();

  // Show quizArea and correct question set
  quizArea.classList.remove('d-none');
  allQuestionSets.forEach(s => s.classList.add('d-none'));

  if (targetSet) {
    targetSet.classList.remove('d-none');
  } else {
    alert('No questions found for this selection.')
    showSiteSections();
    return;
  }

  startCountdown();
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


// startquiz button in category
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    const parentCard = button.closest('.card');
    const selected = parentCard.querySelector('input[type="radio"]:checked');

    if (!selected) {
      alert('Please select a level!');
      return;
    }

    launchCategoryQuiz(category, selected.value);
    calBtn.classList.remove('d-none')
    powered.style.display = 'none';
    startQuizNav.style.display = 'none';
    beginJourney.style.display = 'none';


  });

});



// calculator 
calBtn.addEventListener('click', e => {
  e.preventDefault();
  calContainer.classList.toggle('d-none');
  display.value = '';
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleInput(button.getAttribute('data-value'));
  });
});

function handleInput(value) {
  switch (value) {
    case 'C': display.value = ''; break;
    case 'DEL': display.value = display.value.slice(0, -1); break;
    case '=':
      try { display.value = eval(display.value); }
      catch { display.value = 'Error'; }
      break;
    default: display.value += value;
  }
}


// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();


// Footer navigation (same behavior as navbar)
document.querySelector('.footer-home').addEventListener('click', (e) => {
  e.preventDefault();
  location.href = "index.html";
});

document.querySelector('.footer-about').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.footer-categories').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.footer-dashboard').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
});


//

