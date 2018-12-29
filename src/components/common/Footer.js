import React from 'react';
import PropTypes from 'prop-types'
// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  wrapper: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 2,
  },
});

const Footer = ({ classes }) => (
  <footer className={classes.wrapper}>
    <Typography variant="body1" align="center">
      © 2018, Developed With <span role="img" aria-label="love">♥️</span> By Adeel Imran.
    </Typography>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired, // material-ui injected
}

export default withStyles(styles)(Footer);
