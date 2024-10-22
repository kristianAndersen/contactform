const subjectValidate = (subject) => {
  
    const regex = /^[a-zA-Z0-9\s.,!?'-]*$/; 
    return regex.test(subject);
}

export { subjectValidate };