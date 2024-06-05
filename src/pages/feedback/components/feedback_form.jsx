import { StarFilled } from "@ant-design/icons";
import { Button, Divider, OutlinedInput, Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";

const FeedbackForm = ({category, value, onChange, onSend})=>{

  const [ rating, setRating ] = useState(value?.rating ?? 0);
  const [ comment, setComment ] = useState(value?.comment ?? '');

  const [ enable, setEnable ] = useState(false);

  return (
    <>
      <Stack
        spacing={2}
      >
        <Stack direction={"column"} spacing={1}>
          <Typography variant="h3">
            {category}
          </Typography>
          <Divider/>
          <Typography variant="body1">
            Please evaluate using the stars.
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Rating
            value={rating}
            emptyIcon={<StarFilled style={{margin: 8}}/>}
            icon={<StarFilled style={{margin: 8}}/>}
            onChange={(e)=>{
              setRating(e.target.value)
              setEnable(true)
            }}
            sx={{
              fontSize: {
                xs: "2.4rem",
                md: "2.6rem"
              }
            }}
          />
        </Stack>
        <OutlinedInput
            id="comment"
            type= "text"
            name="comment"
            value={comment}
            maxRows={4}
            minRows={3}
            multiline={true}
            placeholder="Enter comment"
            onChange={(e)=>setComment(e.target.value)}
            fullWidth
        />
        <Stack direction={"row"} spacing={2} sx={{pt: 3}}>
          <Button 
            disabled={!enable} 
            variant="outlined" 
            fullWidth
            onClick={()=>{
              onChange(rating, comment)
            }}  
          >Save and rate more</Button>
          <Button onClick={()=>onSend(rating, comment)} disabled={!enable} variant="contained" fullWidth>Send Feedback</Button>
        </Stack>
      </Stack>
    </>
  ) 
}

export default FeedbackForm;