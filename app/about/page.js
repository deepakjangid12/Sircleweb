import React from 'react'
import Abouthero from './aboutcomponents/Abouthero';
import Vision from './aboutcomponents/Vision';
import Think from './aboutcomponents/Think'
import Founder from './aboutcomponents/Founder'
import Patnership from './aboutcomponents/Patnership'
function page() {
  return (
    <div >
      <Abouthero/>
      <Think/>
      <Vision/>
      <Founder/>
      <Patnership/>
    </div>
  )
}                           
export default page;