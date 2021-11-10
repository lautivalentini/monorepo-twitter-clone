import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import AuthContext from "./AuthContext";

const initialState = {
    data: {
        name: "",
        phone: "",
        password: "",
        month: "",
        day: "",
        year: "",
    },
    user: {
        name: "",
        phone: "",
        date: "",
        username: "",
        img: "",
        token: "",
    },
};

const AuthState = (props) => {
    const [state, setState] = useState(initialState);
    const [validationFields, setValidationFields] = useState({ phone: false, password: false });
    const router = useRouter();

    const addUserdata = (payload) => {
        setState({
            ...state,
            user: payload,
        });
    };

    const validateFields = (payload) => {
        switch (payload) {
            case "password": {
                return setValidationFields({
                    ...validationFields,
                    password: true,
                });
            }
            case "phone": {
                return setValidationFields({
                    ...validationFields,
                    phone: true,
                });
            }
            default:
                return validateFields;
        }
    };

    const addRegisterData = (payload, value) => {
        switch (payload) {
            case "name": {
                return setState({
                    ...state,
                    data: { ...state.data, name: value },
                });
            }

            case "phone": {
                return setState({
                    ...state,
                    data: { ...state.data, phone: value },
                });
            }

            case "password": {
                return setState({
                    ...state,
                    data: { ...state.data, password: value },
                });
            }

            case "month": {
                return setState({
                    ...state,
                    data: { ...state.data, month: value },
                });
            }

            case "day": {
                return setState({
                    ...state,
                    data: { ...state.data, day: value },
                });
            }

            case "year": {
                return setState({
                    ...state,
                    data: { ...state.data, year: value },
                });
            }

            default:
                return state;
        }
    };

    async function validateUserToken() {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        try {
            const config = {
                headers: {
                    token: state.user.token || sessionStorage.getItem("token") || "",
                },
            };
            const validateUser = await axios.get(`${API_URL}/api/user/auth/validate`, config);

            addUserdata({
                ...validateUser.data.user,
                token: validateUser.data.token,
            });
            router.push("/home");
        } catch (err) {
            console.log(err);
            router.push("/");
        }
    }

    useEffect(() => {
        if (router.pathname !== "/" && router.pathname !== "/login") {
            validateUserToken();
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                registerData: state.data,
                user: state.user,
                validationFields,
                addRegisterData,
                addUserdata,
                validateFields,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
