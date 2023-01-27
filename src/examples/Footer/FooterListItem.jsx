import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";

const FooterListItem = ({ catergoryName, lists }) => {
  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Typography>{catergoryName}</Typography>
      <List>
        {lists.map((list) => (
          <ListItem key={list}>
            <ListItemText>{list}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
export default FooterListItem;
