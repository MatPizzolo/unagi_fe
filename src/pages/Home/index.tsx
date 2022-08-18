import React, {useState} from 'react';
import { Box} from '@mui/material';

import ResponsiveAppBar from '../../commons/Navbar';
import AllEvents from './components/AllEvents';
import bigFoodBanner from "../../assets/images/home-food-banner.jpg";
import SearchBarTextField from './components/SearchBar';
import TextLogoBlack from "../../assets/images/unagi-text-logo-black.png";

const Home = () => {

  return (
    <>
        <ResponsiveAppBar />
        <Box sx={{backgroundColor: "#F5F0EB", height: '100vh', padding: '0 10%'}}>
          <AllEvents />

        </Box>
        {/* <Box sx={{width: "100%", height:"85vh", backgroundImage: `url(${bigFoodBanner})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
          <SearchBarTextField />
          <Box component="img" src={TextLogoBlack} />
        </Box> */}
    </>
  )
}

export default Home