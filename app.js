
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll(".thumbnail .item");
  
    items.forEach(function(item) {
      var img = item.querySelector("img");
      var imgSrc = img.getAttribute("src");
      item.style.backgroundImage = `linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0)
      ), url('${imgSrc}')`;
      img.style.display = "none";
    });
  });

  function toggleVisibility(projectID) {
    const section = document.getElementById(`projectImagesSection-${projectID}`);
    if (section.classList.contains('visible')) {
        section.classList.remove('visible');
        setTimeout(() => {
            section.style.display = 'none';
        }, 500);
    } else {
        section.style.display = 'block';
        setTimeout(() => {
            section.classList.add('visible');
        }, 10);
    }
}

function fadeOut(projectID) {
    const section = document.getElementById(`projectImagesSection-${projectID}`);
    section.classList.remove('visible');
    setTimeout(() => {
        section.style.display = 'none';
    }, 500); // matches the CSS transition duration
}

//work experience section

document.addEventListener("DOMContentLoaded", function() {

    var item = document.querySelectorAll("work-experience-section");
  
      item.style.backgroundImage = `linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0)
      ), url('${imgSrc}')`;
      img.style.display = "none"; // Hide the img element
    });


  function toggleExperience() {
    const section = document.getElementById('workExperienceSection');
    if (section.classList.contains('visible')) {
        section.classList.remove('visible');
        setTimeout(() => {
            section.style.display = 'none';
        }, 500); // matches the CSS transition duration
    } else {
        section.style.display = 'block';
        setTimeout(() => {
            section.classList.add('visible');
        }, 10); // small delay to ensure display: block is applied before opacity transition
    }
}

function fadeOutExperience() {
    const section = document.getElementById('workExperienceSection');
    section.classList.remove('visible');
    setTimeout(() => {
        section.style.display = 'none';
    }, 500); // matches the CSS transition duration
}

//skills section

document.addEventListener("DOMContentLoaded", function() {
    var item = document.querySelectorAll("skills-section");
  
   
      item.style.backgroundImage = `linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0)
      ), url('${imgSrc}')`;
      img.style.display = "none"; // Hide the img element
    });


  function toggleSkills() {
    const section = document.getElementById('skillsSection');
    if (section.classList.contains('visible')) {
        section.classList.remove('visible');
        setTimeout(() => {
            section.style.display = 'none';
        }, 500); // matches the CSS transition duration
    } else {
        section.style.display = 'block';
        setTimeout(() => {
            section.classList.add('visible');
        }, 10); // small delay to ensure display: block is applied before opacity transition
    }
}

function fadeOutSkills() {
    const section = document.getElementById('skillsSection');
    section.classList.remove('visible');
    setTimeout(() => {
        section.style.display = 'none';
    }, 500); // matches the CSS transition duration
}


//contact section

document.addEventListener("DOMContentLoaded", function() {
    var item = document.querySelectorAll("contact-section-image-container");
  
   
      item.style.backgroundImage = `linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0)
      ), url('${imgSrc}')`;
      img.style.display = "none"; // Hide the img element
    });


  function toggleContact() {
    const section = document.getElementById('contactSection');
    if (section.classList.contains('visible')) {
        section.classList.remove('visible');
        setTimeout(() => {
            section.style.display = 'none';
        }, 500); // matches the CSS transition duration
    } else {
        section.style.display = 'block';
        setTimeout(() => {
            section.classList.add('visible');
        }, 10); // small delay to ensure display: block is applied before opacity transition
    }
}

function fadeOutContact() {
    const section = document.getElementById('contactSection');
    section.classList.remove('visible');
    setTimeout(() => {
        section.style.display = 'none';
    }, 500); // matches the CSS transition duration
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    fetch('https://formspree.io/f/mblrgnjb', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            alert('Your message has been sent!');
            document.getElementById('contact-form').reset();
        } else {
            alert('There was a problem with your submission.');
        }
    }).catch(function(error) {
        alert('There was an error: ' + error.message);
    });
});
