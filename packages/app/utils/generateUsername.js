import axios from "axios";

const generateUsername = async (name) => {
    const num = (Math.floor(Math.random() * (999 - 1)) + 1).toString().split("");
    const user = name.toLowerCase().replace(/ /g, "").split("");
    const username = num.concat(user);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    for (let i = username.length - 1; i > 0; i--) {
        let indexAl = Math.floor(Math.random() * (i + 1));
        let temp = username[i];

        username[i] = username[indexAl];
        username[indexAl] = temp;
    }
    try {
        const { data } = await axios.get(`${API_URL}/api/user/list?username=${username.join("")}`);

        if (data.total === 0 && !data.users.length) {
            return username.join("");
        } else {
            generateUsername();
        }
    } catch (err) {
        console.log(err);
    }
};

export default generateUsername;
