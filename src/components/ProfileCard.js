import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// utils
import { getRandomColor } from '../utils'

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    marginTop: -100,
    paddingTop: 100,
    height: 340,
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
    display: 'xflex',
  },
});

const MentorCard = ({ name, profilePicture, about, types, classes }) => {
  const renderAvatarWords = (
    <Avatar 
      className={classes.profilePicture} 
      style={{ backgroundColor: getRandomColor() }}
    >
      {name.match(/[A-Z]/g).join('')}
    </Avatar>
  );
  const renderAvatarPicture = (
    <Avatar 
      alt={name}
      src={profilePicture}
      className={classes.profilePicture} 
    />
  )
  return (
    <Grid item xs={12} sm={6} md={3}>
      <div className={classes.wrapper}>
        {profilePicture === '' ? renderAvatarWords : renderAvatarPicture}
        <Card className={classes.card} raised elevation={4} square>
          <CardContent className={classes.cardContent}>
            <Typography component="p" gutterBottom>{about}</Typography>
            {types.map((type, index) => (
              <Chip 
                key={index} 
                className={classes.chip} 
                color="primary" 
                label={type} 
                variant="outlined" 
              />
            ))}
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
}

MentorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MentorCard);
