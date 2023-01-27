
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";
import MDTypography from "components/MDTypography";

// Images

export default function data() {
  return {
    columns: [
      { Header: "Course", accessor: "courses", width: "45%", align: "left" },
      { Header: "Type", accessor: "type", width: "10%", align: "left" },
        { Header: "enrolled", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        courses: (
          <MDTypography  variant="button" fontWeight="medium" lineHeight={1}>
            All you need to know JS
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Free
          </MDTypography>
        ),
        completion: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
            10
          </MDTypography>
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
            <MDTypography variant="caption" color="text" fontWeight="medium">
            10
          </MDTypography>
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
            <MDTypography variant="caption" color="text" fontWeight="medium">
            10
          </MDTypography>
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
            <MDTypography variant="caption" color="text" fontWeight="medium">
            10
          </MDTypography>
        ),
      },
    ],
  };
}
