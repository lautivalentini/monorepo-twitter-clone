import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react"
import { useState } from "react"

import FirstStep from "./FirstStep"
import HeaderModal from "./HeaderModal"
import SecondStep from "./SecondStep"
import ThirdStep from "./ThirdStep"

const Register = ({isOpen, onOpen, onClose}) => {
  const [steps, setSteps] = useState(1)

  function updateStep(action) {
    if (action === 'decrement') {
      return setSteps(steps - 1)
    }
    if (action === 'increment') {
      return setSteps(steps + 1)
    }
    if (!isNaN(action)) {
      return setSteps(action)
    }
  }

  return (
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size="xl">
        <ModalOverlay bg="_overlay" />
        <ModalContent 
          bg="_black" 
          height={{base: '100vh', md: '600px'}}
          borderRadius={{base: '0', md: 'md'}}
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
  )
}
export default Register