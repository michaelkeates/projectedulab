import { Box } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box fontSize={11} textAlign="center">
      Project for the fufillment of the requirements of the course IS3D660 at
      the University of South Wales.<br></br>
      <br></br>
      &copy; {new Date().getFullYear()} Michael Keates (23009273)
    </Box>
  );
};

export default Footer;
