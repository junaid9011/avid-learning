/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Switch from "@mui/material/Switch";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "Redux/Features/Authentication/authReducer";
import { useSigninMutation } from "Redux/Features/Authentication/auth";
// import { getCookie } from "Utlis/cookie";

// Authentication layout components

// Images

function Basic() {
  // const token=getCookie('atoken');
  const navigate=useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [formData,setFormData]=useState({
    username:"",
    email:"",
    password:""
  });
  // console.log(formData)
  const [msg,setMsg]=useState('');
  const dispatch=useDispatch();
  const state=useSelector(state=>state);
  // console.log(state)
  const [signin,data]=useSigninMutation();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  // console.log(state)

  const handleSubmit=async(e)=>{
    // setFormData({...formData,[e.target.name]:e.target.value})
      await signin(formData);
      
  }
  useEffect(() => {
    (async () => {
      if(data?.data){
        // console.log(data)
        dispatch(setLogin(data.data));
        navigate('/')
      }
    })();
  }, [dispatch,data,navigate]);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <>
      <MDBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={7} lg={5} xl={4}>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MDTypography>
                <MDTypography variant="h6" fontWeight="small"  color="white" mt={1}>
                  {msg}
                </MDTypography>
                {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MDTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MDTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MDTypography>
                  </Grid>
                </Grid> */}
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="username" type="text" label="UserName" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="email" type="email" label="Email" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="password" type="password" label="Password" fullWidth />
                  </MDBox>
                  <MDBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MDTypography>
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
                      sign in
                    </MDButton>
                  </MDBox>
                  <MDBox mt={3} mb={1} textAlign="center">
                    <MDTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MDTypography
                        component={Link}
                        to="/authentication/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MDTypography>
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </>
  );
}

export default Basic;
