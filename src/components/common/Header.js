import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// material-ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing.unit * 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  grow: {
    flexGrow: 1,
  },
});

const Header = ({ siteTitle, classes }) => (
  <AppBar position="static" color="default" className={classes.root}>
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        {siteTitle}
      </Typography>
      <Button component={Link} to="/" color="inherit">Home</Button>
      <Button component={Link} to="/mentors" color="inherit">Find Mentor</Button>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  classes: PropTypes.object.isRequired, // material-ui injected
}

Header.defaultProps = {
  siteTitle: `Thrive`,
}

export default withStyles(styles)(Header);