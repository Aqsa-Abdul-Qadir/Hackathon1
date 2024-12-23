// Select the toggle buttons and corresponding sections
const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;


const skillsSection = document.querySelector(".skills") as HTMLElement;


// Function to toggle visibility of the Skills section
const toggleSkillsVisibility = () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills Section";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills Section";
    }
};


// Attach the event listeners to the toggle buttons
toggleSkillsButton.addEventListener("click", toggleSkillsVisibility);

