import React from 'react';
import PropTypes from 'prop-types';
// material-ui
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
// material icons
import DoneIcon from '@material-ui/icons/Done';
// components
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import ProfileCard from '../components/ProfileCard';
import EmptyMentorList from '../components/EmptyMentorList';
// list
import mentorTypes, { getKeyFromValue } from '../constants/mentor-types';
import mentorList from '../constants/mentors-list';
// utils
import { getFirstLetterOfWords } from '../utils';

const styles = theme => ({
  section: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

class MentorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedList: [],
    };
  };

  componentDidMount() {
    const { search } = window.location;
    const urlParams = new URLSearchParams(search);
    const selectedKey = urlParams.get('type');
    if (selectedKey) {
      this.onSelectChip(selectedKey)();
    }
  }

  onSelectChip = selectedKey => () => {
    const { selectedList } = this.state;
    if (selectedList.includes(selectedKey)) {
      // if key exists, remove from list
      const updatedList = selectedList.filter(item => item !== selectedKey);
      this.setState({ selectedList:  updatedList });
      return;
    }
    // if new key, add to list
    this.setState(state => ({ 
      selectedList:  [selectedKey, ...state.selectedList],
    }));
  };

  onGetMentorList = () => {
    const { selectedList } = this.state;
    if (selectedList.length === 0) {
      return mentorList;
    }
    return mentorList.filter(mentor => {
      const { types } = mentor;
      const keys = types.map(type => getKeyFromValue(type));
      return selectedList.some(listItem => keys.includes(listItem));
    });
  };

  render() {
    const { classes } = this.props;
    const { selectedList } = this.state;
    return (
      <Layout>
        <SEO title="Mentors" keywords={[`thrive`, `mentee`, `find tech mentor`]} />
        <Paper className={classes.section}>
          <Typography variant="h3" gutterBottom>Filter</Typography>
          {Object.entries(mentorTypes).map(([key, value]) => (
            <Chip
              key={key}
              avatar={(
                <Avatar>
                  {selectedList.includes(key) ? <DoneIcon /> : getFirstLetterOfWords(value)}
                </Avatar>
              )}
              label={value}
              clickable
              className={classes.chip}
              color={selectedList.includes(key) ? 'secondary': 'default'}
              onClick={this.onSelectChip(key)}
            />
          ))}
        </Paper>
        <Paper className={classes.section}>
          <Typography variant="h3" gutterBottom>Disclaimer</Typography>
          <Typography paragraph gutterBottom>
            Before reaching out to a mentee please ensure that you have gone through
            our <a href="https://github.com/letsthrive/thrive-ama" target="_blank" rel="noopener noreferrer">ask-me-anything forum</a>. 
            If you feel that the given answers do not solve your usecase. Reach any of the below 
            mentors out.
          </Typography>
          <Typography paragraph gutterBottom>
            A side note, avoid spamming the mentees or sending the same email to all the mentees in
            the list below and allow them 3-5 days to get back to you.
          </Typography>
        </Paper>
        <Grid container spacing={24}>
          {this.onGetMentorList().length === 0 && <EmptyMentorList />}
          {this.onGetMentorList().map((mentor, index) => (
            <ProfileCard 
              key={index}
              {...mentor}
              selectedList={selectedList}
            />
          ))}
        </Grid>
      </Layout>
    );
  }
}

MentorsPage.propTypes = {
  classes: PropTypes.object.isRequired, // material-ui injected
};

export default withStyles(styles)(MentorsPage);