import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar = () => {
  return (
    <Sidebar backgroundColor="#131F73"  >
      <Menu  className=' h-full text-left text-white'>
        <MenuItem className='menu-item'> Dashboard </MenuItem>
        <SubMenu label="Students" className='menu-item' >
          <MenuItem className='submenu-item'> All Students </MenuItem>
          <MenuItem className='submenu-item'> Add Students </MenuItem>
        </SubMenu>
        <MenuItem className='menu-item' > Parents </MenuItem>
        <SubMenu label="Teachers" className='menu-item' >
          <MenuItem className='submenu-item'> All Teachers </MenuItem>
          <MenuItem className='submenu-item'> Add Teachers </MenuItem>
        </SubMenu>
        <MenuItem className='menu-item' > Subjects </MenuItem>
        <MenuItem className='menu-item' > Settings </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideBar