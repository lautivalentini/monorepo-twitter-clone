import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody } from "@chakra-ui/react";
import { useState } from "react";

import FirstStep from "./FirstStep";
import HeaderModal from "./HeaderModal";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const Register = ({ isOpen, onClose }) => {
    const [steps, setSteps] = useState(1);

    function updateStep(action) {
        if (action === "decrement") {
            return setSteps(steps - 1);
        }
        if (action === "increment") {
            return setSteps(steps + 1);
        }
        if (!isNaN(action)) {
            return setSteps(action);
        }
    }

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} size="xl" onClose={onClose}>
            <ModalOverlay bg="_overlay" />
            <ModalContent
                bg="_black"
                borderRadius={{ base: "0", md: "md" }}
                height={{ base: "100vh", md: "600px" }}
                margin="auto 0"
            >
                <ModalHeader padding="10px">
                    <HeaderModal steps={steps} updateStep={updateStep} />
                </ModalHeader>
                <ModalBody>
                    {steps === 1 && <FirstStep />}
                    {steps === 2 && <SecondStep />}
                    {steps === 3 && <ThirdStep updateStep={updateStep} />}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default Register;
