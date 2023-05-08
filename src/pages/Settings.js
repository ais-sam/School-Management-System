import React from 'react'
import BreadCrumb from '../components/global/BreadCrumb'
import PageTitle from '../components/global/PageTitle'
import { TextInput } from '@tremor/react'

const Settings = () => {
  return (
    <div className="text-left">
      <PageTitle title="settings" />
      <BreadCrumb />

      <div className="bg-white rounded-sm shadow-sm p-4 mt-8">
        <div className='p-2 relative bg-blue-600'>
          <h3 className='font-bold text-xl text-white'>Account Setting</h3>
          <div className=''>
                <img className=" object-cover  w-44 h-44 rounded-full overflow-hidden" src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
          </div>
        </div>
          <div className='mt-6'>
            <h3>Prince Afful Quansah - Admin</h3>
            <form className='grid grid-cols-2 gap-x-2 gap-y-2 mt-4'>
              <span>School Name *</span>
              <TextInput/>
              <span>School Name *</span>
              <TextInput/>
              <span>School Name *</span>
              <TextInput/>
              <span>School Name *</span>
              <TextInput/>
              <span>School Name *</span>
              <TextInput/>
              <span>School Name *</span>
              <TextInput/>
              <span>School Name *</span>
              <TextInput/>
            </form>
          </div>
        
      </div>
    </div>
  )
}

export default Settings