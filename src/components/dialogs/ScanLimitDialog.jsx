import { Avatar, Box, Dialog, Stack, Typography } from "@mui/material";
import MainCard from "../MainCard";
import CLOUD_ERROR from "../../assets/icons/cloud-error.png";

const ScanLimitDialog = ({open, qr})=>{

    return (
      <Dialog open={open} >
          <MainCard
              title={
                  <Typography variant="h4" fontWeight={500}>Scan Limit Exceeded</Typography>
              }
              borderRadius={1}
              headerBorder
              sx={{maxWidth: "440px", width: "100%" }}
          >
            <Stack
              alignItems={"center"}
              spacing={2}
            >
              <Avatar
                sx={{
                  background: "#fff3ff",
                  width: 120,
                  height: 120
                }}
              >
                <Box component={"img"} src={CLOUD_ERROR}/>
              </Avatar>
              <Typography variant="h5">The limit of total scans has been reached.</Typography>
            </Stack>
          </MainCard>
      </Dialog>
    )
}

export default ScanLimitDialog;