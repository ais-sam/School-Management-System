import { useState } from "react";
import BreadCrumb from '../components/global/BreadCrumb'
import PageTitle from '../components/global/PageTitle'
import Input from '@mui/joy/Input';
// import { Label, TextInput } from 'flowbite-react';
import { TextInput } from "@tremor/react";
import {SelectBox,SelectBoxItem, Button} from "@tremor/react";
import StudentData from "../components/New/StudentData";
import ParentData from "../components/New/ParentData";
import Buttons from "../components/New/Buttons";
import StudentImage from "../components/New/StudentImage";


const New = ({type}) => {
  return (
    <div className="text-left">
      <PageTitle title={type}  />
      <BreadCrumb />

      <div className="bg-white rounded-sm shadow-sm p-5 mt-6">
        <form>
          <StudentData/>
          <ParentData/>
          <StudentImage/>
          <Buttons/>
        </form>
      </div>
      </div>
    
  );
}

export default New