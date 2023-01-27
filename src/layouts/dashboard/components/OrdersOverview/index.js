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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          History
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="error"
          title="Successfully finished the course"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem color="info" title="Enrolled another courses" dateTime="21 DEC 9:34 PM" />
        <TimelineItem color="warning" title="Payment done" dateTime="20 DEC 2:20 AM" />
        <TimelineItem
          color="primary"
          title="Enrolled in mastering courses"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
