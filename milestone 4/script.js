// get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// HANDLE FORM SUBMISSSION
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // genetate the resume content dynamically
    var resumeHTML = "\n<h2><b> Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b><span contenteditable=\"true\">Name:</b> ".concat(name, "</span></p>\n<p><b><span contenteditable=\"true\">Email:</b> ").concat(email, "</span></p>\n<p><b><span contenteditable=\"true\">Phone:</b> ").concat(phone, "</span></p> \n\n<h3> Education </h3>\n<p contenteditable=\"true\"> ").concat(education, " </p>\n\n<h3> Experience </h3>\n<p contenteditable=\"true\"> ").concat(experience, " </p>\n\n<h3> Skills </h3>\n<p contenteditable=\"true\"> ").concat(skills, " </p>\n\n");
    // Display the generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
