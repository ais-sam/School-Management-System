import { Breadcrumb } from 'flowbite-react';
import { AiTwotoneHome } from 'react-icons/ai';

const BreadCrumb = () => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" icon={AiTwotoneHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">All Students</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb