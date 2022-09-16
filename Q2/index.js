var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateForm() {
    let x = document.forms["LORForm"]["recommenderemail"].value;

    phone = document.getElementById("recommendertelephone").value;
    var phoneno = /^\d{10}$/;
    
    if (x == "") {
      alert("Email is empty, please input a valid email");
      return false;
    }

    else if(x.value.match(validEmailRegex)){
        return true;
    }

    

    if (phone=="")
     {
      alert("Phone number cannot be empty");
    }

    
  if((phone.match(phoneno))){
    return true;
      }
    else
      {
      alert("Enter a valid Phone Number");
      return false;
      }

 
  }

  function toggleDisplay() {
    var display = document.getElementById('display');


    var displaySetting = display.style.display;

    
    var displayButton = document.getElementById('displayButton');

    
    if (displaySetting == 'flex') {
      display.style.display = 'none';
      displayButton.innerHTML = 'Display';
    }
    else {
      display.style.display = 'flex';
      displayButton.innerHTML = 'Hide';
    }

    nam = document.getElementById("recommenderfirstname").value;
    ln = document.getElementById("recommenderlastname").value;
    org = document.getElementById("recommenderorganization").value;
    ph = document.getElementById("recommendertelephone").value;
    email = document.getElementById("recommenderemail").value;
    document.getElementById("firstnamedisplay").innerHTML= nam;
    document.getElementById("lastnamedisplay").innerHTML= ln;
    document.getElementById("organizationdisplay").innerHTML= org;
    document.getElementById("phonedisplay").innerHTML= ph;
    document.getElementById("emaildisplay").innerHTML= email;
  
  }

  
  
  
