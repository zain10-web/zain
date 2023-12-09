AOS.init();

$(document).ready(function () {
    const titles = ["Web Development", "Digital Marketing", "Software Development"];
    const descriptions = [
        "Join us in the exciting world of programming and turn your ideas into reality. Unlock the world of endless possibilities - learn to code and shape the digital future with us.",
        "Explore the world of digital marketing and boost your online presence. Join our team to create successful marketing strategies and reach a global audience.",
        "Embark on a journey in software development. Build innovative solutions, learn cutting-edge technologies, and shape the future of technology with us."
    ];
    const images = ["../assets/Mobile development.gif", "../assets/Creative team.gif", "../assets/Developer activity.gif"];


    let currentIndex = 0;

    function updateCard() {
        // Text flip animation
        $("#card").attr("data-aos", "flip-right");
        AOS.refresh();

        setTimeout(function () {
            // Update text content
            $("#title").text(titles[currentIndex]);
            $("#description").text(descriptions[currentIndex]);

            // Image flip animation
            $("#hero-image").attr("data-aos", "flip-up");
            AOS.refresh();

            // Update image source
            $("#hero-image").attr("src", images[currentIndex]);

            currentIndex = (currentIndex + 1) % titles.length;
        }, 500); // Adjust the delay based on your animation duration
    }

    // Initial update
    updateCard();

    // Set interval for automatic update every 3 seconds
    const intervalId = setInterval(updateCard, 10000);

    // Function for the previous card
    window.prevCard = function () {
        currentIndex = (currentIndex - 1 + titles.length) % titles.length;
        updateCard();
        // Clear the interval to prevent automatic updates while manually navigating
        clearInterval(intervalId);
    };

    // Function for the next card
    window.nextCard = function () {
        currentIndex = (currentIndex + 1) % titles.length;
        updateCard();
        // Clear the interval to prevent automatic updates while manually navigating
        clearInterval(intervalId);
    };
});

// 
$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
  function startCounting(targetId, endValue, step, interval) {
    var numberContainer = document.getElementById(targetId);
    var currentNumber = 0;
    function updateNumber() {
        if (currentNumber <= endValue) {
            numberContainer.innerHTML = `${currentNumber}+`;
            currentNumber += step;
        }
    } 
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setInterval(updateNumber, interval);
          observer.disconnect();
        }
      });
    });
  
    observer.observe(numberContainer);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    startCounting('number-1', 403, 4, 25);
    startCounting('number-2', 203, 4, 25);
    startCounting('number-3', 203, 4, 25);
    startCounting('number-4', 8, 1, 100);
  });

  const openTab = (tabName) => {
    const tabs = ["design", "shopify", "e-store", "branding", "animation", "seo"];

    tabs.forEach((tab) => {
      const tabButton = document.getElementById(`${tab}-btn`);
      if (tabButton) {
        tabButton.classList.remove("active");
      }
      const clickedTabButton = document.getElementById(`${tabName}-btn`);
      if (clickedTabButton) {
        clickedTabButton.classList.add("active");
      } else {
        clickedTabButton.classList.remove("active");

      }
      const element = document.getElementById(tab);
      if (element) {
        if (tab === tabName) {
          element.style.display = "flex";
          element.classList.add("flip-right");
        } else {
          element.style.display = "none";
          element.classList.remove("flip-right");
        }
      }
    });
  };
