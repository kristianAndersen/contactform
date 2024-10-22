//change the icon status based on the input status

const iconChange =(inputElement, status)=> {

        const iconSpan = inputElement.parentElement.querySelector('.status-icon');
        iconSpan.classList.remove('show'); 
        setTimeout(() => {
        iconSpan.classList.remove('input-idel', 'input-success', 'input-error');
       

        if (status === 'success') {
            
            iconSpan.classList.add('input-success');
            inputElement.setAttribute('data-valid', 'true');
        } 
        
        if (status === 'error') {
            
            iconSpan.classList.add('input-error');
            inputElement.setAttribute('data-valid', 'false');
        }
        
        if (status === '') {
            iconSpan.classList.add('input-idel');
            inputElement.setAttribute('data-valid', 'false');
            
        }
        iconSpan.classList.add('show');
    }, 50); 
        
}

export { iconChange };
