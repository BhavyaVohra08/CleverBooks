const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
const slides2 = document.querySelectorAll(".owner-pics img");
const slides3 = document.querySelectorAll(".brand-logos img");

console.log(slides2);
console.log(slides3);

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  slides[slideIndex].classList.add("displaySlide");
  slides2[slideIndex].classList.add("displaySlide");
  slides3[slideIndex].classList.add("displaySlide");
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides2.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides3.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");
  slides2[slideIndex].classList.add("displaySlide");
  slides3[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
  showOwnerDetails(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
  showOwnerDetails(slideIndex);
}

onwer = [
  {
    name: "Diksha Pande",
    position: "Co-founder",
    company: "Samosa Party",
    text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    moreBlock1Text1: 'upto 95%',
    moreBlock1Text2: 'Demand Fulfilment',
    moreBlock2Text1: '< 3%',
    moreBlock2Text2: 'Daily Stock-out'
  },
  {
    name: "Kirti Goel",
    position: "Co-founder",
    company: "P-TAL",
    text: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked. While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
    moreBlock1Text1: 'Automated Invoice Reconciliation',
    moreBlock2Text1: 'Channel wise Sales Classification'
  },
];

function showOwnerDetails(index) {
  document.querySelector(".owner-name").innerHTML = onwer[index].name;
  document.querySelector(
    ".owner-position"
  ).innerHTML = `${onwer[index].position}, ${onwer[index].company}`;
  document.querySelector(".p-text-large").innerHTML = onwer[index].text;
  document.querySelector('.block-1-text-1').innerHTML = onwer[index].moreBlock1Text1;
  document.querySelector('.block-2-text-1').innerHTML = onwer[index].moreBlock2Text1;
  if(index === 1) {
    document.querySelector('.read-more').style.display = 'none';
    document.querySelector('.block-1-text-2').innerHTML = '';
    document.querySelector('.block-2-text-2').innerHTML = '';
  } else {
    document.querySelector('.read-more').style.display = 'flex';
    document.querySelector('.block-1-text-2').innerHTML = onwer[index].moreBlock1Text2;
    document.querySelector('.block-2-text-2').innerHTML = onwer[index].moreBlock2Text2;
  }

}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})