// Get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle for submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dunamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Infomation</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Mobile:</b>").concat(mobile, "</p>\n    <p><b>Email:</b>").concat(email, "</p>  \n    \n     <h3>Education</h3>\n     <P>").concat(education, "</p>\n\n      <h3>Experience</h3>\n     <P>").concat(experience, "</p>\n\n      <h3>Skills</h3>\n     <P>").concat(skills, "</p>\n\n    ");
    // Display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
