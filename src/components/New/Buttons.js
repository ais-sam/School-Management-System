import { Button } from '@tremor/react'
import React from 'react'

const Buttons = () => {
  return (
    <div className="mt-6 flex items-center gap-3">
          <Button size="lg" onClick={() => console.log("clicked")} className="bg-d-red rounded-sm hover:bg-d-red border-d-red px-10">Save</Button>
          <Button size="lg" onClick={() => console.log("clicked")} className="bg-d-blue rounded-sm hover:bg-d-blue border-d-blue px-10">Reset</Button>
    </div>
  )
}

export default Buttons