import React from 'react' 
import myBillBookLogo from "../NavOptions/assets/mybillbookLogo.png"
import NavOptions from "../NavOptions/NavOptions"
function NavBar() {
  return (
    <div className='relative flex items-center h-16 border'>
      <img src={myBillBookLogo} alt="logo" className='relative h-6 ml-24'/>
      <div className="nav-options relative flex flex-1 items-center justify-end mx-10">
        <NavOptions option="Why Use My Billbook?"/> 
        <NavOptions option="Who Is It For?"/>
        <NavOptions option="Online Store"/>
        <NavOptions option="Pricing"/>
        <NavOptions option="FAQs"/>
      </div>
    </div>
  )
}

export default React.memo(NavBar);