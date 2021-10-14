const User = require("../models/user");

const validatePhone = async (phone = "") => {
    const existingPhone = await User.findOne({ phone });

    if (existingPhone) {
        throw new Error(`The phone ${phone} already exists`);
    }
};

module.exports = { validatePhone };
