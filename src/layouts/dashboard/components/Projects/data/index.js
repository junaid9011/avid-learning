/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";
import MDTypography from "components/MDTypography";

// Images

export default function data() {
  return {
    columns: [
      { Header: "Blogs", accessor: "courses", width: "45%", align: "left" },
      { Header: "Topic", accessor: "type", width: "10%", align: "left" },
        { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        courses: (
          <MDTypography variant="button" fontWeight="medium" lineHeight={1}>
            All you need to know JS
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Free
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        courses: (
          <MDTypography variant="button" fontWeight="medium" lineHeight={1}>
            Web Design
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Free
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        courses: (
          <MDTypography variant="button" fontWeight="medium" lineHeight={1}>
            Full Stack development
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Freemium
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        courses: (
          <MDTypography variant="button" fontWeight="medium" lineHeight={1}>
            Mastering react
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Paid
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
