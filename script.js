// Select the toggle buttons and corresponding sections
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.querySelector(".skills");
// Function to toggle visibility of the Skills section
var toggleSkillsVisibility = function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills Section";
    }
    else {
        skillsSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills Section";
    }
};
// Attach the event listeners to the toggle buttons
toggleSkillsButton.addEventListener("click", toggleSkillsVisibility);
