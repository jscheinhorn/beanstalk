import React from 'react'

const Welcome = () => (
  <div className="block" style={{padding: '20px'}}>
    <div className="columns">
      <div className="column">
        <h1 className="title is-1">Welcome!</h1>
        <h2 className="title is-5">
          Welcome to Team Beanstalk's senior design project website.
        </h2>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <p>
          For our Senior Design project we are designing and fabricating a
          device according to the{' '}
          <a href="https://efests.asme.org/competitions/student-design-competition-(sdc)">
            ASME Student Design Competition (SDC)
          </a>{' '}
          problem challenge and rules. The purpose of this device is to
          construct a self-supporting load bearing paper tower for the 2020
          Student Design Competition. This website features key aspects of our
          process and records the progression of this project.
        </p>
      </div>
      <div className="column" style={{'background-color': 'lightblue'}}>
        <a href="https://efests.asme.org/competitions/student-design-competition-(sdc)">
          <img src="https://res.cloudinary.com/bizzaboprod/image/upload/q_auto:best,c_crop,g_custom/v1573682250/r7nidsufr9umkjwdgna9.png" />
        </a>
      </div>
    </div>
  </div>
)

export default Welcome
