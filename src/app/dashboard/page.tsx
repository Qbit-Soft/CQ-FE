import SidebarWrapper from '@/components/SidebarWrapper'
import React from 'react'

type Props = {
  children: React.ReactNode
}
const Dashboard = ({ children }: Props) => {
  return (
    <div className='flex h-screen bg-background'>
      <SidebarWrapper>{children}</SidebarWrapper>
    </div>
  )
}

export default Dashboard