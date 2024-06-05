import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button, Divider, ListItem, ListItemText, Rating, Stack, Typography } from "@mui/material";

const ReviewsList = ({reviews, onSend, onBack})=>{
  return (
    <Stack
      spacing={2}
    >
      <Stack direction={"column"} spacing={1}>
        <Typography variant="h3">
          My Reviews
        </Typography>
        <Divider/>
        <Typography variant="body1">
          All your ratings will be shown here. Go back to review more categories.
        </Typography>
      </Stack>

      <Stack direction={"column"} spacing={2}>

          {
            Object.keys(reviews).map((category, idx)=>{
              return (
                <ListItem
                  key={`${idx}`}
                  sx={{
                    background: "#efefefaa", 
                    borderRadius: "4px"
                  }}
                >
                  <ListItemText>
                    <Typography variant="h6" fontSize={15}>{category}</Typography>
                  </ListItemText>
                  <Rating
                    value={reviews[category].rating ?? 0} 
                    readOnly
                    sx={{ direction: 'rtl', mx: 1}}
                    icon={<StarFilled style={{margin: 2, fontSize: 18}}/>}
                    emptyIcon={<StarOutlined fontSize="inherit" style={{ opacity: 0 }} />}
                  />
                </ListItem>
              )
            })
          }

        </Stack>

        <Stack direction={"row"} spacing={2} sx={{pt: 3}}>
          {
            Object.keys(reviews).length>0
            ? <Button onClick={()=>onSend()} variant="contained" fullWidth>Send Feedback</Button>
            : <Button onClick={()=>onBack()} variant="contained" fullWidth>Review Category</Button>
          }
        </Stack>
    </Stack>
  )
}

export default ReviewsList;