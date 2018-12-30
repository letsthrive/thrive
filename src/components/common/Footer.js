import React from 'react';
import PropTypes from 'prop-types'
// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 2,
  },
  heart: {
    color: theme.palette.secondary.main,
  },
});

const Footer = ({ classes }) => (
  <footer className={classes.wrapper}>
    <Typography variant="body1" align="center">
      © 2018, Developed With 
      <span role="img" aria-label="love" className={classes.heart}> ♥️ </span> 
      By 
    </Typography>
    <Button 
      component="a" 
      href="https://twitter.com/adeelibr"
      target="_blank"
      color="inherit"
    >
      Adeel Imran
    </Button>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired, // material-ui injected
}

export default withStyles(styles)(Footer);
