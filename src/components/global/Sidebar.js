import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { AiTwotoneHome } from 'react-icons/ai';
import { RiParentFill } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { FaBookOpen, FaUserGraduate } from 'react-icons/fa';
import { IoMdSettings  } from 'react-icons/io';
import { HiOutlineBars3BottomLeft, HiOutlineBars3 } from 'react-icons/hi2';
import { MdSchool } from 'react-icons/md';
import { Link } from 'react-router-dom';



const SideBar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  
  return (
    <Sidebar backgroundColor="#131F73">
      <Menu  className=' h-full text-left text-white'>
        <div className={`py-6 px-1 bg-d-red flex items-center ${!collapsed ?'justify-between': 'justify-center'}`}>
            {!collapsed && <MdSchool className='text-4xl'/>}
            <button  onClick={() => collapseSidebar()}>{collapsed?<HiOutlineBars3 className='text-3xl'/>:<HiOutlineBars3BottomLeft className='text-3xl'/> }</button>
        </div>

        <MenuItem className='menu-item flex items-center' component={<Link to="/home" />} icon={<AiTwotoneHome className='mb-1 text-lg'/>}><span> Dashboard </span></MenuItem>
        
        <SubMenu label="Students" className='menu-item' icon={<FaUserGraduate/>}>
          <MenuItem className='submenu-item hover:text-d-blue-light' component={<Link to="students" />}> All Students </MenuItem>
          <MenuItem  className='submenu-item' component={<Link to="students/new" />}> Add Students </MenuItem>
        </SubMenu>

        <MenuItem className='menu-item' icon={<RiParentFill/>} component={<Link to="parents" />}> Parents </MenuItem>
        
        <SubMenu label="Teachers" icon={<GiTeacher/>} className='menu-item' >
          <MenuItem className='submenu-item' component={<Link to="teachers" />}> All Teachers </MenuItem>
          <MenuItem className='submenu-item' component={<Link to="teachers/new" />}> Add Teachers </MenuItem>
        </SubMenu>

        <MenuItem className='menu-item' icon={<FaBookOpen/>} component={<Link to="subjects" />}> Subjects </MenuItem>
        <MenuItem className='menu-item' icon={<IoMdSettings/>} component={<Link to="settings" />}> Settings </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideBar