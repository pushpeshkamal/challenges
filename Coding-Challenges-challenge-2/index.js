const emailInput = document.querySelector('#email');

const emailRegex = /^([A-Za-z\d\.-}+_]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,8})(\.[A-Za-z]{2,8})?$/;


emailInput.addEventListener('keyup', function(event) {
  console.log(event.target.value);

    if (emailRegex.test(event.target.value)) {
      console.log('valid');
      emailInput.parentElement.classList.add('valid');
    } else {
        console.log('invalid');
      emailInput.parentElement.classList.remove('valid');
    }

});
