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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

import { Typography, Grid, List, ListItem, ListItemText, Container } from "@mui/material";
import FooterListItem from "./FooterListItem";

const itemLists = {
  About: ["Avid Learning is a distruction free education Platfrom"],
  Social: ["facbook", "instagram", "discord"],
  // hello: ["link1", "link2", "link3", "link4"],
};

function Footer() {
  // const { href, name } = company;
  const { size } = typography;

  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
      sx={{ backgroundColor: "#fff" }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between" py={5}>
          {Object.entries(itemLists).map((item) => (
            <FooterListItem key={item[0]} catergoryName={item[0]} lists={item[1]} />
          ))}
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Typography variant="subtitle1">Get in touch</Typography>
            <MDInput label="Enter your email" />
          </Grid>
          <Grid item xs={12}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              color="text"
              fontSize={size.sm}
              px={1.5}
            >
              &copy; {new Date().getFullYear()}, Developed By
              <MDBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
                {/* <Icon color="inherit" fontSize="inherit">
                  favorite
                </Icon> */}
              </MDBox>
              
              {/* <Link target="_blank"> */}
                <MDTypography variant="button" fontWeight="medium">
                  &nbsp; Cou Frozen Hash &nbsp;
                </MDTypography>
              {/* </Link> */}
            </MDBox>
          </Grid>
        </Grid>
      </Container>
    </MDBox>
  );
}

// Setting default values for the props of Footer
// Footer.defaultProps = {
//   company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
//   links: [
//     { href: "https://www.creative-tim.com/", name: "Creative Tim" },
//     { href: "https://www.creative-tim.com/presentation", name: "About Us" },
//     { href: "https://www.creative-tim.com/blog", name: "Blog" },
//     { href: "https://www.creative-tim.com/license", name: "License" },
//   ],
// };

// // Typechecking props for the Footer
// Footer.propTypes = {
//   company: PropTypes.objectOf(PropTypes.string),
//   links: PropTypes.arrayOf(PropTypes.object),
// };

export default Footer;
