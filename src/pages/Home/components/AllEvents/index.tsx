import React from 'react';
import axios from 'axios';
import { useAppSelector } from "../../../../store/store";
import { Box, Typography, Grid } from '@mui/material';
import RestoCard from '../../../../commons/RestoCard';


const AllEvents = () => {
  const { restos } = useAppSelector((state) => state.restos);
  console.log(restos)

  return (
    <Box pt={4} >
      <Typography variant="h3" display="flex" justifyContent="center">The best in your area</Typography>
      <Box>
        <Grid container spacing={2} mt={4}>
          {/* map of top restos */}
          <Grid item xs={6} sm={4}>
            <RestoCard title="Kansas" description="Tremendo kansas"/>
          </Grid>
          
        </Grid>
      </Box>
    </Box>
  )
}

export default AllEvents