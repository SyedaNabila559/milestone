// Get reference to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle for submission
form.addEventListener('submit' , (event:Event) =>{
    event.preventDefault(); //prevent page reload

    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const mobile = (document.getElementById('mobile') as HTMLInputElement).value 
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value


    // Generate the resume content dunamically
    const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Infomation</h3>
    <p><b>Name:</b><span contenteditable = "true">${name}</span></p>
    <p><b>Mobile:</b><span contenteditable = "true">${mobile}</span></p>
    <p><b>Email:</b><span contenteditable = "true">${email}</span></p>  
    
     <h3>Education</h3>
     <P contenteditable = "true">${education}</p>

      <h3>Experience</h3>
     <P contenteditable = "true">${experience}</p>

      <h3>Skills</h3>
     <P contenteditable = "true">${skills}</p>

    `;

    // Display
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML
    }
    else{
        console.error('The resume display element is missing')
    }

});