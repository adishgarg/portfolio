function openPDFPopup(pdfUrl) {
  // Open the PDF in a pop-up window
  var popupWindow = window.open("", "_blank", "width=400,height=400");
  popupWindow.document.write("<embed width='100%' height='100%' type='application/pdf' src='" + pdfUrl + "' />");

  // Function to center the popup window
  function centerPopup() {
      // Calculate the center position for the popup window
      var centerX = (window.screen.width - popupWindow.outerWidth) / 2;
      var centerY = (window.screen.height - popupWindow.outerHeight) / 2;
      // Move the popup window to the center position
      popupWindow.moveTo(centerX, centerY);
  }


}






let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href="#'+id+'"]').classList.add('active');
            });
            sec.classList.add('show-animate');
        }

        else{
          sec.classList.remove('show-animate');
        }

    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    let footer = documnet.querySelector("footer");
    footer.classList.toggle("show-animate", this.innerHeight + this.screenY >= document.scrollingElement.scrollHeight);
}


const form = document.querySelector(".contact form"); 
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone"); 
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
const sendToUserCheckbox = document.getElementById("sendToUser");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${mess.value}`;
  
  console.log("Checkbox checked:", sendToUserCheckbox.checked);
  console.log("Email value:", email.value);

  let recipients = ["jaiaditya005@gmail.com"];
  if (sendToUserCheckbox.checked) {
    recipients.push(email.value);
    console.log("Recipients with user's email:", recipients);
  }
  
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jaiaditya005@gmail.com",
    Password: "5AE6E3F64DA8733FC6E93C5301F73CF7283F",
    To: recipients.join(", "),
    From: "jaiaditya005@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message === "OK" || message === "Ok") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
        // Reset the form
        form.reset();
      } else {
        console.log("Email not sent:", message);
      }
    }
  ).catch(error => {
    console.error("Error occurred while sending email:", error); 
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});


















