import React, { useState, useRef } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Text
} from '@chakra-ui/react';

const PhoneVerification = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleInput = (index, event) => {
    const value = event.target.value;
    if (value.match(/^[0-9]*$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value.length === 1 && index < 5) {
        inputRefs.current[index + 1].focus();
      } else if (value.length === 0 && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div>
      <Button onClick={() => setShowPopup(true)}>Verify Phone</Button>
      <Modal isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Phone Verification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box Box style={{ display: "flex" }}>
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => handleInput(index, event)}
                  style={{ margin: "0 4px", textAlign: "center" }}
                />
              ))}
            </Box>
            <Box m="auto" mt="20px" mb="20px">
              <Text fontWeight="500" align={"center"} mb="20px">Enter the otp received on 82878-2XXXX</Text>
              <Button ml="100px" bgColor="green" color="white">Verify Phone Number </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PhoneVerification;
