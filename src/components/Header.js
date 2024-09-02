import React from 'react'
import '../css/Header.css'


import { Button, Form, Stack } from 'react-bootstrap'
import { FaUser, FaHandPointRight } from "react-icons/fa";

export default function Header() {
    return (
        <>
            


            <Stack direction="horizontal" gap={2} className='bg-light borderd' px-4>
                <div className='p-2'>Master Data Management System</div>
                
                
                <div className="p-2 ms-auto h6">Select Application <FaHandPointRight /></div>
                    <div className="p-2"> <Form.Select aria-label="Default select example" className='witih'>
                        <option> Select Option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select></div>
                <div className="p-2"> <Button variant="primary" className='inlined' type="submit">
                        Submit
                    </Button>
                    </div>  
                <div className="p-2">  <Button variant="outline-info m-0"><FaUser  /> Raj Kumar</Button>
                    </div>





                </Stack>


         
















        </>
    )
}
