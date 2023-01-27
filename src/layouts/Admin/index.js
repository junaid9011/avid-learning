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
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// import Footer from "examples/Footer";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import PageLayout from "examples/LayoutContainers/PageLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Data

// Dashboard components
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import Projects from "layouts/dashboard/components/Projects";
import AddCourse from "./Component/courseHistory";
import StatisticsCard from "./Component/Card";
import CourseHistory from "./Component/courseHistory";
import Course from "./Component/RecentCourses";
import RecentCourses from "./Component/RecentCourses";

function Admin() {
  return (
    <>
      {/* <DefaultNavbar /> */}
      <MDBox py={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <StatisticsCard
                color="dark"
                icon="weekend"
                title="Ongoing Courses"
                count={2}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <StatisticsCard
                icon="leaderboard"
                title="Finished"
                count="3"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <StatisticsCard
                color="success"
                icon="store"
                title="Total Enrolled"
                count="5"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <StatisticsCard
                color="primary"
                icon="person_add"
                title="Total credits"
                count="$500"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              < RecentCourses/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CourseHistory />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </>
  );
}

export default Admin;
