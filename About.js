const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

if (cursorDot && cursorOutline) {
    console.log("Cursor elements found!");

    let posX = 0, posY = 0; // Cursor-dot position
    let outlineX = 0, outlineY = 0; // Cursor-outline position

    window.addEventListener("mousemove", (e) => {
        posX = e.clientX;
        posY = e.clientY;

        // Instantly update cursor-dot position
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
    });

    // Add a trailing effect using requestAnimationFrame
    const animateOutline = () => {
        // Smoothly interpolate outline's position towards the dot
        outlineX += (posX - outlineX) * 0.2; // Adjust speed with the factor (0.2)
        outlineY += (posY - outlineY) * 0.2;

        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
        

        requestAnimationFrame(animateOutline); // Keep animating
    };
    animateOutline(); // Start the animation loop

    // Add click effect without misaligning the dot
    window.addEventListener("mousedown", () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(0.8)";
    });

    window.addEventListener("mouseup", () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
    });
} else {
    console.error("Cursor elements not found. Check your HTML structure.");
}
/////////////////////////////////////////////////////////////////////


const counters = document.querySelectorAll('.count');
const speed = 200; // Adjust speed as needed

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const count = parseInt(counter.innerText, 10);

    // Dynamically calculate increment
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment > target ? target : count + increment;
      setTimeout(updateCount, 80); // Adjust timing for smooth animation
    } else {
      counter.innerText = target; // Ensure final value matches the target
    }
  };

  updateCount();
});
/////////////////////////////////////////////////////////////////////

const dark = document.getElementById('dark');
const body = document.getElementById('body');
dark.addEventListener('click', () => {
  body.classList.toggle('dark'); // Toggles the dark-mode class on the body
});



document.addEventListener('DOMContentLoaded', () => {
    fetch('Header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(data => {

            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('Footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer');
            }
            return response.text();
        })
        .then(data => {

            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});