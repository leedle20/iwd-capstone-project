
/* JavaScript for newsletter*/

document.addEventListener("DOMContentLoaded", () => {
  // Apply styles to the header
  const header = document.querySelector("header");
  if (header) {
      header.style.backgroundColor = "white";
      header.style.padding = "10px";
      header.style.textAlign = "center";
      header.style.borderBottom = "2px solid #e5e5e5";
  }

  // Apply styles to the logo image inside the header
  const logoImg = document.querySelector("header #logo img");
  if (logoImg) {
      logoImg.style.maxWidth = "100px";
      logoImg.style.verticalAlign = "center";
  }

  // Apply styles to the nav and its elements
  const navUl = document.querySelector("nav ul");
  if (navUl) {
      navUl.style.listStyle = "none";
      navUl.style.display = "flex";
      navUl.style.justifyContent = "center";
      navUl.style.marginTop = "10px";
  }

  const navLi = document.querySelectorAll("nav ul li");
  navLi.forEach((li) => {
      li.style.margin = "0 15px";
  });

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
      link.style.textDecoration = "none";
      link.style.color = "#FF3C96";
      link.style.fontWeight = "bold";

      // Add hover effect using JavaScript
      link.addEventListener("mouseover", () => {
          link.style.textDecoration = "underline";
      });

      link.addEventListener("mouseout", () => {
          link.style.textDecoration = "none";
      });
  });

  // Apply styles to the main content
  const main = document.querySelector("main");
  if (main) {
      main.style.margin = "20px auto";
      main.style.maxWidth = "900px";
      main.style.backgroundColor = "#fff";
      main.style.padding = "20px";
      main.style.borderRadius = "5px";
      main.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  }

  // Apply styles to sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
      section.style.marginBottom = "30px";

      const sectionHeading = section.querySelector("h2");
      if (sectionHeading) {
          sectionHeading.style.fontSize = "22px";
          sectionHeading.style.color = "#0073e6";
          sectionHeading.style.borderBottom = "2px solid #FF3C96";
          sectionHeading.style.paddingBottom = "5px";
          sectionHeading.style.marginBottom = "15px";
      }

      const sectionParagraphs = section.querySelectorAll("p");
      sectionParagraphs.forEach((paragraph) => {
          paragraph.style.fontSize = "16px";
          paragraph.style.lineHeight = "1.8";
      });
  });

  // Apply styles to programs inside #programs section
  const programParagraphs = document.querySelectorAll("#programs .program p");
  programParagraphs.forEach((paragraph) => {
      paragraph.style.fontSize = "14px";
  });

  // Apply styles to the #donate section
  const donateSection = document.querySelector("#donate");
  if (donateSection) {
      donateSection.style.textAlign = "center";
      donateSection.style.backgroundColor = "#0073e6";
      donateSection.style.color = "#fff";
      donateSection.style.padding = "20px";
      donateSection.style.borderRadius = "5px";

      const donateHeading = donateSection.querySelector("h2");
      if (donateHeading) {
          donateHeading.style.fontSize = "20px";
          donateHeading.style.marginBottom = "10px";
          donateHeading.style.color = "white";
      }

      const donateParagraphs = donateSection.querySelectorAll("p");
      donateParagraphs.forEach((paragraph) => {
          paragraph.style.fontSize = "16px";
      });
  }
});


/* JavaScript for slideshow*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}