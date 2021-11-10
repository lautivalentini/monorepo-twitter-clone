const validatePassword = (password) => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (regex.test(password)) {
        return true;
    } else {
        return false;
    }
};

export default validatePassword;
