// get refrences to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// HANDLE FORM SUBMISSSION
form.addEventListener('submit', (event: Event) =>{
    event.preventDefault(); // prevent page reload


// collect input values
const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone= (document.getElementById('phone') as HTMLInputElement).value
const education= (document.getElementById('education') as HTMLInputElement).value
const experience = (document.getElementById('experience') as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value

// genetate the resume content dynamically
const resumeHTML = `
<h2><b> Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b><span contenteditable="true">Name:</b> ${name}</span></p>
<p><b><span contenteditable="true">Email:</b> ${email}</span></p>
<p><b><span contenteditable="true">Phone:</b> ${phone}</span></p> 

<h3> Education </h3>
<p contenteditable="true"> ${education} </p>

<h3> Experience </h3>
<p contenteditable="true"> ${experience} </p>

<h3> Skills </h3>
<p contenteditable="true"> ${skills} </p>

`;

// Display the generated resume 

if (resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else {
    console.error(`The resume display element is missing.`);
}

})