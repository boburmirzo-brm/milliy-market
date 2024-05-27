import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
        <h2>Admin</h2>
        <Outlet/>
    </div>
  )
}

export default Admin