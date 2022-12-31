import React from 'react';
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/"><Box as='button' m={[1]} p={4} color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)' _hover={{bgGradient: 'linear(to-r, red.500, yellow.500)',}}> Bikash Chandra Dey </Box></Link>
                <Link to="/ayakub"><Box as='button' m={[1]} p={4} color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)' _hover={{bgGradient: 'linear(to-r, red.500, yellow.500)',}}> Md. Ayakub Ali </Box></Link>
                <Link to="/hossain"><Box as='button' m={[1]} p={4} color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)' _hover={{bgGradient: 'linear(to-r, red.500, yellow.500)',}}> Hossain Ahmad </Box></Link>
                <Link to="/shohel"><Box as='button' m={[1]} p={4} color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)' _hover={{bgGradient: 'linear(to-r, red.500, yellow.500)',}}> Md. Habibur Rahman Shohel </Box></Link>
            </nav>
            <h1>Modified</h1>
        </div>
    );
};

export default Navbar;