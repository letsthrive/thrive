import React from 'react'
import PropTypes from 'prop-types'
// material-ui
import { withStyles } from '@material-ui/core/styles';
// components
import Header from '../common/Header'
import Footer from '../common/Footer'
// css
import '../../styles/reset.css'
import '../../styles/scrollbar.css'
import '../../styles/main.css'

const styles = theme => ({
  body: {
    padding: 24,
    backgroundColor: '#F1F1F1',
  },
});

const Layout = ({ children, classes }) => (
  <>
    <Header siteTitle="Thrive" />
    <div className={classes.body}>
      {children}
    </div>
    <Footer />
  </>
)

Layout.propTypes = {
  classes: PropTypes.object.isRequired, // material-ui injected
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
