document.getElementById('generateBtn').addEventListener('click', function() {
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
  
    if (!name || !email || !phone || !education || !experience || !skills) {
      alert("Please fill in all the fields.");
      return;
    }
 
    const resumeHtml = `
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h4>Education</h4>
      <p>${education}</p>
      <h4>Experience</h4>
      <p>${experience}</p>
      <h4>Skills</h4>
      <p>${skills}</p>
    `;
  
    document.getElementById('generatedResume').innerHTML = resumeHtml;
  });
  