import { Dialog, Typography } from "@mui/material";
import MainCard from "../MainCard";
import PasswordForm from "../../pages/qrcode/components/PasswordForm";

const PasswordDialog = ({open, qr})=>{

    return (
      <Dialog open={open} >
          <MainCard
              title={
                  <Typography variant="h4" fontWeight={500}>Password Required</Typography>
              }
              borderRadius={1}
              headerBorder
              sx={{maxWidth: "440px", width: "100%" }}
          >
            <PasswordForm qr={qr}/>
          </MainCard>
      </Dialog>
    )
}

export default PasswordDialog;