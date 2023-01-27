
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import { useState } from "react";
import { useSignUpMutation } from "Redux/Features/Authentication/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "Redux/Features/Authentication/authReducer";

// Authentication layout components

// Images

function Cover() {
  const [formData,setFormData]=useState({
    username:"",
    email:"",
    password1:"",
    password2:"",
    
  });
  const dispatch=useDispatch();
  // const state=useSelector(state=>state)
  const [signUp,data]=useSignUpMutation()
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  console.log(data)

  const handleSubmit=async(e)=>{
    // setFormData({...formData,[e.target.name]:e.target.value})
      await signUp(formData);
      if(data.data.access_token){
        console.log(data)
        dispatch(setLogin(data.data))
      }
  }
  return (
    <MDBox px={1} width="100%" height="100vh" mx="auto">
      <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
        <Grid item xs={11} sm={9} md={7} lg={5} xl={4}>
          <Card>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="success"
              mx={2}
              mt={-3}
              p={3}
              mb={1}
              textAlign="center"
            >
              <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                Join us today
              </MDTypography>
              {/* <MDTypography display="block" variant="button" color="white" my={1}>
                Enter your email and password to register
              </MDTypography> */}
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput onChange={(e)=>handleChange(e)} name="username" type="text" label="Name" variant="standard" fullWidth required />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput onChange={(e)=>handleChange(e)} name="email" type="email" label="Email" variant="standard" fullWidth required />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput onChange={(e)=>handleChange(e)} name="password1" type="password" label="Password" variant="standard" fullWidth required/>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput onChange={(e)=>handleChange(e)} name="password2" type="password" label=" Confirm Password" variant="standard" fullWidth required/>
                </MDBox>
                <MDBox display="flex" alignItems="center" ml={-1}>
                  <Checkbox />
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                  >
                    &nbsp;&nbsp;I agree the&nbsp;
                  </MDTypography>
                  <MDTypography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="bold"
                    color="info"
                    textGradient
                  >
                    Terms and Conditions
                  </MDTypography>
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
                    sign up
                  </MDButton>
                </MDBox>
                <MDBox mt={3} mb={1} textAlign="center">
                  <MDTypography variant="button" color="text">
                    Already have an account?{" "}
                    <MDTypography
                      component={Link}
                      to="/authentication/sign-in"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Sign In
                    </MDTypography>
                  </MDTypography>
                </MDBox>
              </MDBox>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Cover;
