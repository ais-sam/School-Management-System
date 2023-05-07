import { Modal } from 'flowbite-react'
import { useState } from 'react'


const DetailsCard = ({openModal}) => {
    const [show,setShow] = useState(true)
    const onClose = ()=>setShow(false)
    // const openModal = ()=>setShow(true)
  return (
    <Modal show={show} onClose={onClose}>
            <Modal.Header className='text-d-blue'>Student Details</Modal.Header>
            <Modal.Body className='flex gap-8'>
              <div >
                <img className=" object-cover  w-44 h-44 rounded-full overflow-hidden" src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
              </div>
              <div>
                <h3 className='font-semibold text-d-blue text-xl mb-5'>Daniel Grant</h3>
                <ul className='grid grid-cols-2 gap-x-10 gap-y-3 text-[15px]'>
                    <li>ID Number</li>
                    <li>22</li>

                    <li>Name</li>
                    <li>Daniel Grant</li>

                    <li>Gender</li>
                    <li>Male</li>

                    <li>Father Name:</li>
                    <li>Steve Grant</li>

                    <li>Mother Name:</li>
                    <li>Naomi Grant</li>

                    <li>Date Of Birth:</li>
                    <li>07.08.1999</li>

                    <li>Father Occupation:</li>
                    <li>Graphic Designer</li>

                    <li>E-mail:</li>
                    <li>arabagrant@gmail.com</li>

                    <li>Admission Date:</li>
                    <li>07.08.2016</li>

                    <li>Class</li>
                    <li>2</li>
                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button onClick={onClick}>I accept</Button>
              <Button color="gray" onClick={onClick}>
                Decline
              </Button> */}
            </Modal.Footer>
          </Modal>
  )
}

export default DetailsCard