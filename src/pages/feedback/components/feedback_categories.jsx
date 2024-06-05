import { ArrowRightOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Divider, ListItem, ListItemIcon, ListItemText, Rating, Stack, Typography } from "@mui/material";

const FeedbackCategories = ({categories, values, onClick})=>{

  return (
    <Stack direction={"column"} spacing={2}>
        <Stack direction={"column"} spacing={1}>
          <Typography variant="h3">
            Leave your feedback
          </Typography>
          <Divider/>
          <Typography variant="body1">
            Select category to review
          </Typography>
        </Stack>

        <Stack direction={"column"} spacing={2}>

          {
            categories.map((c, idx)=>{
              return (
                <ListItem 
                  key={`${idx}`}
                  onClick={()=>{
                    onClick(c)
                  }}
                  sx={{
                    background: "#efefefaa", 
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  <ListItemText>
                    <Typography variant="h6" fontSize={15}>{c}</Typography>
                  </ListItemText>
                  <Rating 
                    value={values[c]?.rating ?? 0} 
                    readOnly
                    sx={{ direction: 'rtl', mx: 1}}
                    icon={<StarFilled style={{margin: 2, fontSize: 18}}/>}
                    emptyIcon={<StarOutlined fontSize="inherit" style={{ opacity: 0 }} />}
                  />
                  <ListItemIcon>
                    <ArrowRightOutlined/>
                  </ListItemIcon>
                </ListItem>
              )
            })
          }

        </Stack>

      </Stack>
  ) 
}

export default FeedbackCategories;