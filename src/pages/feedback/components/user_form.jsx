import { StarFilled } from "@ant-design/icons";
import { Button, Divider, InputLabel, OutlinedInput, Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = ({onSend, onCancel})=>{

  return (
    <>
      <Stack
        spacing={2}
      >
        <Stack direction={"column"} spacing={1}>
        <Typography variant="h5" fontWeight={500}>
            {`* 3 Categories Reviewed`}
        </Typography>
        <Typography variant="body1" color={"grey"}>
            Please enter your contact information if you want us to get back to you.
        </Typography>
        </Stack>
        <Stack spacing={1}>
          <InputLabel htmlFor="email" sx={{fontSize: "12px"}}>Email Address</InputLabel>
          <OutlinedInput
              id="email"
              type= "text"
              name="email"
              placeholder="Enter your email address"
              fullWidth
          />
        </Stack>
        <Stack spacing={1}>
          <InputLabel htmlFor="phone" sx={{fontSize: "12px"}}>Phone Number</InputLabel>
          <OutlinedInput
              id="phone"
              type= "text"
              name="phone"
              placeholder="Enter your phone number"
              fullWidth
          />
        </Stack>
        <Stack direction={"row"} spacing={2} sx={{pt: 3}}>
        <Button
            variant="outlined" 
            fullWidth
            onClick={()=>onCancel()}  
        >Cancel</Button>
        <Button 
            onClick={()=>onSend()} 
            variant="contained" 
            fullWidth
        >Send</Button>
        </Stack>
      </Stack>
    </>
  ) 
}

export default UserForm;