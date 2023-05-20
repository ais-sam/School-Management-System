import React from 'react'
import BreadCrumb from '../components/global/BreadCrumb'
import PageTitle from '../components/global/PageTitle'
import { Card, Flex, Metric, Text } from "@tremor/react";
import students from "../assets/icons/students.png"
import parents from "../assets/icons/parents.png"
import teachers from "../assets/icons/teachers.png"
import earnings from "../assets/icons/earnings.png"

const Dashboard = ({type}) => {
  return (
    <div className="text-left">
    <PageTitle title={type} />
    <BreadCrumb />
    <Flex className='gap-5 mt-7'>
    <Card className="max-w-xs mx-auto flex items-center justify-between" decoration="top" decorationColor="green">
      <div>
        <Text>Students</Text>
        <Metric className='text-3xl'>5000</Metric>
      </div>
      <img src={students} className='w-16'/>
    </Card>

    <Card className="max-w-xs mx-auto flex items-center justify-between" decoration="top" decorationColor="blue">
      <div>
        <Text>Teachers</Text>
        <Metric>1500</Metric>
      </div>
      <img src={teachers} className='w-16'/>
    </Card>

    <Card className="max-w-xs mx-auto flex items-center justify-between" decoration="top" decorationColor="violet">
      <div>
        <Text>Parents</Text>
        <Metric>100</Metric>
      </div>
      <img src={parents} className='w-16'/>
    </Card>

    <Card className="max-w-xs mx-auto flex items-center justify-between" decoration="top" decorationColor="red">
      <div>
        <Text>Earnings</Text>
        <Metric>$ 5000</Metric>
      </div>
      <img src={earnings} className='w-16'/>

    </Card>
    </Flex>

  
  </div>
  )
}

export default Dashboard