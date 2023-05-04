import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { SlEnvolope } from 'react-icons/sl';
import { FaRegBell } from 'react-icons/fa';
import { HiOutlineSearch } from "react-icons/hi";


const TopBar = () => {
  return (
    <Navbar fluid={true} rounded={false} className='  rounded-none'>
        <div className='flex items-center'>
          <HiOutlineSearch className='text-lg'/>
            <input type="text" placeholder="Search"  className='border-none focus:outline-none' />
        </div>
      <div className="flex md:order-2 items-center gap-2">
        <SlEnvolope className='text-lg'/>
        <FaRegBell className='text-lg'/>
        <span>|</span>
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>

    // <div className='bg-white py-3 px-1'>
    //     <input type='text' placeholder='Search'/>

    // </div>
  );
}

export default TopBar