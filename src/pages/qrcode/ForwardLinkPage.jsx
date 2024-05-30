import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQRCodeData } from "../../network/qr_service";
import PasswordDialog from "../../components/dialogs/PasswordDialog";

const ForwardLinkPage = ()=>{
  const { linkId } = useParams();

  const [showPassword, setShowPassword] = useState(false)
  const [qr, setQR] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      const resp = await getQRCodeData({ linkId });

      if(resp.success){
        const qr = resp.data;
        setQR(qr);
        if(qr && qr.configuration &&  qr.configuration.enablePassword){
          setShowPassword(true);
          return;
        }
        window.location.replace(qr.data.value);
      }

    }
    fetchData();
  }, [linkId])

  return (
    <>
      <PasswordDialog 
        qr={qr}
        open={showPassword} />
      <Box
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <CircularProgress
          thickness={3} size={30} sx={{color: "#201A3F"}}
        />
      </Box>
    </>
  )
}

export default ForwardLinkPage;