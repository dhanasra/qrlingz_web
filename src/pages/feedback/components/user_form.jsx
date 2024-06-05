import { Button, FormHelperText, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import { saveReview } from "../../../network/feedback_service";

const UserForm = ({id, reviews, onSend, onCancel})=>{

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          email: '', 
          phone: '', 
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().max(255).required("Email is required"),
          phone: Yup.string().max(255).required("Phone is required")
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting})=>{
          try {
  
            if(qr.configuration.password === values.password){
              setLoading(true);

              const data = {
                email: values.email,
                phone: values.phone,
                reviews
              }

              await saveReview({id, review: data});
              setLoading(false);
              onSend();
            }else{
              setErrors({
                password: 'Incorrect Password.'
              })
            }
  
          } catch (err) {
            console.log(err)
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
          {({errors, handleBlur, handleChange, handleSubmit, touched, values})=>(
            <form noValidate onSubmit={handleSubmit}>
            <Stack
                spacing={2}
              >
              <Stack direction={"column"} spacing={1}>
              <Typography variant="h5" fontWeight={500}>
                  {`* 3 Categories Reviewed`}
              </Typography>
              <Typography variant="body1" color={"grey"}>
                  Please enter your contact information if you want us to get back to you.
              </Typography>
              </Stack>
              <Stack spacing={1}>
                <InputLabel htmlFor="email" sx={{fontSize: "12px"}}>Email Address</InputLabel>
                <OutlinedInput
                    id="email"
                    type= "text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email address"
                    fullWidth
                />
                {touched.email && errors.email && (
                    <FormHelperText error id={`standard-weight-helper-email`}>
                      {errors.email}
                    </FormHelperText>
                  )}
              </Stack>
              <Stack spacing={1}>
                <InputLabel htmlFor="phone" sx={{fontSize: "12px"}}>Phone Number</InputLabel>
                <OutlinedInput
                    id="phone"
                    type= "text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your phone number"
                    fullWidth
                />
                {touched.phone && errors.phone && (
                    <FormHelperText error id={`standard-weight-helper-phone`}>
                      {errors.phone}
                    </FormHelperText>
                  )}
              </Stack>
              <Stack direction={"row"} spacing={2} sx={{pt: 3}}>
              <Button
                  disabled={loading}
                  variant="outlined" 
                  fullWidth
                  onClick={()=>onCancel()}  
              >Cancel</Button>
              <Button 
                  disabled={loading}
                  type="submit"
                  variant="contained" 
                  fullWidth
              >Send</Button>
              </Stack>
              </Stack>
            </form>
          )}
      </Formik>
    </>
  ) 
}

export default UserForm;