import React from 'react';
// material-ui
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  sectionSearch: {
    height: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
    backgroundImage: `url("https://images.unsplash.com/photo-1546014216-0ffcd51e2b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
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
            <MenuItem value="">
              <em>Select A Mentee Type</em>
            </MenuItem>
            {Object.entries(mentors).map(([key, value]) => (
              <MenuItem className={classes.menuItem} value={key}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </div>
  );
}

export default withStyles(styles)(SearchForm);
