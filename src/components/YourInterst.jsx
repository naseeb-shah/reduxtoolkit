import {
  Box,
  Text,
  Input,
  TagLabel,
  Label,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

export const Interest = () => {
    const [isChecked,setIsChecked]=useState(true)
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Box
      w={"35%"}
      borderRadius={20}
      borderColor={"#C1C1C1"}
      borderWidth={1}
      m={"auto"}
      mt={"50"}
      p={3}
      pb={35}
    >
      <Text textAlign={"center"} fontWeight={"500"} fontSize={32} mt={5}>
        Please mark your interests!
      </Text>
      <Text textAlign={"center"} fontSize={16} mt={10}>
        We will keep you notified.
      </Text>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDir={"column"}
      >
        <Text fontWeight={"500"} fontSize={20} mt={10}>
          My saved interests!
        </Text>

        <div>
          <input
            type="checkbox"
            style={{ width: "20px", height: "20px",
        
            backgroundColor: isChecked ? "black" : "transparent",
        
        }}
            checked={isChecked}
            onChange={handleChange}
          />
          <label
            htmlFor="myCheckbox"
            style={{
              backgroundColor: isChecked ? "black" : "transparent",
              padding: "5px",
              borderRadius: "5px",
              color: isChecked ? "white" : "black", // Optional: change text color
            }}
          >
            Checked
          </label>
        </div>
      </Box>
    </Box>
  );
};
