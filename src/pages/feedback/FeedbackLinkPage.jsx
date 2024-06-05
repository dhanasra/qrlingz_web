import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { ArrowLeftOutlined, EditFilled } from "@ant-design/icons";
import DOODLE_BG from "../../assets/doodle_bg_2.jpg";
import { useEffect, useState } from "react";
import FeedbackCategories from "./components/feedback_categories";
import FeedbackForm from "./components/feedback_form";
import ReviewsList from "./components/reviews_list";
import SendDialog from "./components/send_dialog";
import FeedbackSubmit from "./components/feedback_submit";
import { getQRCodeData, updateScanLimit } from "../../network/qr_service";
import { getFeedbackData } from "../../network/feedback_service";
import { colorToHex } from "../../theme/colors";

const FeedbackLinkPage = ()=>{
  const { linkId } = useParams();

  const [selected, setSelected] = useState(null);

  const [ reviews, setReviews ] = useState({});
  const [ showReview, setShowReview ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);

  const [showPassword, setShowPassword] = useState(false)
  const [showScanLimit, setScanLimit] = useState(false)
  const [qr, setQR] = useState(null)

  const [fbId, setFbId] = useState(null)
  const [data, setData] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      const resp = await getQRCodeData({ linkId });

      console.log(resp)

      if(resp.success){
        const qr = resp.data;
        setQR(qr);

        const configuration = qr?.configuration;

        if(configuration?.enableScanLimit){

          const scanLimit = parseInt(configuration?.scanLimit, 10);
          const noOfScans = qr.scans ?? 0;

          if(noOfScans<scanLimit){
            if(configuration?.enablePassword){
              setShowPassword(true);
              return;
            }else{
              await updateScanLimit({docId: qr.id});
              
            }
          }else{
            setScanLimit(true)
            return;
          }
        }else if(configuration?.enablePassword){
          setShowPassword(true);
          return;
        }else{
          setFbId(qr.data.id);
          const res = await getFeedbackData({id: qr.data.id});
          if(res.success){
            setData(res.data)
            console.log(res.data)
          }
          return;
        }
      }
    }
    fetchData();
  }, [linkId])
  
  return (
    <>
      <SendDialog 
        id={fbId}
        data={data}
        reviews={reviews}
        open={open}
        onCancel={()=>setOpen(false)}
        onSend={()=>{
          setOpen(false);
          setSubmitted(true)
        }}
      />
      <Grid
        container
        sx={{
          background: `url('${DOODLE_BG}')`,
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          
          height: "100vh",
        }}
        justifyContent={"center"}
      >
        <Grid item xs={12} md={4} xl={4}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "white",
              position: "relative"
            }}
          >
            
            <Box
              sx={{
                background: colorToHex(data?.design?.theme?.header ?? "Color(0xff2ecc71)"),
                height: 200,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                paddingTop: "60px"
              }}
            >
              
              <Typography 
                variant="h1" 
                color={colorToHex(data?.design?.content?.companyColor ?? "Color(0xff2ecc71)")}
              >{data?.company}</Typography>

              <Box
                onClick={()=>{  
                  setShowReview(true)
                }}
                sx={{
                  position: "absolute",
                  top: 24, right: 24,
                  cursor: "pointer"
                }}
              >
                <EditFilled
                  style={{color: "#fff", fontSize: "26px"}}
                />
              </Box>

              {
                (showReview || selected) && (
                  <Box
                    onClick={
                      ()=>{
                        setSelected(null);
                        setShowReview(false);
                      }
                    }
                    sx={{
                      position: "absolute",
                      top: 24, left: 24,
                      cursor: "pointer"
                    }}
                  >
                    <ArrowLeftOutlined
                      style={{color: "#fff", fontSize: "26px"}}
                    />
                  </Box>
                )
              }
            </Box>

            <Box
              sx={{
                top: 160,
                left: { xs: 12, md: 24 },
                right: { xs: 12, md: 24 },
                bottom: 80,
                borderRadius: "4px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
                width: 'calc(100%-40)',
                position: "absolute",
                background: "white",
                padding: {
                  xs: "24px", md: "30px"
                }
              }}
            >
              {
                submitted
                ? <FeedbackSubmit
                  onBack={()=>{
                    setSubmitted(false);
                    setShowReview(false);
                    setSelected(null);
                  }}
                />
                : showReview
                ? <ReviewsList 
                  reviews={reviews}
                  onSend={()=>setOpen(true)} 
                  onBack={()=>{
                    setShowReview(false);
                  }}
                />
                : selected!=null
                  ? <FeedbackForm 
                    value={reviews[selected]}
                    category={selected}
                    onChange={(rating, comment)=>{
                      reviews[selected] = { 
                        rating, comment
                      }
                      setReviews(reviews);
                      setSelected(null);
                    }}
                    onSend={(rating, comment)=>{
                      reviews[selected] = { 
                        rating, comment
                      }
                      setReviews(reviews);
                      setOpen(true)
                    }}
                  />
                  : <FeedbackCategories 
                      values={reviews}
                      data={data} 
                      onClick={(c)=>setSelected(c['name'])}
                    />
              }
            </Box>

            <Box 
              sx={{
                position: 'absolute',
                bottom: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "20px"
              }}
            >
              <Typography>spiderlingz.com</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default FeedbackLinkPage;