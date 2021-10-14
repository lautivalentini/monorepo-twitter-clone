import {
    Text,
    Box,
    Stack,
    Input,
    Select,
    UnorderedList,
    ListItem,
    Tooltip,
} from "@chakra-ui/react";
import { useState, useContext } from "react";

import AuthContext from "../../context/AuthContext";
import months from "../../utils/months";
import days from "../../utils/days";
import getYears from "../../utils/getYears";
import validatePhone from "../../utils/validatePhone";
import validatePassword from "../../utils/validatePassword";

const FirstStep = () => {
    const date = new Date();
    const fullYear = date.getFullYear();

    const { addRegisterData, registerData, validateFields } = useContext(AuthContext);
    const [showText, setShowText] = useState({
        name: false,
        phone: false,
        password: false,
        month: false,
        day: false,
        year: false,
    });

    const filteredDays = days.filter((day) => {
        if (registerData.month !== "") {
            const monthSelected = months.find(
                (month) => month.number.toString() === registerData.month,
            );

            return day <= monthSelected.days;
        } else {
            return day;
        }
    });

    return (
        <Stack spacing={7}>
            <Text color="white" fontSize="23px" fontWeight="bold">
                Crea tu cuenta
            </Text>
            <Box position="relative" width="100%">
                <Input
                    borderColor="_gray"
                    color="_white"
                    maxWidth="550px"
                    padding={
                        showText.name || registerData.name !== "" ? "40px 0 20px 10px" : "28px 10px"
                    }
                    placeholder={!showText.name ? "Nombre" : null}
                    sx={{ "::placeholder": { color: "#6e767d" } }}
                    type="text"
                    value={registerData.name}
                    width="100%"
                    onBlur={(e) => {
                        if (e.target.value === "") {
                            setShowText({ ...showText, name: false });
                        }
                    }}
                    onChange={(e) => addRegisterData("name", e.target.value)}
                    onFocus={() => setShowText({ ...showText, name: true })}
                />
                {showText.name || registerData.name !== "" ? (
                    <Text color="_blue" fontSize="12px" left="10px" position="absolute" top="10px">
                        Nombre
                    </Text>
                ) : null}
            </Box>
            <Box position="relative" width="100%">
                <Tooltip
                    hasArrow
                    label={
                        <Text color="_textInput" fontSize="12px" p={2}>
                            Complete the phone number in the following format: +54 155936573
                        </Text>
                    }
                    placement="bottom"
                >
                    <Input
                        borderColor="_gray"
                        color="_white"
                        maxWidth="550px"
                        padding={
                            showText.phone || registerData.phone !== ""
                                ? "40px 0 20px 10px"
                                : "28px 10px"
                        }
                        placeholder={!showText.phone ? "Teléfono" : null}
                        sx={{ "::placeholder": { color: "#6e767d" } }}
                        type="tel"
                        value={registerData.phone}
                        width="100%"
                        onBlur={(e) => {
                            if (e.target.value === "") {
                                setShowText({ ...showText, phone: false });
                            }
                        }}
                        onChange={(e) => {
                            addRegisterData("phone", e.target.value.replace(/ /g, ""));
                            if (validatePhone(e.target.value.replace(/ /g, ""))) {
                                validateFields("phone");
                            }
                        }}
                        onFocus={() => setShowText({ ...showText, phone: true })}
                    />
                </Tooltip>
                {showText.phone || registerData.phone !== "" ? (
                    <Text color="_blue" fontSize="12px" left="10px" position="absolute" top="10px">
                        Télefono
                    </Text>
                ) : null}
            </Box>
            <Box position="relative" width="100%">
                <Tooltip
                    hasArrow
                    label={
                        <UnorderedList color="_textInput" fontSize="12px" p={2}>
                            <ListItem>At least one upper case</ListItem>
                            <ListItem>At least one lower case</ListItem>
                            <ListItem>At least one special character</ListItem>
                            <ListItem>Minimum eight in length</ListItem>
                        </UnorderedList>
                    }
                    placement="bottom"
                >
                    <Input
                        borderColor="_gray"
                        color="_white"
                        maxWidth="550px"
                        padding={
                            showText.password || registerData.password !== ""
                                ? "40px 0 20px 10px"
                                : "28px 10px"
                        }
                        placeholder={!showText.password ? "Contraseña" : null}
                        sx={{ "::placeholder": { color: "#6e767d" } }}
                        type="password"
                        value={registerData.password}
                        width="100%"
                        onBlur={(e) => {
                            if (e.target.value === "") {
                                setShowText({ ...showText, password: false });
                            }
                        }}
                        onChange={(e) => {
                            addRegisterData("password", e.target.value);
                            if (validatePassword(e.target.value)) {
                                validateFields("password");
                            }
                        }}
                        onFocus={() => setShowText({ ...showText, password: true })}
                    />
                </Tooltip>
                {showText.password || registerData.password !== "" ? (
                    <Text color="_blue" fontSize="12px" left="10px" position="absolute" top="10px">
                        Contraseña
                    </Text>
                ) : null}
            </Box>
            <Stack spacing={3}>
                <Stack fontSize="15px" spacing={0}>
                    <Text color="white" fontWeight="bold">
                        Fecha de nacimiento
                    </Text>
                    <Text color="_textInput" textAlign="justify">
                        Esta información no será pública. Confirma tu propia edad, incluso si esta
                        cuenta es para una empresa, una mascota u otra cosa.
                    </Text>
                </Stack>
                <Stack direction={{ base: "column", md: "row" }} spacing={3}>
                    <Box position="relative" width={{ base: "100%", md: "50%" }}>
                        <Select
                            borderColor="_gray"
                            color="white"
                            fontSize="14px"
                            height="55px"
                            style={{ paddingTop: "20px", paddingLeft: "10px" }}
                            value={registerData.month}
                            width="100%"
                            onBlur={() => setShowText({ ...showText, month: false })}
                            onChange={(e) => addRegisterData("month", e.target.value)}
                            onFocus={() => setShowText({ ...showText, month: true })}
                        >
                            <option style={{ backgroundColor: "black" }} value="" />
                            {months.map((month) => (
                                <option
                                    key={month.number}
                                    style={{ backgroundColor: "black" }}
                                    value={month.number}
                                >
                                    {month.name}
                                </option>
                            ))}
                        </Select>
                        <Text
                            color={showText.month ? "_blue" : "_textInput"}
                            fontSize="12px"
                            left="10px"
                            position="absolute"
                            top="10px"
                        >
                            Mes
                        </Text>
                    </Box>
                    <Box position="relative" width={{ base: "100%", md: "25%" }}>
                        <Select
                            borderColor="_gray"
                            color="white"
                            fontSize="14px"
                            height="55px"
                            style={{ paddingTop: "20px", paddingLeft: "10px" }}
                            value={registerData.day}
                            width="100%"
                            onBlur={() => setShowText({ ...showText, day: false })}
                            onChange={(e) => addRegisterData("day", e.target.value)}
                            onFocus={() => setShowText({ ...showText, day: true })}
                        >
                            <option style={{ backgroundColor: "black" }} value="" />
                            {filteredDays.map((day) => (
                                <option key={day} style={{ backgroundColor: "black" }} value={day}>
                                    {day}
                                </option>
                            ))}
                        </Select>
                        <Text
                            color={showText.day ? "_blue" : "_textInput"}
                            fontSize="12px"
                            left="10px"
                            position="absolute"
                            top="10px"
                        >
                            Día
                        </Text>
                    </Box>
                    <Box position="relative" width={{ base: "100%", md: "25%" }}>
                        <Select
                            borderColor="_gray"
                            color="white"
                            fontSize="14px"
                            height="55px"
                            style={{ paddingTop: "20px", paddingLeft: "10px" }}
                            value={registerData.year}
                            width="100%"
                            onBlur={() => setShowText({ ...showText, year: false })}
                            onChange={(e) => addRegisterData("year", e.target.value)}
                            onFocus={() => setShowText({ ...showText, year: true })}
                        >
                            <option style={{ backgroundColor: "black" }} value="" />
                            {getYears(fullYear)
                                .reverse()
                                .map((year) => (
                                    <option
                                        key={year}
                                        style={{ backgroundColor: "black" }}
                                        value={year}
                                    >
                                        {year}
                                    </option>
                                ))}
                        </Select>
                        <Text
                            color={showText.year ? "_blue" : "_textInput"}
                            fontSize="12px"
                            left="10px"
                            position="absolute"
                            top="10px"
                        >
                            Año
                        </Text>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default FirstStep;
