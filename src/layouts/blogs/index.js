import MDBox from "components/MDBox";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

// import image from "assests/images/bg-profile.jpeg";
import image from "assets/images/bg-profile.jpeg";
import { Grid } from "@mui/material";
import { useStudentQuery } from "Redux/Features/Authentication/auth";
import { getCookie } from "Utlis/cookie";
import axios from "axios";
import { useEffect } from "react";
// import data from "layouts/dashboard/components/Projects/data";

const Blogs = () => {
  let token=getCookie('atoken');
  
  // useEffect(() => {
  //   (async () => {
  //     const data = await axios.get('http://20.235.242.77:3306/api/employee/',
  //     {
  //       // mode:"no-cors",
  //       headers: {
          
  //         "Authorization": `Bearer ${token}`,
  //     },
  //     }
  //     );
  //     console.log(data)
  //   })();
  // }, [token]);
  return (
    <Grid container spacing={3} mt={5}>
      <Grid item xs={12} sm={6} lg={4}>
        <SimpleBlogCard
          image={image}
          title="Blog 1"
          description=" If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
          action={{
            type: "internal",
            route: "/blogs",
            color: "info",
            label: "Read more",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <SimpleBlogCard
          image={image}
          title="Blog 1"
          description=" If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
          action={{
            type: "internal",
            route: "/blogs",
            color: "primary",
            label: "Read more",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <SimpleBlogCard
          image={image}
          title="Blog 1"
          description=" If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
          action={{
            type: "internal",
            route: "/blogs",
            color: "success",
            label: "Read more",
          }}
        />
      </Grid>
    </Grid>
  );
};
export default Blogs;
