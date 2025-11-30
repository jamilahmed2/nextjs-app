import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Dashboard Navbar
      {children}
      Dashboard Footer
    </div>
  )
}

export default layout