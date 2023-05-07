import { SelectBox, SelectBoxItem, TextInput } from '@tremor/react'
import React from 'react'

const TeachersData = () => {
  return (
    <div>
    <h3 className="capitalize text-2xl mb-4 font-medium">
      Add New Teacher
    </h3>

    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      <label>
        First Name *
        <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
      </label>
      <label>
        Last Name *
        <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
      </label>

      <label>
        Gender *
        <SelectBox
          onValueChange={(value) => console.log("the new value is", value)}
          defaultValue="1"
          className="mt-2 rounded-sm"
          >
          <SelectBoxItem value="male" text="Male"  />
          <SelectBoxItem value="female" text="Female"  />
        </SelectBox>
      </label>

     
      <label>
      Date Of Birth *
      <input type="date" className="block border-gray-300 rounded-sm mt-2 p-[6.3px] w-full"/>
      </label>
      <label >
        Blood group *
        <SelectBox
          onValueChange={(value) => console.log("the new value is", value)}
          className="mt-2 rounded-sm !bg-[#dddeee7c] select"
          >
          <SelectBoxItem value="A+" text="A+"  />
          <SelectBoxItem value="A-" text="A-"  />
          <SelectBoxItem value="B+" text="B+"  />
          <SelectBoxItem value="B-" text="B-"  />
          <SelectBoxItem value="AB+" text="AB+"  />
          <SelectBoxItem value="AB-" text="AB-"  />
          <SelectBoxItem value="O+" text="O+"  />
          <SelectBoxItem value="O-" text="O-"  />
        </SelectBox>
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
        Class *
        <SelectBox
          onValueChange={(value) => console.log("the new value is", value)}
          className="mt-2 !rounded-sm"
          >
          <SelectBoxItem value="1" text="1"  />
          <SelectBoxItem value="2" text="2"  />
          <SelectBoxItem value="3" text="3"  />
          <SelectBoxItem value="4" text="4"  />
          <SelectBoxItem value="5" text="5"  />
        </SelectBox>
    </label>

    <label>
        Address  
        <TextInput type='text' placeholder='' className="mt-2 rounded-sm  text-black !font-[200]"/>
    </label>
      <label>
        Admission Date *
        <input type="date" className="block border-gray-300 rounded-sm mt-2 p-[6.3px] w-full"/>
      </label>
    </div>
  </div>
  )
}

export default TeachersData