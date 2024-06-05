import { Button, Divider, Stack, Typography } from "@mui/material"

const FeedbackSubmit =({onBack})=>{

  return (
    <Stack
    spacing={3}
    >
      <Stack direction={"column"} spacing={1}>
        <Typography variant="h3">
          Thank you!
        </Typography>
        <Divider/>
        <Typography variant="body1">
          Your feedback has been submitted. Thank you for taking the time to share your opinion.
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={2} sx={{pt: 3}}>
          <Button
              variant="outlined" 
              fullWidth
              onClick={()=>onBack()}  
          >Back To Main Page</Button>
        </Stack>
    </Stack>
  )
}

export default FeedbackSubmit;