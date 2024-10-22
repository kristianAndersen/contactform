const nameValidation = (nameValue) => {
    // Allow letters, spaces, and hyphens (both lowercase and uppercase, including Danish characters)
    const regex = /^[a-zA-ZæøåÆØÅ\-]+$/;

    // Split the name into parts by spaces
    const nameParts = nameValue.trim().split(/\s+/);

    // Ensure there are at least two parts (first and last name)
    if (nameParts.length < 2) {
        return false;
    }

    // Validate each part of the name (first name, middle name, last name)
    for (let part of nameParts) {
        if (!regex.test(part)) {
            return false;
        }
    }

    return true;
};

export { nameValidation };
