import React from 'react'

const Problem = () => (
  <div className="block" style={{padding: '20px'}}>
    <div className="columns">
      <div className="column">
        <h1 className="title is-1">Design Problem</h1>
        <h2 className="title is-5">SDC 2020: Building to the Sky</h2>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <div className="content">
          <h1 className="title is-5">Motivation</h1>
          Manufacturing activities employ a significant percentage of engineers,
          they account for a large share of private research and development
          spending, and will continue to play an essential role in innovating
          our future. Necessary advances in technology will require both skilled
          engineers and novel manufacturing techniques.
          <br />
          <br />
          <h1 className="title is-5">Problem Statement</h1>
          This year’s challenge requires teams to build a compact engineering
          system capable of manufacturing a tower made exclusively from
          standard-sized sheets of paper detailed in the rules below. The
          validation of the design will include testing for manufacturing speed,
          height of tower, and ability to support a load. The testing will occur
          at each of the ASME EFest Student Design Competitions taking place in
          2020.
          <br />
          <br />
          <a href="https://resources.asme.org/efest-rules-sdc-2020?_ga=2.46445287.1158912216.1576984949-1183926404.1576984949">
            Click here for the complete 2020 Student Design Competition Rules
            and Challenge Statement
          </a>
        </div>
      </div>
      <div className="column">
        <a href="https://efests.asme.org/competitions/student-design-competition-(sdc)">
          <img src="https://resources.asme.org/hs-fs/hubfs/ASME_Student_Design_Competition_Logo_RGB.jpg?width=518&name=ASME_Student_Design_Competition_Logo_RGB.jpg" />
        </a>
      </div>
    </div>
  </div>
)

export default Problem
