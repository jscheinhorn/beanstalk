import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div className="block">
      <section className="hero is-primary">
        <div className="hero-body" style={{padding: '30px'}}>
          <div className="container">
            <div className="columns">
              <div className="column is-three-quarters">
                <h1 className="title">
                  Team Beanstalk
                  <h2 className="subtitle">Senior Design Project</h2>
                </h1>
                <h2 className="subtitle">
                  ASME E-Fest Student Design Competition
                </h2>
              </div>
              <div className="column">
                <figure className="image is-3x1">
                  <img
                    className="has-ratio is-pulled-right"
                    style={{width: 140, 'padding-top': 10}}
                    src="https://www.ccny.cuny.edu/sites/default/files/CCNYlogo_FlushRight_digital.jpg"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="block">
      <nav className="nav">
        <div
          className="navbar-start navbar-menu is-active"
          style={{padding: '0px 20px 0px 20px'}}
        >
          <Link to="/team" className="navbar-item">
            Team
          </Link>
          <Link to="/problem" className="navbar-item">
            Design Problem
          </Link>
          <Link to="/diagram" className="navbar-item">
            Functional Diagram
          </Link>
          <Link to="/prototypes" className="navbar-item">
            Prototypes
          </Link>
          <Link to="/schedule" className="navbar-item">
            Schedule
          </Link>
          <Link to="/resources" className="navbar-item">
            Resources
          </Link>
        </div>
      </nav>
    </div>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
