import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import MDBox from 'components/MDBox';
import js from '../../../../assets/js.jpg'
import py from '../../../../assets/python.jpeg'
export default function Project() {
    let courses = [
        {
            id: 1,
            title: "JavaScript",
            image: js,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas illo tempora quibusdam omnis, expedita odio porro error ab aut, voluptates mollitia. Possimus corrupti error iure ab nisi saepe exercitationem!",
        },
        {
            id: 2,
            title: "Python",
            image: py,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas illo tempora quibusdam omnis, expedita odio porro error ab aut, voluptates mollitia. Possimus corrupti error iure ab nisi saepe exercitationem!",
        },
        {
            id: 3,
            title: "Python",
            image: py,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas illo tempora quibusdam omnis, expedita odio porro error ab aut, voluptates mollitia. Possimus corrupti error iure ab nisi saepe exercitationem!",
        },
        // {
        //     id: 3,
        //     title: "Core Programming",
        //     description:
        //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas illo tempora quibusdam omnis, expedita odio porro error ab aut, voluptates mollitia. Possimus corrupti error iure ab nisi saepe exercitationem!",
        // },
        // {
        //     id: 4,
        //     title: "Robotics",
        //     description:
        //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, voluptas illo tempora quibusdam omnis, expedita odio porro error ab aut, voluptates mollitia. Possimus corrupti error iure ab nisi saepe exercitationem!",
        // },
    ];
    return (
        <Grid pt={2} container spacing={3}>

            {
                courses.map(item =>
                    <Grid item xs={12} sm={6} lg={4}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>

                                </CardContent>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 140, marginLeft:12}}
                                    image={item?.image}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                            {/* <CardActions> */}
                            <MDBox m={2} display="flex" sx={{ justifyContent: 'space-between' }} >
                                <Typography fontSize={"15px"} >
                                    10 videos
                                </Typography>
                                <Typography fontSize={"15px"} >
                                    6 lessons
                                </Typography>
                                <Typography fontSize={"15px"} >
                                    5/6
                                </Typography>
                            </MDBox>

                            {/* </CardActions> */}
                        </Card>
                    </Grid>)
            }
        </Grid>
    );
}
