import { Dialog, Stack, Typography } from "@mui/material";
import MainCard from "../../../components/MainCard";
import { CloseOutlined } from "@ant-design/icons";
import UserForm from "./user_form";

const SendDialog = ({id, data, reviews, open, onCancel, onSend})=>{

    return (
      <Dialog open={open} >
          <MainCard
              title={
                  <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant="h5">Send Review</Typography>
                    
                    <CloseOutlined
                        onClick={()=>onCancel()}
                        style={{
                            cursor: "pointer"
                        }}
                    />
                  </Stack>
              }
              borderRadius={1}
              headerBorder
              sx={{maxWidth: "440px", width: "100%" }}
          >
            <Stack spacing={2} p={2}>
                <UserForm
                    id={id}
                    data={data}
                    reviews={reviews}
                    onSend={()=>onSend()}
                    onCancel={()=>onCancel()}
                />
            </Stack>
        
          </MainCard>
      </Dialog>
    )
}

export default SendDialog;