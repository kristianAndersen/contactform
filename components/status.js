const setStatus = (inputElement, status) => {
    inputElement.classList.remove('input-idel', 'input-success', 'input-error');
    
    if (status === 'success') {
      inputElement.classList.add('input-success');
    } else if (status === 'error') {
      inputElement.classList.add('input-error');
    } else {
      inputElement.classList.add('input-idel');
    }
  }
  
  // Example usage:
  const subjectInput = document.getElementById('subject');
  setStatus(subjectInput, 'success'); // Change to 'error' or 'idle' as needed
  