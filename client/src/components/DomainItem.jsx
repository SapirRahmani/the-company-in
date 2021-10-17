import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "14px",
    width: "50%",
  },
  paper: {
    padding: "40px 20px",
  },
  name: {
    margin: 0,
    textAlign: "left",
  },
  type: {
    textAlign: "left",
    color: "gray",
  },
}));

const DomainItem = (domainData) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (e) => {
    history.push(`/domain/${domainData.id}`);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <Paper className={classes.paper}>
        <Grid justifyContent="flex-start" item xs zeroMinWidth>
          <h3 className={classes.name}>{domainData.name} </h3>
          <p className={classes.type}>{domainData.type}</p>
          <img src={domainData.logo} />
        </Grid>
      </Paper>
    </div>
  );
};

export default DomainItem;
