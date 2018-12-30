import React from 'react';
// material-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// components
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import ProfileCard from '../components/ProfileCard';
// list
import mentorList from '../constants/mentors-list';

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Mentors" keywords={[`thrive`, `mentee`, `find tech mentor`]} />
        <Typography component="h2" variant="h3" gutterBottom>Mentors</Typography>
        <Grid container spacing={24}>
          {mentorList.map((mentor, index) => <ProfileCard key={index} {...mentor} />)}
        </Grid>
      </Layout>
    );
  }
}

export default IndexPage;
