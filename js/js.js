  
const form = document.getElementById('myForm');
const infoBox = document.getElementById('info-box');
const infoName = document.getElementById('info-name');
const infoDate = document.getElementById('info-date');
const infoGender = document.getElementById('info-gender');
const infoMessage = document.getElementById('info-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const date = formData.get('date');
  const gender = formData.get('gender');
  const message = formData.get('message');

  infoName.textContent = `Nama: ${name}`;
  infoDate.textContent = `Tanggal Lahir: ${date}`;
  infoGender.textContent = `Jenis Kelamin: ${gender}`;
  infoMessage.textContent = `Pesan: ${message}`;

  infoBox.style.display = 'block';
});


  // Function to reset the form
  function resetForm() {
    document.getElementById("myForm").reset();
    document.getElementById("info-name").innerHTML = "";
    document.getElementById("info-date").innerHTML = "";
    document.getElementById("info-gender").innerHTML = "";
    document.getElementById("info-message").innerHTML = "";
  }

  // Function to replace the "user" text with the inputted name
  function updateUserName() {
    var userName = document.getElementById("input-name").value;
    document.getElementById("name").innerHTML = userName;
  }

  // Add event listener to the submit button
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    var formData = new FormData(document.getElementById("myForm"));
    var userName = formData.get("name");
    var userDate = formData.get("date");
    var userGender = formData.get("gender");
    var userMessage = formData.get("message");

    document.getElementById("info-name").innerHTML = "Nama: " + userName;
    document.getElementById("info-date").innerHTML = "Tanggal Lahir: " + userDate;
    document.getElementById("info-gender").innerHTML = "Jenis Kelamin: " + userGender;
    document.getElementById("info-message").innerHTML = "Pesan: " + userMessage;

    updateUserName();
  });

  // Add event listener to the reset button
  var resetButton = document.createElement("button");
  resetButton.innerHTML = "Reset";
  resetButton.onclick = resetForm;
  document.body.appendChild(resetButton);


