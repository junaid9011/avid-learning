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

// @mui material components
import { PieChart } from "@mui/icons-material";
import { Card, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Data

// Dashboard components
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import Projects from "./components/Projects";
import Project from "./components/Projects/project";
// import { Project } from "./components/Projects/project";


function Dashboard() {
  return (
    <>
      {/* <DefaultNavbar /> */}
      <MDBox py={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ width:500}} mb={1.5}>
              <MDBox>
                <MDTypography sx={{marginLeft:4,marginTop:2}} variant="h4">Progress</MDTypography>
                {/* <div class="pie" style="--p:40;--c:darkblue;--b:10px"> 40%</div> */}
              </MDBox>
              {/* <DefaultLineChart/> */}
              {/* <PieChart/> */}
              
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Ongoing Course"
                course="Python"
                count={60}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
              <Divider/>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Last Finished Course"
                course="JavaScript"
                count={100}
                // percentage={{
                //   color: "success",
                //   amount: "+55%",
                //   label: "than lask week",
                // }}
              />
            </Card >
          </Grid>
          <Grid mt={3} ml={40} >
            <Projects/>
          </Grid>
        </Grid>
        <MDBox pt={4}>
        <Typography  variant="h5" component="div">
                Courses
              </Typography>
              <Project/>
        {/* <Project/> */}
          {/* <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}  >
              
              <Project/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid> */}
        </MDBox>
      </MDBox>
    </>
  );
}

export default Dashboard;
