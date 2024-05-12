import { Container, VStack, Heading, Input, Button, Table, Thead, Tbody, Tr, Th, Td, Box, FormControl, FormLabel, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaSearch, FaEdit, FaSave, FaUndo } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    balance: "$120.00",
  });

  const handleSearch = () => {
    // Placeholder for search functionality
    console.log("Searching for:", searchQuery);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Placeholder for save functionality
    console.log("Data saved:", customerData);
    toggleEditMode();
  };

  const handleInputChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6}>
        <Heading>CRM Dashboard</Heading>
        <InputGroup size="md">
          <Input pr="4.5rem" type="text" placeholder="Search customers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <InputRightElement width="4.5rem">
            <IconButton icon={<FaSearch />} aria-label="Search customers" onClick={handleSearch} />
          </InputRightElement>
        </InputGroup>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Balance</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{editMode ? <Input name="name" value={customerData.name} onChange={handleInputChange} /> : customerData.name}</Td>
              <Td>{editMode ? <Input name="email" value={customerData.email} onChange={handleInputChange} /> : customerData.email}</Td>
              <Td>{editMode ? <Input name="balance" value={customerData.balance} onChange={handleInputChange} /> : customerData.balance}</Td>
              <Td>
                {editMode ? (
                  <Box>
                    <IconButton icon={<FaSave />} aria-label="Save" onClick={handleSave} mr={2} />
                    <IconButton icon={<FaUndo />} aria-label="Cancel" onClick={toggleEditMode} />
                  </Box>
                ) : (
                  <IconButton icon={<FaEdit />} aria-label="Edit" onClick={toggleEditMode} />
                )}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
