import React from 'react'
import StudentContainer from '../components/StudentContainer'


const Students = () => {
  const style = {
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',}
  return (
    <div>
          <div  className='row' style={style}>
      <StudentContainer name="Grade 01" count={135} color="#13AE4B"/>
      <StudentContainer name="Grade 02" count={52} color="#5B8CEB"/>
      <StudentContainer name="Grade 03" count={78} color="#B51D46"/>
      <StudentContainer name="Grade 04" count={98} color="#F74A8A"/>
      <StudentContainer name="Grade 05" count={127} color="#FFC16E"/>
      <StudentContainer name="Grade 06" count={110} color="#FD9041"/>
      <StudentContainer name="Grade 07" count={110} color="#13AE4B"/>
      </div>
      <div  className='row' style={style}>
      <StudentContainer name="Grade 08" count={107} color="#F74A8A"/>
      <StudentContainer name="Grade 09" count={105} color="#FFC16E"/>
      <StudentContainer name="Grade 10" count={104} color="#FD9041"/>
      
      <StudentContainer name="Grade 11" count={98} color="#13AE4B"/>
      <StudentContainer name="Grade 12" count={90} color="#5B8CEB"/>
      <StudentContainer name="Grade 13" count={80} color="#B51D46"/>
      <StudentContainer name="Pre School" count={75} color="#F74A8A"/>
      </div>  
      </div>
  )

  
}

export default Students