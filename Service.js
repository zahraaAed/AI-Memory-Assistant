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
////////////////////////////////////////////////////////////////////////
function toggleCollapse(header) {
    const content = header.nextElementSibling;
  
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = "0 20px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "15px 20px";
    }
  }
  ////////////////////////////////////////////////////////////////////////////
  const dark = document.getElementById('dark');
const body = document.getElementById('body');
dark.addEventListener('click', () => {
  body.classList.toggle('dark'); // Toggles the dark-mode class on the body
});



      // Dynamically load the header using js 
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
    document.addEventListener('DOMContentLoaded', () => {
const switcher = document.getElementById('modeSwitcher');
const currentMode = localStorage.getItem('theme') || 'light';

if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    switcher.textContent = 'Switch to Light Mode';
}

switcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    switcher.textContent = mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    localStorage.setItem('theme', mode);
});
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
// Select the dark mode toggle checkbox
const darkModeToggle = document.getElementById('darkmode-toggle');
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode'); // Apply dark mode
    darkModeToggle.checked = true;  // Update the toggle state
}

// Toggle dark mode on checkbox change
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled'); // Save preference
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled'); // Save preference
    }
});
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
