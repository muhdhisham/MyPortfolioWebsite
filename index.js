var localStorage = ('localStorage' in window);

function saveData(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
    }
}

function localData(key) {
    if (localStorage) {
        if (key in localStorage) {
            return localStorage.getItem(key);
        }

    }
}

function changeTheme(color1, color2, color3) {
    $(":root").css("--clr-light", color1);

    $(":root").css("--clr-dark", color2);

    $(":root").css("--clr-accent", color3);

    saveData("light", color1);
    saveData("dark", color2);
    saveData("accent", color3);

}

function onLoad() {
    localData("light") && document.documentElement.style.setProperty('--clr-light', localData("light"));
    localData("dark") && $(":root").css("--clr-dark", localData("dark"));
    localData("accent") && $(":root").css("--clr-accent", localData("accent"));
}
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

gsap.registerPlugin(TextPlugin);
const words = ["A Python Developer", "A Web-Developer", "A Cyber Security Enthusiast", "A Technophile", "An IOT Developer"]

let cursor = gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1 })
let masterTl = gsap.timeline({ repeat: -1 })

words.forEach(word => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 })
    tl.to('#text', { duration: 1.5, text: word })
    masterTl.add(tl)
})

var $input;

function onInputFocus(event) {
  var $target = $(event.target);
  var $parent = $target.parent();
  $parent.addClass('input--filled');
};

function onInputBlur(event) {
  var $target = $(event.target);
  var $parent = $target.parent();

  if (event.target.value.trim() === '') {
    $parent.removeClass('input--filled');
  }
};

$(document).ready(function() {
  $input = $('.input__field');
  
  // in case there is any value already
  $input.each(function(){
    if ($input.val().trim() !== '') {
      var $parent = $input.parent();
      $parent.addClass('input--filled');
    }
  });
  
  $input.on('focus', onInputFocus);
  $input.on('blur', onInputBlur);
});