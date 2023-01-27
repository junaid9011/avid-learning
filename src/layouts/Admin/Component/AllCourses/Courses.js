import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCouseQuery } from "Redux/Features/Course/courseApi";

export const AllCourses = () => {
  const navigate = useNavigate();
  let courses = [
    {
      id: 1,
      title: "WEB DEV",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas illo tempora quibusdam omnis, expedita odio porro error ab aut, voluptates mollitia. Possimus corrupti error iure ab nisi saepe exercitationem!",
    },
    {
      id: 2,
      title: "Data Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas illo tempora quibusdam omnis, expedita odio porro error ab aut, voluptates mollitia. Possimus corrupti error iure ab nisi saepe exercitationem!",
    },
    {
      id: 3,
      title: "Core Programming",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas illo tempora quibusdam omnis, expedita odio porro error ab aut, voluptates mollitia. Possimus corrupti error iure ab nisi saepe exercitationem!",
    },
    {
      id: 4,
      title: "Robotics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas illo tempora quibusdam omnis, expedita odio porro error ab aut, voluptates mollitia. Possimus corrupti error iure ab nisi saepe exercitationem!",
    },
  ];
  // const handleClick = (id) => {
  //   console.log(id);
  // };
  const {data}=useGetCouseQuery();
  console.log(data)
//   useEffect(()=>{
//     (async()=>{
//         data
//     })();
//   })
  return (
    <>
    <MDBox  mt={4} mx={2} display="flex" justifyContent="space-between">
    <Typography variant="h5"> Course</Typography>
    <Button variant="contained" color="white" href="/admin/add-course">Add Courses</Button>

    </MDBox>
   
    <Grid pt={10} container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {data?.map((item) => (
          <Grid item px={4} py={4} xs={4} sm={4} md={4}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {item.duration}h
                </Typography>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography> */}
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => navigate(`/admin/course-content/${item.free_course_id}`)} size="small">
                  add content
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid></>
  );
};
