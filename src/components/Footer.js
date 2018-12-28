import React from 'react';
import PropTypes from 'prop-types'
// material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    textAlign: 'center',
  },
};

const Footer = ({ classes }) => (
  <footer className={classes.container}>
    © 2018, Developed By Adeel Imran.
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired, // material-ui injected
}

export default withStyles(styles)(Footer);
