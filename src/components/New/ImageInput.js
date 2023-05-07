import React from 'react'

const ImageInput = () => {
  return (
    <div className="flex gap-4 items-center my-8">
          <div className=" w-40 h-40 bg-d-gray rounded-full"></div>
          <div>
            <span className="block text-sm mb-2">Upload Photo (150px X 150px)</span>
            <input type="file"/>
          </div>
    </div>
  )
}

export default ImageInput