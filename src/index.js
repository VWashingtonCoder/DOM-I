const { query } = require("express");

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//My Code
//define header
const header = document.querySelector("header");
//add class to nav a links
const links = header.querySelectorAll("nav a");
links.className = "italic";
//define each link
const linkOne = links.querySelector(".italic:nth-of-type(1)");
const linkTwo = linkOne.nextElementSibling;
const linkThree = linkTwo.nextElementSibling;
const linkFour = linkThree.nextElementSibling;
const linkFive = linkFour.nextElementSibling;
const linkSix = linkFive.nextElementSibling;
//add text to each link
linkOne.textContent = siteContent["nav"]["nav-item-1"];
linkTwo.textContent = siteContent["nav"]["nav-item-2"];
linkThree.textContent = siteContent["nav"]["nav-item-3"];
linkFour.textContent = siteContent["nav"]["nav-item-4"];
linkFive.textContent = siteContent["nav"]["nav-item-5"];
linkSix.textContent = siteContent["nav"]["nav-item-6"];
//add src to logo img
const headLogo = header.querySelector('#logo-img');
headLogo.src = siteContent["images"]["logo-img"]

//define ctaSection
const ctaSection = document.querySelector(".cta");
const ctaTitle = ctaSection.querySelector("h1");
const ctaButton = ctaSection.querySelector("button");
const ctaImg = ctaSection.querySelector("#cta-img")
//add missing info to ctaSection
ctaTitle.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["images"]["cta-img"];

//define mainContent section
const mainContent = document.querySelector(".main-content");
//feature div
const featuresText = mainContent.querySelector(".text-content:nth-of-type(1)")
const featSubtitle = featuresText.querySelector("h4");
const featContent = featuresText.querySelector("p");
featSubtitle.textContent = siteContent["main-content"]["features-h4"];
featContent.textContent = siteContent["main-content"]["features-content"];
//about div
const aboutText = mainContent.querySelector(".text-content:nth-of-type(2)");
const aboutSubtitle = aboutText.querySelector("h4");
const aboutContent = aboutText.querySelector("p");
aboutSubtitle.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent = siteContent["main-content"]["about-content"];
//mainContent img
const middleImg = mainContent.querySelector("#middle-img");
middleImg.src = siteContent["images"]["accent-img"];
//services div
const serviceText = mainContent.querySelector(".text-content:nth-of-type(3)");
const serviceSubtitle = serviceText.querySelector("h4");
const serviceContent = serviceText.querySelector("p");
serviceSubtitle.textContent = siteContent["main-content"]["services-h4"];
serviceContent.textContent = siteContent["main-content"]["services-content"];
//product div
const productText = mainContent.querySelector(".text-content:nth-of-type(4)");
const productSubtitle = productText.querySelector("h4");
const productContent = productText.querySelector("p");
productSubtitle.textContent = siteContent["main-content"]["product-h4"];
productContent.textContent = siteContent["main-content"]["product-content"];
//vision div
const visionText = mainContent.querySelector(".text-content:nth-of-type(5)");
const visionSubtitle = visionText.querySelector("h4");
const visionContent = visionText.querySelector("p");
visionSubtitle.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];
//contact section
const contactSection = document.querySelector("#contact");
const contactSubtitle = contactSection.querySelector('h4');
const address = contactSection.querySelector("p:nth-of-type(1)")
const phone = contactSection.querySelector("p:nth-of-type(2)");
const email = contactSection.querySelector("p:nth-of-type(3)")
contactSubtitle.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];
//footer
const footer = document.querySelector("footer");
const footLink = footer.querySelector("a");
footLink.className = "bold";
footLink.textContent = siteContent["footer"]["copyright"];