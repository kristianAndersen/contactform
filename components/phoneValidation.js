
    const phoneValidation = (phoneNumber) => {

        const noWhitespacephoneNumber = phoneNumber.replace(/\s+/g, ''); 

        // Regex for dk phone numbers:
        // - Either 8 digits (local format)
        // - Or starts with +45 and followed by 8 digits (international format)
        const regex = /^(?:\+45)?[ ]?\d{8}$/;
    
        // Test the phone number against the regex
        return regex.test(noWhitespacephoneNumber);
    };
    
    export { phoneValidation };
