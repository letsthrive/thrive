import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// material-ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// Icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import ForumIcon from '@material-ui/icons/Forum';
import CommunityIcon from 'mdi-material-ui/CommentMultipleOutline';

const styles = ({ spacing, breakpoints }) => ({
  root: {
    flexGrow: 1,
  },
  appBarTitle: {
    flexGrow: 1,
  },
  button: {
    display: 'inline-flex',
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileMenuButton: {
    display: 'none',
    [breakpoints.down('sm')]: {
      display: 'inline-flex',
    },
  },
  buttonIcon: {
    marginRight: spacing.unit, 
  },
  drawerList: {
    minWidth: 260,
  },
});

const NAVIGATION_LINKS = [
  {
    common: {
      to: '/',
      component: Link,
    },
    name: 'Home',
    Icon: HomeIcon,
  },
  {
    common: {
      to: '/mentors',
      component: Link,
    },
    name: 'Find Mentors',
    Icon: SchoolIcon,
  },
  {
    common: {
      href: 'https://github.com/letsthrive/thrive-ama',
      component: 'a',
      target: '_blank',
    },
    name: 'Forum',
    Icon: ForumIcon,
  },
  {
    common: {
      href: 'https://www.facebook.com/groups/letsthrivepk/',
      component: 'a',
      target: '_blank',
    },
    name: 'Community Group',
    Icon: CommunityIcon,
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }

  onToggleDrawer = () => {
    this.setState(state => ({ isDrawerOpen: !state.isDrawerOpen }));
  }

  render() {
    const { siteTitle, classes } = this.props;
    const { isDrawerOpen } = this.state;
    return (
      <AppBar position="static" color="secondary" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.appBarTitle}>
            {siteTitle}
          </Typography>
          {NAVIGATION_LINKS.map(({ name, Icon, common }) => (
            <Button
              key={name}
              className={classes.button} 
              color="inherit"
              {...common}
            >
              <Icon className={classes.buttonIcon} />
              {name}
            </Button>
          ))}
          <Button 
            className={classes.mobileMenuButton} 
            color="inherit"
            onClick={this.onToggleDrawer}
          >
            <MenuIcon />
          </Button>
        </Toolbar>
        <Drawer anchor="left" open={isDrawerOpen} onClose={this.onToggleDrawer}>
          <List className={classes.drawerList}>
            {NAVIGATION_LINKS.map(({ name, Icon, common}) => (
              <ListItem key={name} {...common}>
                <ListItemIcon>
                  <Icon className={classes.buttonIcon} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  classes: PropTypes.object.isRequired, // material-ui injected
}

Header.defaultProps = {
  siteTitle: `Thrive`,
}

export default withStyles(styles)(Header);
