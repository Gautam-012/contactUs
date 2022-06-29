
function alert(){
  swal({
    title: "Mail send successfully!",
    text: "We will reply you very soon!",
    icon: "success",
    button: "Continue Browsing!",
  });
}

function sendEmail(){

      var body = "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Phone no: " + document.getElementById("phone").value
      + "<br> Message: " + document.getElementById("message").value

      Email.send({
        SecureToken : "1458270a-334b-4544-9b59-25a48a36186a",
        To : 'JohnDoe@gmail.com',
        From : "JohnDoe@gmail.com",
        Subject : "New message from Suvidha Foundation",
        Body : body
    }).then(
      message => {
        if (message == "sent successfully") {
          alert();
        }
        else {
          alert("Error")
        }
    }
    );
}
  // Pass : 22580119C378FA3BA0B4FDF721F6ACA3D982 
  // Token : 1458270a-334b-4544-9b59-25a48a36186a

