import { TextInput } from '@tremor/react'
import React from 'react'

const ParentData = () => {
  return (
    <div className="mt-8">
          <h3 className="capitalize text-2xl mb-4 font-medium">
            Add New <span>Parent</span>
          </h3>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <label className='text-[15px]'>
              Father’s Name 
              <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
            </label>
            <label>
              Mother’s Name  
              <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
            </label>
            <label>
              Email  
              <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
            </label>
            <label>
              Phone  
              <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
            </label>
            <label>
              Father’s Occupation   
              <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
            </label>
            <label>
              Address *   
              <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
            </label>

          </div>
        </div>
  )
}

export default ParentData