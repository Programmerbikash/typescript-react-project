import React from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const HossainInfo = () => {
  let name: string;
  name = "Hossain Ahmad";

  return (
    <div>
      <Box
        w="100%"
        p={5}
        h="100%"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          textAlign={["center"]}
        >
          {name}
        </Text>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Task Title</Th>
                <Th isNumeric>Total / Average no.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Total Applied Job</Td>
                <Td isNumeric>41</Td>
              </Tr>
              <Tr>
                <Td>Interviewed</Td>
                <Td isNumeric>0</Td>
              </Tr>
              <Tr>
                <Td>Completed Task</Td>
                <Td isNumeric>0</Td>
              </Tr>
              <Tr>
                <Td>Total Rejection</Td>
                <Td isNumeric>0</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default HossainInfo;