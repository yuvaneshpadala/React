import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
function About() {
  return (
    <div>
        <h1>My Dashboard</h1>
        <div className='hiii'>
          <h1 style={{fontSize:'20px'}}>Total Points</h1>
          <div className='total'>
          <p style={{float:'right'}}><i>from August 2018 to my 2019</i></p>
          </div>
        <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={800}
      height={300}
    />
    <p1 >Aug 2022</p1>
    <p1>Aug 2022</p1>
    <p1>Aug 2022</p1>
    <p1>Aug 2022</p1>
    <p1>Aug 2022</p1>
    <p1>Aug 2022</p1>
     </div>
    </div>
  );
}

export default About;