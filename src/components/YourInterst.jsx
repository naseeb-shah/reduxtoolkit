import {
  Box,
  Text,
  Input,
  TagLabel,
  Label,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getData } from "../utilis/api";
import { Spinner } from '@chakra-ui/react'

export const Interest = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [loading,setLoding]=useState(false)

  useEffect(() => {
    fetchData(page);
  }, [page]); // Fetch data whenever page changes

  const fetchData = (pageNumber) => {
    setLoding(true)
    getData(`/categories?page=${pageNumber}&limit=6`).then((e) => {
      setList(e.data);
      setPage(e.page);
      setTotal(e.totalPages);
    });
    setLoding(false)
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= total) {
      setPage(pageNumber);
    }
  };
  const MAX_PAGES_TO_SHOW = 4; 

  
  const getPageRange = () => {
    let startPage = Math.max(1, page - Math.floor(MAX_PAGES_TO_SHOW / 2));
    let endPage = Math.min(startPage + MAX_PAGES_TO_SHOW - 1, total);
    if (endPage - startPage + 1 < MAX_PAGES_TO_SHOW) {
      startPage = Math.max(1, endPage - MAX_PAGES_TO_SHOW + 1);
    }
    return { startPage, endPage };
  };

  const { startPage, endPage } = getPageRange();
console.log(loading)
  return (
    <Box
      w={"30%"}
      borderRadius={20}
      borderColor={"#C1C1C1"}
      borderWidth={1}
      m={"auto"}
      mt={"50"}
      p={3}
      pb={35}
    >
      <Text textAlign={"center"} fontWeight={"500"} fontSize={25}>
        Please mark your interests!
      </Text>
      <Text textAlign={"center"} fontSize={14} mt={10}>
        We will keep you notified.
      </Text>
      <Text fontWeight={"500"} fontSize={20} mt={10}>
          My saved interests!
        </Text>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDir={"column"}
        ml={6}
      >
       
      {loading&& <Spinner size='xl' />}

<Box display={'flex'} flexDir={'column'}>
        {list.map((e) => (
          <CheckBoxes key={e.name} value={e.name} />
        ))}

<Box display="flex" justifyContent="center" mt={5}>
        {/* Left arrow button */}
        <Button
          onClick={() => handlePageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          mr={2}
        >
          {"<"}
        </Button>

        {/* Page number buttons */}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <Button
            key={startPage + i}
            onClick={() => handlePageChange(startPage + i)}
            variant={page === startPage + i ? "solid" : "outline"}
            colorScheme="teal"
            mr={2}
          >
            {startPage + i}
          </Button>
        ))}

        {/* Right arrow button */}
        <Button
          onClick={() => handlePageChange(Math.min(total, page + 1))}
          disabled={page === total}
          ml={2}
        >
          {">"}
        </Button>
      </Box>
      </Box>
      </Box>
    </Box>
  );
};

const CheckBoxes = ({ value }) => {
  const [check, setIsChecked] = useState(false);
  return (
    <Checkbox
      checked={check}
      onChange={() => setIsChecked((pre) => !pre)}
      mr={2}
      mt={2}
      mb={2}
      fontWeight={"400"}
    >
      {value}
    </Checkbox>
  );
};
