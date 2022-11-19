const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionheight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionheight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
    }
  });
}

window.addEventListener('scroll', scrollActive);


// image input script

let input = document.getElementById('inputTag');
let imageName = document.getElementById("imageName");

input.addEventListener("change", ()=>{
  let inputImage = document.querySelector("input[type=file]").files[0];
  imageName.innerText = inputImage.name;
})