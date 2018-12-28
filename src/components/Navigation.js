import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// material-ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 15,
  },
  grow: {
    flexGrow: 1,
  },
};

const Header = ({ siteTitle, classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {siteTitle}
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/page-2" color="inherit">Find Mentor</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/contact" color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  classes: PropTypes.object.isRequired, // material-ui injected
}

Header.defaultProps = {
  siteTitle: `Thrive`,
}

export default withStyles(styles)(Header);
