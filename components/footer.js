import { Box } from '@chakra-ui/react'
//import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="11px" paddingTop="25px">
      Project for the fufillment of the requirements of the course IS3D660 at
      the University of South Wales.<br></br>
      <br></br>
      &copy; {new Date().getFullYear()} Michael Keates (23009273)
    </Box>
  )
}

export default Footer
