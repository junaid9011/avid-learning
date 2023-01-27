import { Typography, Grid, List, ListItem } from "@mui/material";
import MDBox from "components/MDBox";

const Why = () => {
  return (
    <>
      <MDBox width="100%">
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ borderBottom: "5px solid #1A73E8", width: "max-content", mx: "auto" }}
        >
          Why are we different
        </Typography>
      </MDBox>
      <Grid container spacing={3} alignItems="center" justifyContent="space-between" height="80vh">
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laudantium impedit
              nihil recusandae, molestiae saepe pariatur dignissimos, itaque dolorum accusamus illo
              perferendis, possimus laboriosam eius animi rerum. Error, dicta recusandae?
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <MDBox>
            <img style={{ width: "100%" }} src="images/aim.svg" alt="aim" />
          </MDBox>
        </Grid>
      </Grid>
    </>
  );
};
export default Why;
