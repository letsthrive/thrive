import React from 'react';
// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// images
import homeImage from '../images/home-bg.jpg';

const styles = theme => ({
  sectionSearch: {
    height: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
    backgroundImage: `url("${homeImage}")`,
    backgroundAttachment: 'fixed',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  sectionSearchText: {
    fontSize: 42,
    color: '#FFF',
    textShadow: '1px 1px 1px #000',
  },
  formControl: {
    backgroundColor: 'white',
    margin: theme.spacing.unit * 3,
  },
  root: {
    padding: theme.spacing.unit * 2,
    minWidth: 300,
  },
  menuItem: {
    textTransform: 'capitalize',
  },
});

const SearchForm = ({ mentors, onChange, classes }) => {
  return (
    <div className={classes.sectionSearch}>
      <Typography 
        className={classes.sectionSearchText}
        variant="h5" 
        gutterBottom
      >
        Find A Mentor
      </Typography>
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select 
            value={''} 
            displayEmpty
            onChange={onChange}
            variant="outlined"
            classes={{
              root: classes.root,
            }}
          >
            <MenuItem key="empty" value="">
              <em>Select A Mentor Type</em>
            </MenuItem>
            {Object.entries(mentors).map(([key, value]) => (
              <MenuItem key={key} className={classes.menuItem} value={key}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </div>
  );
}

export default withStyles(styles)(SearchForm);
