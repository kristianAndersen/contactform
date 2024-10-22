import { nameValidation } from './namevalidation';
import { phoneValidation } from './phoneValidation';
import { emailValidation } from './emailValidation';
import { subjectValidate } from './subjectValidate';
import { iconChange } from './iconsChange';
import { inputIsValid } from './inputIsValid';
const inputListeners = () => {

    const sendButton = document.querySelector('.send-button');

    const checkInputs = (e) => {

        // Select all elements with class 'inputelement'
        const inputElements = document.querySelectorAll('.inputelement');

        // Function to check if an element is valid
        function isElementValid(element) {
            const validAttribute = element.getAttribute('data-valid');

            // Special check for textareas
            if (element.tagName.toLowerCase() === 'textarea') {
                return validAttribute === 'true' && element.value.trim() !== '';
            }

            // For other inputs, just check the data-valid attribute
            return validAttribute === 'true';
        }

        // Convert NodeList to Array and check each element
        const inputStatuses = Array.from(inputElements).map(isElementValid);

        // Check if all inputs are valid
        const allValid = inputStatuses.every(status => status === true);

        if (allValid) {
            sendButton.classList.add('send-button-enabled');
        } else {
            const invalidCount = inputStatuses.filter(status => status === false).length;
            sendButton.classList.remove('send-button-enabled');
        }

    }
    //Validate the inputs
    const validation = (isItvalid) => {
        switch (isItvalid.id) {
            case 'flname':
                return nameValidation(isItvalid.value);

            case 'email':
                return emailValidation(isItvalid.value);

            case 'phone':
                return phoneValidation(isItvalid.value);

            case 'subject':
                return subjectValidate(isItvalid.value);

        }
    }

    document.querySelectorAll('input').forEach(input => {

        const onInput_change = (e) => {
            const inputValid = validation(e.target);
            if (inputValid.value !== "") {
                if (inputValid) {
                    //input is valid change to success icon
                    iconChange(e.target, 'success');
                } else {
                    //input is not valid change to error icon
                    iconChange(e.target, 'error');
                }
            } else {
                //input is empty change to idel icon
                iconChange(e.target, '');
            }
            checkInputs()
        }

        input.addEventListener("input", onInput_change);

    })

    document.querySelectorAll('textarea').forEach(textarea => {

        const txtInput_change = (e) => {

            let text = e.target.value;

            const minLength = 10;
            const maxLength = 600;

            // Function to sanitize input
            const sanitizeInput = (input) => {
                // Remove HTML tags
                let sanitized = input.replace(/<[^>]*>/g, '');

                // Encode special characters
                sanitized = sanitized
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#x27;')
                    .replace(/\//g, '&#x2F;');

                return sanitized;
            }

            const regex = /^[a-zA-Z0-9\s.,!?'-]*$/;

            // Sanitize and validate the input
            text = sanitizeInput(text);

            // Remove any characters that don't match the regex
            text = text.split('').filter(char => regex.test(char)).join('');

            // Trim and enforce length limits
            text = text.slice(0, maxLength);

            // Update the textarea value
            textarea.value = text;



            // Optional: Check for invalid characters

            if (typeof text === "string" && text.length != 0) {
                if (regex.test(text)) {
                    //input is valid change to success icon
                    iconChange(e.target, 'success');
                } else {
                    //input is not valid change to error icon
                    iconChange(e.target, 'error');
                }
            } else {
                //input is empty change to idel icon
                iconChange(e.target, '');
            }

            checkInputs()

        }
        textarea.addEventListener("input", txtInput_change);

    });


    /*
    // Add event listener to input field
    
//inputIsValid();

document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', (e) => {
      
        let text = textarea.value;
        
        const minLength = 10;
        const maxLength = 600;

        // Function to sanitize input
        const sanitizeInput=(input)=> {
            // Remove HTML tags
            let sanitized = input.replace(/<[^>]*>/g, '');
            
            // Encode special characters
            sanitized = sanitized
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#x27;')
                .replace(/\//g, '&#x2F;');
            
            return sanitized;
        }

        const regex = /^[a-zA-Z0-9\s.,!?'-]*$/; 

        // Sanitize and validate the input
        text = sanitizeInput(text);
                
        // Remove any characters that don't match the regex
        text = text.split('').filter(char => regex.test(char)).join('');

        // Trim and enforce length limits
        text = text.slice(0, maxLength);

        // Update the textarea value
        textarea.value = text;
        
        inputIsValid();

        // Optional: Check for invalid characters
        if (!regex.test(text)) {
            iconChange(e.target, 'error');
            return false;
        }

        if(regex.test(text)){

            iconChange(e.target, 'success');
        }
        if(text==''){
            iconChange(e.target, '');
        }

        
     
     
            
                   
       
    });

});
*/
}

export { inputListeners };