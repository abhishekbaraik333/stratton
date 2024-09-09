

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active"); // Toggle clicked item
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lottiePlayer = document.getElementById("lottie");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lottiePlayer.play();
        } else {
          lottiePlayer.stop();
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(lottiePlayer);
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".statement-2");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  });

  images.forEach((image) => {
    observer.observe(image);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".statement-1");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  });

  images.forEach((image) => {
    observer.observe(image);
  });
});

document.querySelector(".cross-container").addEventListener("click", () => {
  const crossContainer = document.querySelector(".cross-container");
  const slidingDiv = document.querySelector(".sliding-div");

  // Toggle the active class for both elements
  slidingDiv.classList.toggle("active");
  crossContainer.classList.toggle("active");
});

// Add click event listener to the sliding div items
document.querySelector(".sliding-div").addEventListener("click", (event) => {
  if (event.target.closest("li") || event.target.closest("a")) {
    const slidingDiv = document.querySelector(".sliding-div");
    const crossContainer = document.querySelector(".cross-container");

    // Close the sliding div and rotate the cross icon back
    slidingDiv.classList.remove("active");
    crossContainer.classList.remove("active");
  }
});

// script.js
document.getElementById("copyButton").addEventListener("click", function () {
  const email = this.getAttribute("data-email");
  const temporaryInput = document.createElement("input");
  temporaryInput.value = email;
  document.body.appendChild(temporaryInput);
  temporaryInput.select();
  document.execCommand("copy");
  document.body.removeChild(temporaryInput);

  this.textContent = "Copied!";

  // Optionally, reset the button text after a delay
  setTimeout(() => {
    this.textContent = "Copy Email";
  }, 2000);
});


// IntersectionObserver configuration
const observerOptions = {
  root: null, // Default is the viewport
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 10% of the element is visible
};

// IntersectionObserver callback function
const animateElements = (entry) => {
  if (entry.target.classList.contains('bounce-star')) {
    gsap.from(entry.target, {
      rotation: 360,
      y: 100,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('starise')) {
    gsap.from(entry.target, {
      rotation: -30,
      scale: 0.3,
      y: 150,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('logo')) {
    gsap.from(entry.target, {
      rotation: 30,
      scale: 0.3,
      y: 150,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('hero-ul')) {
    gsap.from(entry.target.querySelectorAll('li'), {
      y: -50,
      duration: 1,
    });
  } else if (entry.target.classList.contains('sub-text')) {
    gsap.from(entry.target, {
      y: -50,
      delay: 0.5,
      duration: 1,
    });
  } else if (entry.target.classList.contains('home-btn2')) {
    gsap.from(entry.target, {
      y: 50,
      delay: 0.9,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('home-btn1')) {
    gsap.from(entry.target, {
      y: 50,
      delay: 0.7,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('about')) {
    gsap.from(entry.target, {
      y: -50,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('bar')) {
    gsap.from(entry.target, {
      x: -50,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('service-heading')) {
    gsap.from(entry.target, {
      y: -50,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('bar2')) {
    gsap.from(entry.target, {
      x: -50,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('qoute1')) {
    gsap.from(entry.target, {
      y: -50,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('qoute2')) {
    gsap.from(entry.target, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  } else if (entry.target.classList.contains('seul')) {
    gsap.from(entry.target, {
      y: -50,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('ensemble')) {
    gsap.from(entry.target, {
      y: -50,
      opacity: 0,
      duration: 1,
    });
  } else if (entry.target.classList.contains('flip-div')) {
    gsap.to(entry.target, {
      opacity: 1,
      rotateX: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }
};

// Create the IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateElements(entry);
      observer.unobserve(entry.target); // Optional: stop observing after animation is triggered
    }
  });
}, observerOptions);

// Target all elements for observation
document.querySelectorAll('.bounce-star, .starise, .logo, .hero-ul li, .sub-text, .home-btn2, .home-btn1, .about, .bar, .service-heading, .bar2, .qoute1, .qoute2, .seul, .ensemble, .flip-div').forEach(el => {
  observer.observe(el);
});

