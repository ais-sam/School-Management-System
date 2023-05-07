import { DataGrid } from '@mui/x-data-grid';
import DetailsCard from '../details/DetailsCard';
import { useState } from 'react';

import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";


const data = [
  { id: 22, name: 'Daniel Grant', gender: 'Male', class: 2, parents: "Kofi Grant", address:"59 Australia, Sydney", dateOfBirth: "02/05/2001", phone: "+ 123 9988568" },
    {
      id: 1,
      name: 'Ella Hudson',
      gender: 'Female',
      class: 3,
      parents: 'Mason Hudson',
      address: '6650 Cedarwood Drive, Carson City, NV 89701',
      dateOfBirth: '06/19/2002',
      phone: '(775) 555-5555'
    },
    {
      id: 2,
      name: 'Adrian Davis',
      gender: 'Male',
      class: 1,
      parents: 'Brianna Davis',
      address: '4901 Murphy Court, Pembroke Pines, FL 33028',
      dateOfBirth: '02/02/2001',
      phone: '(954) 555-5555'
    },
    {
      id: 3,
      name: 'Samantha Martinez',
      gender: 'Female',
      class: 4,
      parents: 'Juan Martinez',
      address: '7018 Pheasant Run, Dubuque, IA 52003',
      dateOfBirth: '04/28/2003',
      phone: '(563) 555-5555'
    },
    {
      id: 4,
      name: 'Julian Lee',
      gender: 'Male',
      class: 2,
      parents: 'Olivia Lee',
      address: '7848 Wilshire Boulevard, Los Angeles, CA 90036',
      dateOfBirth: '10/17/2002',
      phone: '(310) 555-5555'
    },
    {
      id: 5,
      name: 'Emily Taylor',
      gender: 'Female',
      class: 1,
      parents: 'David Taylor',
      address: '5694 Cedar Lane, Omaha, NE 68102',
      dateOfBirth: '07/03/2001',
      phone: '(402) 555-5555'
    },
    {
      id: 6,
      name: 'Luke Rodriguez',
      gender: 'Male',
      class: 3,
      parents: 'Megan Rodriguez',
      address: '2196 Lodgeville Road, Plymouth, MN 55441',
      dateOfBirth: '11/12/2001',
      phone: '(763) 555-5555'
    },
    {
      id: 7,
      name: 'Avery Lewis',
      gender: 'Female',
      class: 5,
      parents: 'Sophia Lewis',
      address: '2478 Aspen Court, Stockton, CA 95202',
      dateOfBirth: '01/09/2003',
      phone: '(209) 555-5555'
    },
    {
      id: 8,
      name: 'Mason Robinson',
      gender: 'Male',
      class: 4,
      parents: 'Victoria Robinson',
      address: '1730 Harron Drive, Freeland, WA 98249',
      dateOfBirth: '03/22/2002',
      phone: '(360) 555-5555'
    },
    {
      id: 9,
      name: 'Aria Phillips',
      gender: 'Female',
      class: 2,
      parents: 'William Phillips',
      address: '3543 Hillcrest Drive, Philadelphia, PA 19108',
      dateOfBirth: '08/08/2001',
      phone: '(215) 555-5555'
    }
];

