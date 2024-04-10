const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const expectedLength = parseInt(validationInput.dataset.length);
  const actualLength = validationInput.value.trim().length;

  if (actualLength === expectedLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
