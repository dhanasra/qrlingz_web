import { ArrowRightOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Divider, ListItem, ListItemIcon, ListItemText, Rating, Stack, Typography } from "@mui/material";
import { colorToHex } from "../../../theme/colors";
import { getFeedbackIcons } from "../../../utils/utils";

const FeedbackCategories = ({data, values, onClick})=>{

  const content = data?.design?.content;
  console.log(content)

  const titleColor = colorToHex(content?.titleColor ?? "Color(0xFF262626)")
  const descriptionColor = colorToHex(content?.descColor ?? "Color(0xFF262626)")
  const categoryColor = colorToHex(content?.categoryColor ?? "Color(0xFF262626)")

  // const titleColor = colorToHex(profileDesign?.titleColor ?? data?.design?.color);

  return (
    <Stack 
      direction={"column"} 
      spacing={2}
      sx={{
        height: "100%"
      }}  
    >
        <Stack direction={"column"} spacing={1}>
          <Typography variant="h3" color={titleColor}>
            {data?.title}
          </Typography>
          <Divider/>
          <Typography variant="body1" color={descriptionColor}>
            {data?.description}
          </Typography>
        </Stack>

        <Stack 
          direction={"column"} 
          spacing={2}
          sx={{
            overflow: "scroll"
          }}
        >

          {
            data?.categories.map((c, idx)=>{
              console.log(c)
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
                  <ListItemIcon>
                  {
                    getFeedbackIcons(c['icon'])
                  }
                  </ListItemIcon>
                  <ListItemText >
                    <Typography variant="h6" fontSize={15} color={categoryColor}>{c['name']}</Typography>
                  </ListItemText>
                  <Rating 
                    value={values[c['name']]?.rating ?? 0} 
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