export default function DataTable (){
return (
  <div>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell className='text-d-red text-base font-medium '>ID</TableHeaderCell>
          <TableHeaderCell className='text-d-red text-base font-medium'>Name</TableHeaderCell>
          <TableHeaderCell className='text-d-red text-base font-medium'>Gender</TableHeaderCell>
          <TableHeaderCell className='text-d-red text-base font-medium'>Class</TableHeaderCell>
          <TableHeaderCell className='text-d-red text-base font-medium'>Parents</TableHeaderCell>
          <TableHeaderCell className='text-d-red text-base font-medium'>Address</TableHeaderCell>
          <TableHeaderCell className='text-d-red text-base font-medium'>Date of Birth</TableHeaderCell>
          <TableHeaderCell className='text-d-red text-base font-medium'>Phone</TableHeaderCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className='text-gray-800'>{item.id}</TableCell>
            <TableCell>
              <Text className='text-gray-800'>{item.name}</Text>
            </TableCell>
            <TableCell >
              <Text className='text-gray-800'>{item.gender}</Text>
            </TableCell>
            <TableCell >
              <Text className='text-gray-800'>{item.class}</Text>
            </TableCell>
            <TableCell >
              <Text className='text-gray-800'>{item.parents}</Text>
            </TableCell>
            <TableCell >
              <Text className='text-gray-800'>{item.address}</Text>
            </TableCell>
            <TableCell >
              <Text className='text-gray-800'>{item.dateOfBirth}</Text>
            </TableCell>
            <TableCell >
              <Text className='text-gray-800'>{item.phone}</Text>
            </TableCell>

            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
}




// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'name', headerName: 'Name', width: 130 },
//   { field: 'gender', headerName: 'Gender', width: 130 },
//   { field: 'class', headerName: 'Class', width: 130 },
//   { field: 'parents', headerName: 'Parents', width: 130 },
//   { field: 'address', headerName: 'Address', width: 130 },
//   { field: 'dateOfBirth', headerName: 'Date of Birth', width: 130 },
//   { field: 'phone', headerName: 'Phone', width: 130 },
  
// ];

// const rows = [
//   { id: 22, name: 'Daniel Grant', gender: 'Male', class: 2, parents: "Kofi Grant", address:"59 Australia, Sydney", dateOfBirth: "02/05/2001", phone: "+ 123 9988568" },
//   {
//     id: 1,
//     name: 'Ella Hudson',
//     gender: 'Female',
//     class: 3,
//     parents: 'Mason Hudson',
//     address: '6650 Cedarwood Drive, Carson City, NV 89701',
//     dateOfBirth: '06/19/2002',
//     phone: '(775) 555-5555'
//   },
//   {
//     id: 2,
//     name: 'Adrian Davis',
//     gender: 'Male',
//     class: 1,
//     parents: 'Brianna Davis',
//     address: '4901 Murphy Court, Pembroke Pines, FL 33028',
//     dateOfBirth: '02/02/2001',
//     phone: '(954) 555-5555'
//   },
//   {
//     id: 3,
//     name: 'Samantha Martinez',
//     gender: 'Female',
//     class: 4,
//     parents: 'Juan Martinez',
//     address: '7018 Pheasant Run, Dubuque, IA 52003',
//     dateOfBirth: '04/28/2003',
//     phone: '(563) 555-5555'
//   },
//   {
//     id: 4,
//     name: 'Julian Lee',
//     gender: 'Male',
//     class: 2,
//     parents: 'Olivia Lee',
//     address: '7848 Wilshire Boulevard, Los Angeles, CA 90036',
//     dateOfBirth: '10/17/2002',
//     phone: '(310) 555-5555'
//   },
//   {
//     id: 5,
//     name: 'Emily Taylor',
//     gender: 'Female',
//     class: 1,
//     parents: 'David Taylor',
//     address: '5694 Cedar Lane, Omaha, NE 68102',
//     dateOfBirth: '07/03/2001',
//     phone: '(402) 555-5555'
//   },
//   {
//     id: 6,
//     name: 'Luke Rodriguez',
//     gender: 'Male',
//     class: 3,
//     parents: 'Megan Rodriguez',
//     address: '2196 Lodgeville Road, Plymouth, MN 55441',
//     dateOfBirth: '11/12/2001',
//     phone: '(763) 555-5555'
//   },
//   {
//     id: 7,
//     name: 'Avery Lewis',
//     gender: 'Female',
//     class: 5,
//     parents: 'Sophia Lewis',
//     address: '2478 Aspen Court, Stockton, CA 95202',
//     dateOfBirth: '01/09/2003',
//     phone: '(209) 555-5555'
//   },
//   {
//     id: 8,
//     name: 'Mason Robinson',
//     gender: 'Male',
//     class: 4,
//     parents: 'Victoria Robinson',
//     address: '1730 Harron Drive, Freeland, WA 98249',
//     dateOfBirth: '03/22/2002',
//     phone: '(360) 555-5555'
//   },
//   {
//     id: 9,
//     name: 'Aria Phillips',
//     gender: 'Female',
//     class: 2,
//     parents: 'William Phillips',
//     address: '3543 Hillcrest Drive, Philadelphia, PA 19108',
//     dateOfBirth: '08/08/2001',
//     phone: '(215) 555-5555'
//   },
// ];

// export default function DataTable() {
//   const [modal, setModal] = useState(false)
//   const showModal = ()=> setModal(true)
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         onRowClick={showModal}
//       />
//       {modal && <DetailsCard modal = {modal}/>}
//     </div>
//   );
// }








// const Table = () => {
//   return (
//     <div class="relative overflow-x-auto">
//       <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead class="text-[13px] text-d-red  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" class="px-6 py-3">
//               ID
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Name
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Gender
//             </th>
//             <th scope="col" class="px-6 py-3">
//               Class
//             </th>
//              <th scope="col" class="px-6 py-3">
//              Parents
//             </th>
//             <th scope="col" class="px-6 py-3">
//             Address
//             </th>
//             <th scope="col" class="px-6 py-3">
//             Date of Birth
//             </th>
//             <th scope="col" class="px-6 py-3">
//             Phone
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//             <th scope="row" class="table_item">22</th>
//             <td class="table_item">Daniel Grant</td>
//             <td class="table_item">Male</td>
//             <td class="table_item">2</td>
//             <td class="table_item">Kofi Grant</td>
//             <td class="table_item">59 Australia, Sydney</td>
//             <td class="table_item">02/05/2001</td>
//             <td class="table_item">+ 123 9988568</td>
//           </tr>
          
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table





















// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// }