const subjectValidation = (subjectValue) => {
    // Allow letters, spaces, æøå (both lowercase and uppercase)
    const regex = /^[a-zA-ZæøåÆØÅ\s]+$/;
    return regex.test(subjectValue);
};

export { subjectValidation };