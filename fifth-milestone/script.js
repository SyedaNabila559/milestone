// Get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in local storage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        mobile: mobile,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate the resume content directly
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable = \"true\">".concat(name, "</span></p>\n    <p><b>Mobile:</b><span contenteditable = \"true\">").concat(mobile, "</span></p>\n    <p><b>Email:</b><span contenteditable = \"true\">").concat(email, "</span></p>  \n    \n     <h3>Education</h3>\n     <p contenteditable = \"true\">").concat(education, "</p>\n\n      <h3>Experience</h3>\n     <p contenteditable = \"true\">").concat(experience, "</p>\n\n      <h3>Skills</h3>\n     <p contenteditable = \"true\">").concat(skills, "</p>\n\n    ");
    ;
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle pdf download
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// prefill the foam based on the username in url
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
});
// Autofill form if data is found in local storage
var urlParams = new URLSearchParams(window.location.search);
var usernameFromUrl = urlParams.get('username');
if (usernameFromUrl) {
    var savedResumeData = localStorage.getItem(usernameFromUrl);
    if (savedResumeData) {
        var resumeData = JSON.parse(savedResumeData);
        document.getElementById('username').value = usernameFromUrl;
        document.getElementById('name').value = resumeData.name;
        document.getElementById('mobile').value = resumeData.mobile;
        document.getElementById('email').value = resumeData.email;
        document.getElementById('education').value = resumeData.education;
        document.getElementById('experience').value = resumeData.experience;
        document.getElementById('skills').value = resumeData.skills;
    }
}
else {
    console.error('No username provided in URL');
}
