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
import ImageInput from "../components/New/ImageInput";
import { Modal } from "flowbite-react";
import TeachersData from "../components/New/TeachersData";


const New = ({type}) => {
  return (
    <div className="text-left">
      <PageTitle title={type} />
      <BreadCrumb />

      <div className="bg-white rounded-sm shadow-sm p-5 mt-8">
        <form>
          {type === "students" ? (
          <>
            <StudentData />
            <ParentData />
            <ImageInput />
            <Buttons />
          </>) : 
          <>
          <TeachersData/>
          <ImageInput/>
          <Buttons/>
          </>}
        </form>
      </div>
    </div>
  );
}

export default New