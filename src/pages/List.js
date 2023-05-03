import BreadCrumb from "../components/global/BreadCrumb"
import TopBar from "../components/global/TopBar"
const List = ({type}) => {
  return (
    <div className='flex-grow  bg-d-bg-gray'>
      <TopBar/>
      <div className="p-3">
        <BreadCrumb/>
        {type} List

      </div>
      </div>
  )
}

export default List