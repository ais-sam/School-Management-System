import DetailsCard from "../components/details/DetailsCard";
import BreadCrumb from "../components/global/BreadCrumb"
import PageTitle from "../components/global/PageTitle"
import SearchBar from "../components/global/SearchBar";
import Table from "../components/global/Table";


const List = ({type}) => {
  return (
    <div className="text-left">
      <PageTitle title={type} />
      <BreadCrumb />

      <div className="bg-white rounded-sm shadow-sm p-4 mt-6">
        <h3 className="capitalize text-2xl">
          All <span>{type}</span> Data
        </h3>
        <SearchBar/>
        <div className="mt-3">
          <Table/>
        </div>
        
      </div>
    </div>
  );
}

export default List