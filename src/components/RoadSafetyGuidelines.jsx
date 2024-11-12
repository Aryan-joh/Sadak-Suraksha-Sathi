import React from 'react'


const RoadSafetyGuidelines = () => {
    const guidelines=[
        'Always wear a seatbelt.',
        'Avoid distractions.',
        'Do not cross the speed limits.',
        'Service your car regularly.',
        'Follow traffic signals.',
        'Maintain lane discipline.',
        'Be careful during bad weather.',
        'Maintain a safe distance.'
    ]
  return (
    <div style={{ border: '1px solid gray', padding: '10px', width: '300px' }}>
     <h3>Road Safety Guidelines </h3> 
     <ul>
        {guidelines.map((guidelines,index)=>(
  <li key={index}>{guidelines}</li>
        ))

        }
      
     </ul>
    </div>
  )
}

export default RoadSafetyGuidelines
