import React from 'react'
import Navlink from '../../Atom/NavLink/navlink'

const LogReg = () => {
  return (
    <div className='wrap-logReg'>
        <Navlink name='Login' style={{color: 'black'}}/>
        <Navlink name='Register' className='reg'/>
    </div>
  )
}

export default LogReg