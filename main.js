var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm-password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message1').style.color = 'green';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message1').style.color = 'red';
    }
  }