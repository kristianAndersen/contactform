const inputIsValid = () => {    
    const sendButton = document.querySelector('.send-button');
    let trueAry = [];
    let textValue="";
    document.querySelectorAll('input').forEach(input => {
        const validInput = input.getAttribute('data-valid');
        trueAry.push(validInput);
    });


    document.querySelectorAll('textarea').forEach(textarea => {
        const validText = textarea.getAttribute('data-valid');
        textValue = textarea.value;
        trueAry.push(validText);
     
    }); 

    //filter null values
    let isNull = value => value == null;
    let filteredArray = trueAry.filter(isNull);

    //check if all values are the same in the array
    const allEqual = arr => arr.every(val => val === arr[0]);
    let result = allEqual(trueAry) 

    //if no null values and all is true then it is all good
    if (filteredArray.length==0 && result && textValue.length != 0 ) {
    
        sendButton.classList.add('send-button-enabled');
        result=false;
    }


    //disable send button
    if(typeof textValue === "string" && textValue.length === 0){
        result=false;
        trueAry=[];
         sendButton.classList.remove('send-button-enabled');     
    }
    
    


}

export { inputIsValid };




