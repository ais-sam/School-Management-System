import React from 'react'

const SearchBar = () => {
  return (
    <div className="py-10 flex items-center justify-between">
          <div className="flex gap-10 items-center flex-grow">
            <input id="base" type="text" name="name" className="h-11 rounded-sm border-none bg-[#dddeee7c] placeholder:text-[#757576] placeholder:text-sm w-72" placeholder="Search by name..."/>
            <select name="cars" id="cars" className="h-11 rounded-sm border-none bg-[#dddeee7c] text-[#757576] text-sm p-3 py-[12px] w-72">
              <option value="" >Search by class...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button className="bg-d-red py-2 px-6 text-white w-52 h-10 text-sm rounded-sm uppercase">search</button>
        </div>
  )
}

export default SearchBar