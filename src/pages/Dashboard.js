import React from 'react'
import BreadCrumb from '../components/global/BreadCrumb'
import PageTitle from '../components/global/PageTitle'

const Dashboard = ({type}) => {
  return (
    <div className="text-left">
    <PageTitle title={type} />
    <BreadCrumb />

  
  </div>
  )
}

export default Dashboard