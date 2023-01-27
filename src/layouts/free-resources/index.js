import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const FreeResources = () => {
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
  return (
    <Grid pt={10} container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
      {courses.map((item) => (
        <Grid item px={4} py={4} xs={4} sm={4} md={4}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                30 days
              </Typography>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography> */}
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate(`/free-resources/${item.id}`)} size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
