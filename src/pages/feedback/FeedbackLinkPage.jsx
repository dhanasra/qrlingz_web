import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { ArrowLeftOutlined, EditFilled } from "@ant-design/icons";
import DOODLE_BG from "../../assets/doodle_bg_2.jpg";
import { useState } from "react";
import FeedbackCategories from "./components/feedback_categories";
import FeedbackForm from "./components/feedback_form";
import ReviewsList from "./components/reviews_list";

const FeedbackLinkPage = ()=>{
  const { linkId } = useParams();

  const categories = ['Food', 'Ambients', 'Service', 'Quality'];
  const [selected, setSelected] = useState(null);

  const [ reviews, setReviews ] = useState({});
  const [ showReview, setShowReview ] = useState(false);

  // const [showPassword, setShowPassword] = useState(false)
  // const [showScanLimit, setScanLimit] = useState(false)
  // const [qr, setQR] = useState(null)

  // const [data, setData] = useState(  null)


  // useEffect(()=>{
  //   async function fetchData(){
  //     const resp = await getQRCodeData({ linkId });

  //     if(resp.success){
  //       const qr = resp.data;
  //       setQR(qr);

  //       const configuration = qr?.configuration;

  //       if(configuration?.enableScanLimit){

  //         const scanLimit = parseInt(configuration?.scanLimit, 10);
  //         const noOfScans = qr.scans ?? 0;

  //         if(noOfScans<scanLimit){
  //           if(configuration?.enablePassword){
  //             setShowPassword(true);
  //             return;
  //           }else{
  //             await updateScanLimit({docId: qr.id});
              
  //           }
  //         }else{
  //           setScanLimit(true)
  //           return;
  //         }
  //       }else if(configuration?.enablePassword){
  //         setShowPassword(true);
  //         return;
  //       }else{
          
  //         console.log(qr.data.id)

  //         return;
  //       }
  //     }
  //   }
  //   fetchData();
  // }, [linkId])
  
  return (
    <>
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
                background: "green",
                height: 200,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                paddingTop: "60px"
              }}
            >
              
              <Typography variant="h1" color={"white"}>Spiderlingz</Typography>

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
                left: 24,
                right: 24,
                bottom: 80,
                borderRadius: "4px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
                width: 'calc(100%-40)',
                position: "absolute",
                background: "white",
                padding: "30px"
              }}
            >
              {
                showReview
                ? <ReviewsList reviews={reviews}/>
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
                  />
                  : <FeedbackCategories 
                      values={reviews}
                      categories={categories} 
                      onClick={(c)=>setSelected(c)}
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