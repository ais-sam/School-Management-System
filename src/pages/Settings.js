import React from 'react'
import BreadCrumb from '../components/global/BreadCrumb'
import PageTitle from '../components/global/PageTitle'
import { SelectBox, SelectBoxItem, TextInput, Button } from '@tremor/react'

const Settings = () => {
  return (
    <div className="text-left">
      <PageTitle title="settings" />
      <BreadCrumb />

      <div className="bg-white rounded-sm shadow-sm mt-8">
        <div className="p-4 relative h-60 bg-[url('https://images.unsplash.com/photo-1502657877623-f66bf489d236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')] bg-cover">
          <h3 className='font-bold text-2xl text-white'>Account Setting</h3>
          <div className='absolute -bottom-20'>
                <img className=" object-cover border-2 border-white w-52 h-52 rounded-full overflow-hidden" src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
          </div>
        </div>
          <div className='mt-24 p-6'>
            <h3 className='text-lg font-medium mb-7'>Prince Afful Quansah - Admin</h3>
            <form className='lg:w-3/4'>
              <div className='flex items-center justify-between gap-4'>
                <span className='basis-2/5'>School Name *</span>
                <TextInput type="text" className='rounded-none' placeholder=""/>
              </div>
              <div className='flex items-center justify-between gap-4 mt-3'>
                <span className='basis-2/5'>Email *</span>
                <TextInput type="text" className='rounded-none' placeholder=""/>
              </div>
              <div className='flex items-center justify-between gap-4 mt-3'>
                <span className='basis-2/5'>Mobile No</span>
                <TextInput type="text" className='rounded-none' placeholder=""/>
              </div>
              <div className='flex items-center justify-between gap-4 mt-3'>
                <span className='basis-2/5'>City</span>
                <TextInput type="text" className='rounded-none' placeholder=""/>
              </div>
              <div className='flex items-center justify-between gap-4 mt-3'>
                <span className='basis-2/5'>Address</span>
                <TextInput type="text" className='rounded-none' placeholder=""/>
              </div>
              <div className='flex items-center justify-between gap-4 mt-3'>
                <span className='basis-2/5'>Username</span>
                <TextInput type="text" className='rounded-none' placeholder=""/>
              </div>
              <div className='flex items-center justify-between gap-4 mt-3'>
                <span className='basis-2/5'>Password</span>
                <TextInput type='password' className='rounded-none' placeholder=""/>
              </div>
              <div className='flex justify-end'>
                <Button size="lg" onClick={() => console.log("clicked")} className="bg-d-red rounded-sm hover:bg-d-red border-d-red px-10 mt-8 ">Save</Button>    
              </div>
            </form>
          </div>
        
      </div>
    </div>
  )
}

export default Settings