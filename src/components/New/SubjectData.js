import { SelectBox, SelectBoxItem, TextInput } from '@tremor/react'
import React from 'react'
import Buttons from './Buttons'

const SubjectData = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm p-5 mt-8">
        <form>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                <label>
                    Subject Name *
                    <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
                </label>
                <label>
                    Teacher *
                    <TextInput type='text' placeholder='' className="mt-2 rounded-sm"/>
                </label>

                <label>
                Date Of Birth *
                <input type="date" className="block border-gray-300 rounded-sm mt-2 p-[6.3px] w-full"/>
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

                <label >
                    Days *
                    <SelectBox
                    onValueChange={(value) => console.log("the new value is", value)}
                    className="mt-2 rounded-sm !bg-[#dddeee7c] select"
                    >
                    <SelectBoxItem value="Sat" text="Sat"  />
                    <SelectBoxItem value="Sun" text="Sun"  />
                    <SelectBoxItem value="Mon" text="Mon"  />
                    <SelectBoxItem value="Tue" text="Tue"  />
                    <SelectBoxItem value="Wed" text="Wed"  />
                    <SelectBoxItem value="Thu" text="Thu"  />
                    <SelectBoxItem value="Fri" text="Fri"  />
                    </SelectBox>
                </label>
            </div>
        <Buttons/>
        </form>
    </div>
  )
}

export default SubjectData