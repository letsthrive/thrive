import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// material-ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
// icons
import LinkedinIcon from 'mdi-material-ui/LinkedinBox';
import TwitterIcon from 'mdi-material-ui/TwitterBox';
import StackOverflowIcon from 'mdi-material-ui/StackOverflow';
import EmailIcon from 'mdi-material-ui/Email';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// utils
import { getRandomColor, getFirstLetterOfWords } from '../utils';
// constants
import { isValueInList } from '../constants/mentor-types';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    marginTop: -100,
    paddingTop: 100,
    // height: 340,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardContent: {
    flex: 1,
  },
  profilePicture: {
    zIndex: 1,
    height: 180,
    width: 180,
    borderRadius: '50%',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    fontSize: 60, // if avatar is words
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class MentorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  };

  onToggleExpansion = () => {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  };

  render() {
    const { 
      name, 
      profilePicture, 
      designation, 
      about, 
      types, 
      bio,
      social,
      selectedList, 
      classes,
    } = this.props;
    const { isExpanded} = this.state;

    const renderAvatarWords = (
      <Avatar className={classes.profilePicture} style={{ backgroundColor: getRandomColor() }}>
        {getFirstLetterOfWords(name)}
      </Avatar>
    );

    const renderAvatarPicture = (
      <Avatar alt={name} src={profilePicture} className={classes.profilePicture} />
    );

    return (
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.wrapper}>
          {profilePicture === '' ? renderAvatarWords : renderAvatarPicture}
          <Card className={classes.card} raised elevation={4} square>
            <CardHeader title={name} subheader={designation} />
            <CardContent className={classes.cardContent}>
              <Typography paragraph>{about}</Typography>
              {types.map((type, index) => (
                <Chip 
                  key={index} 
                  className={classes.chip} 
                  color="secondary" 
                  label={type} 
                  variant={isValueInList(selectedList, type) ? "filled" : "outlined"} 
                />
              ))}
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              {social.linkedin && (
                <IconButton component="a" href={social.linkedin} target="_blank" color="secondary">
                  <LinkedinIcon />
                </IconButton>
              )}
              {social.twitter && (
                <IconButton component="a" href={social.twitter} target="_blank" color="secondary">
                  <TwitterIcon />
                </IconButton>
              )}
              {social.stackoverflow && (
                <IconButton component="a" href={social.stackoverflow} target="_blank" color="secondary">
                  <StackOverflowIcon />
                </IconButton>
              )}
              {social.email && (
                <IconButton 
                  component="a" 
                  href={`mailto:${social.email}?subject=[Thrive] Mentorship Guidance For {Subject}`}
                  target="_blank" 
                  color="secondary"
                >
                  <EmailIcon />
                </IconButton>
              )}
              <IconButton
                className={classnames(classes.expand, { [classes.expandOpen]: isExpanded })}
                onClick={this.onToggleExpansion}
                aria-expanded={isExpanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Bio:</Typography>
                {bio.map((paragraph, index) => (
                  <Typography key={index} paragraph>
                    {paragraph}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Grid>
    );
  }
}

MentorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MentorCard);
