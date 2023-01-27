import { Grid, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center" height="80vh">
      <Grid item xs={12} md={6}>
        <Typography variant="h2">Tired of seeing</Typography>
        <Typography variant="h2">so many tutorials around?</Typography>
        <Typography variant="subtitle2">Here is your solution</Typography>
        <MDBox display="flex" gap={1} mt={4}>
          <Link to={'/our-courses'}>
          <MDButton color="info">Get Started</MDButton></Link>
          <Link to={'/free-resources'}>
          <MDButton color="primary">Quick Look</MDButton>
          </Link>
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6}>
        <MDBox width="100%">
          <img style={{ width: "100%" }} src="images/hero.png" alt="hero" />
        </MDBox>
      </Grid>
    </Grid>
  );
};
export default Banner;
