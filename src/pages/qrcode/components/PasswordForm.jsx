import { Button, FormHelperText, Grid, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Formik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import { updateScanLimit } from "../../../network/qr_service";


const PasswordForm = ({qr})=>{

  const [ loading, setLoading ] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);

  return (
    <Formik
      initialValues={{
        password: '', 
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().max(255).required("Password is required")
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting})=>{
        try {

          if(qr.configuration.password === values.password){
            setLoading(true);
            await updateScanLimit({ docId: qr.id });
            window.location.replace(qr.data.og);
            setLoading(false);
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
          <Grid container  spacing={1}>
            <Grid item xs={12}>
              <Typography>If you want to access this qr you must enter its corresponding password.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                  <InputLabel htmlFor="password"></InputLabel>
                  <OutlinedInput
                      id="password"
                      type= { showPassword ? "text" : "password" }
                      name="password"
                      placeholder="Enter password"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      endAdornment={
                        <InputAdornment 
                          position="start" 
                          sx={{ mr: -0.5, cursor: 'pointer' }} 
                          onClick={()=>setShowPassword(!showPassword)}>
                          {
                            showPassword 
                              ? <EyeOutlined style={{fontSize: '24px'}}/> : <EyeInvisibleOutlined style={{fontSize: '24px'}}/>
                          }
                        </InputAdornment>
                      }
                      fullWidth
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id={`standard-weight-helper-password`}>
                      {errors.password}
                    </FormHelperText>
                  )}
              </Stack>
            </Grid>
            <Grid item xs={12} mt={3} alignItems={"end"}> 
              <Stack spacing={3} direction={"row"} justifyContent={"end"}>
                <Button disabled={loading} type="submit" variant="contained" sx={{width: "100%", py: 1.2}}>
                    Enter
                </Button>
              </Stack>
            </Grid>
          </Grid>
       </form>
      )}
    </Formik>
  )
}

export default PasswordForm;