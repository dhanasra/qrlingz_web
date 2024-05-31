import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQRCodeData, updateScanLimit } from "../../network/qr_service";
import PasswordDialog from "../../components/dialogs/PasswordDialog";
import ScanLimitDialog from "../../components/dialogs/ScanLimitDialog";

const ForwardLinkPage = ()=>{
  const { linkId } = useParams();

  const [showPassword, setShowPassword] = useState(false)
  const [showScanLimit, setScanLimit] = useState(false)
  const [qr, setQR] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      const resp = await getQRCodeData({ linkId });

      if(resp.success){
        const qr = resp.data;
        setQR(qr);

        const configuration = qr?.configuration;

        if(!configuration){
          window.location.replace(qr.data.value);
          return;
        }

        if(configuration?.enableScanLimit){

          const scanLimit = parseInt(configuration?.scanLimit, 10);
          const noOfScans = qr.scans ?? 0;

          console.log(scanLimit)
          console.log(noOfScans)

          if(noOfScans<scanLimit){
            if(configuration?.enablePassword){
              setShowPassword(true);
              return;
            }else{
              await updateScanLimit({docId: qr.id});
              window.location.replace(qr.data.value);
            }
          }else{
            setScanLimit(true)
            return;
          }
        }
      }
    }
    fetchData();
  }, [linkId])

  return (
    <>
      <ScanLimitDialog 
        open={showScanLimit} />
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