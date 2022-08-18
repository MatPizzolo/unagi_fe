import { Box, TextField, Typography, Checkbox, Button } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../../commons/Navbar';
import { useForm, Controller } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

const AddEvent = () => {
  const { register, setValue, handleSubmit, control, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  // firstName and lastName will have correct type

  return (
    <>
      <ResponsiveAppBar />
      <Box>
        <Typography variant="h3" justifyContent="center" display="flex">Add a resto</Typography>
        <Box width="60%" mx="auto" mt="1rem">
          <form onSubmit={onSubmit}>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <TextField {...field} />}
          />
          {errors.firstName?.type === 'required' && "First name is required"}
            <TextField placeholder='name' />
            <TextField placeholder='address' />
            <TextField placeholder='description' />
            <TextField placeholder='plates' />
            <Button type="submit">submit</Button>
          </form>
        </Box>
        
      </Box>
    </>
  )
}

export default AddEvent