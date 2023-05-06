import { SelectBox, SelectBoxItem, TextInput } from '@tremor/react'
import React from 'react'

const StudentData = () => {
  return (
    <div>
    <h3 className="capitalize text-2xl mb-4 font-medium">
      Add New Student
    </h3>

    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      <label>
        Name *
        <TextInput type='text' placeholder='' className="mt-2"/>
      </label>

      <label>
        Gender *
        <SelectBox
          onValueChange={(value) => console.log("the new value is", value)}
          defaultValue="1"
          className="mt-2"
          >
          <SelectBoxItem value="male" text="Male"  />
          <SelectBoxItem value="female" text="Female"  />
        </SelectBox>
      </label>

      <label>
        Class *
        <SelectBox
          onValueChange={(value) => console.log("the new value is", value)}
          className="mt-2"
          >
          <SelectBoxItem value="1" text="1"  />
          <SelectBoxItem value="2" text="2"  />
          <SelectBoxItem value="3" text="3"  />
          <SelectBoxItem value="4" text="4"  />
          <SelectBoxItem value="5" text="5"  />
        </SelectBox>
      </label>
      <label>
      Date Of Birth *
      <input type="date" className="block border-gray-300 rounded-md mt-2 w-full"/>
      </label>
  
    
      <label >
        Blood group *
        <SelectBox
          onValueChange={(value) => console.log("the new value is", value)}
          className="mt-2 "
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
      Admission Date *
      <input type="date" className="block border-gray-300 rounded-md mt-2 w-full"/>

      </label>
    </div>
  </div>
  )
}

export default StudentData