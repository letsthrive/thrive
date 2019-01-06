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
// material-ui transitions
import Zoom from '@material-ui/core/Zoom';
import Slide from '@material-ui/core/Slide';
// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// utils
import { getRandomColor, getFirstLetterOfWords } from '../utils';
// constants
import { isValueInList } from '../constants/mentor-types';

const styles = ({ spacing, transitions, breakpoints }) => ({
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
  cardSubHeader: {
    minHeight: 40,
  },
  cardContent: {
    flex: 1,
  },
  profilePicture: {
    zIndex: 1,
    height: 170,
    width: 170,
    borderRadius: '15%',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    fontSize: 60, // if avatar is words
    backgroundColor: getRandomColor(), // if avatar is words
  },
  chip: {
    margin: spacing.unit / 2,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: transitions.create('transform', {
      duration: transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [breakpoints.up('sm')]: {
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

    return (
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.wrapper}>
          <Zoom in timeout={550}>
            <Avatar alt={`Mentor ${name}`} src={profilePicture} className={classes.profilePicture}>
              {getFirstLetterOfWords(name)}
            </Avatar>
          </Zoom>
          <Slide direction="up" in timeout={600} mountOnEnter unmountOnExit>
            <Card className={classes.card} raised elevation={4} square>
              <CardHeader 
                title={name} 
                subheader={designation}
                classes={{
                  subheader: classes.cardSubHeader,
                }}
              />
              <CardContent className={classes.cardContent}>
                <Typography paragraph>{about}</Typography>
                {types.map((type, index) => (
                  <Chip 
                    key={index} 
                    className={classes.chip} 
                    color="secondary" 
                    label={type} 
                    variant={isValueInList(selectedList, type) ? "default" : "outlined"} 
                  />
                ))}
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                {social.map(({ type, url, icon: Icon }) => (
                  <IconButton
                    key={type}
                    component="a" 
                    href={url} 
                    target="_blank" 
                    color="secondary"
                  >
                    <Icon />
                  </IconButton>
                ))}
                {bio.length !== 0 && (
                  <IconButton
                    className={classnames(classes.expand, { [classes.expandOpen]: isExpanded })}
                    onClick={this.onToggleExpansion}
                    aria-expanded={isExpanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                )}
              </CardActions>
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph color="secondary">Bio:</Typography>
                  {bio.map((paragraph, index) => (
                    <Typography key={index} paragraph>
                      {paragraph}
                    </Typography>
                  ))}
                </CardContent>
              </Collapse>
            </Card>
          </Slide>
        </div>
      </Grid>
    );
  }
}

MentorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MentorCard);
