import React, { useRef, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import ConfirmSms from "../Exhibitors/Form/ConfirmSms";
import PaymentForm from "../Payment/PaymentForm";
import PostPayment from "../PostConference/PostPayment";

const RegistrationForm = () => {
  const options = [
    {
      label: "Association Member",
      name: "option1",
    },
    {
      label: "Student",
      name: "option2",
    },
    {
      label: "Not Applicable",
      name: "option3",
    },
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const option = [
    {
      label: "Corporate",
      name: "option1",
    },
    {
      label: "Self Sponsored",
      name: "option2",
    },
  ];
  // form show function

  const [steeper, setSteeper] = useState(0);

  const NextHandler = () => {
    setSteeper(steeper + 1);
  };
  const prevHandler = () => {
    steeper < 0 && setSteeper(0);
    setSteeper(steeper - 1);
  };

  // API calling

 const [radioCondition, setRedioCondition] = useState(0)
  const [firstFormValue, setFirstFormValue] = useState([]);

  const salutationref = useRef(null);

  const emailAddress= useRef(null); 
  const Company_Name= useRef(null);  
  const nameInputRef= useRef(null);
  const designationInputRef = useRef(null);
  const contactInputRef = useRef(null);

  const groupref = useRef(null);
  
  const attendeesref = useRef(null);
  const[radioValue, setRedioValue] = useState('')

  const promoCodeRef = useRef(null);
  const[secondradioValue, setSecondRedioValue] = useState('')
  const billingAddressRef = useRef(null);



  const saveDataFormFirst = (e) =>{
    e.preventDefault();
    const salutation = salutationref.current.value;
    const email = emailAddress.current.value;
    const company_name = Company_Name.current.value;
    const name = nameInputRef.current.value;
    const designation = designationInputRef.current.value;
    const contact_number = contactInputRef.current.value;
    const membership_type = radioValue
    const access_type = groupref.current.value;
    const attendant_number = attendeesref.current.value;
   
    const firstForm = {email, company_name,name,designation,contact_number, membership_type, salutation, access_type, attendant_number}
  
    setFirstFormValue(firstForm)
   
    NextHandler()
  }

  const saveDataFormSecond = (e) =>{
    e.preventDefault();
    const referral = promoCodeRef.current.value;
    const payment_method = secondradioValue;
    const billing_address = billingAddressRef.current.value;
    const secondForm = {referral , billing_address, payment_method}
   

     const valueFromFirstFormArray = [firstFormValue]
     let oldVal = [];
     oldVal.push(...valueFromFirstFormArray, secondForm );
     setFirstFormValue(oldVal);

     console.log('lets see',oldVal)

     const name = oldVal[0]?.name;
      const email = oldVal[0]?.email;
      const email_verified_at = "null";
      const salutation = oldVal[0].salutation;
      const company_name = oldVal[0]?.company_name;
      const designation = "asdffhfghf";
      const contact_number = oldVal[0]?.contact_number;
      const membership_type = oldVal[0]?.membership_type;
      const access_type = oldVal[0]?.access_type;
      const attendant_number = "";    
      const status = 1;
      const never_give_password = "never_give_password";
      const created_at = "2022-12-05T22:36:32.000000Z";
      const updated_at = "2022-12-05T22:36:32.000000Z";
  

      const finalFormValueForDataBaseInput = {name, email,email_verified_at, salutation,company_name,designation, contact_number,membership_type, access_type, attendant_number,status,never_give_password, created_at,updated_at, referral,payment_method,billing_address}
  
    console.log(finalFormValueForDataBaseInput)

    const url =  process.env.NEXT_PUBLIC_API_LOCAL;
    fetch(`${url}/api/registration`, {
      method: "POST",
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify(finalFormValueForDataBaseInput)
  })
      .then(resp => resp.json())
      .then(data => {
          console.log(data)
      });

  
     handleShow()
  }

  return (
    <Container className="sub_section_gap">
      {steeper === 0 ? (
        <Form onSubmit={saveDataFormFirst}>
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">Salutation</Form.Label>
                <Form.Select
                  className="mb-5 inputField border-0"
                  aria-label="Default select example"
                  id="salutation"
                  ref={salutationref}
                >
                  <option >Enter your answer</option>

                  <option value="One">One</option>

                  <option value="Two" >Two</option>
                  <option value="Three">Three</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Email</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="email"
                  placeholder="Enter your Email"
                  id="emailAddress"
                  ref={emailAddress}
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Company Name</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your Answer"
                  id="company_Name"
                  ref={Company_Name}
                />
              </Form.Group>
              <div>
                <p className="fw-bold">Membership Type</p>
                <div className="d-flex flex-column flex-lg-row">
                {options.map((option, index) => (
               
               <div key={index} className="d-flex mb-3 me-4">
  
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioOptions"  value={option.label} onClick={() => setRedioValue(option.label, (setRedioCondition(1)))}/>
                <label class="form-check-label" for="inlineRadio1">{option.label}</label>
                </div>
  
      
              </div>
  
                ))} 
                </div>
              </div>
              {radioCondition? <><Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">
                  Are you registering Individually or for a group?
                </Form.Label>
                <Form.Select
                  className="mb-5 inputField border-0"
                  aria-label="Default select example"
                  id="group"
                  ref={groupref}
                  
                >
                  <option>Select your answer</option>
                  <option value="Individual">Individual</option>
                  <option value="Group"> Group</option>
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">
                  How many attendees are there in your group?
                </Form.Label>
                <Form.Select
                  className="mb-5 inputField border-0"
                  aria-label="Default select example"
                  id="attendees"
                  ref={attendeesref}
                >
                  <option>Select your answer</option>
                  <option value="1">4</option>
                  <option value="2">5</option>
                  <option value="2">7</option>
                  <option value="2">9</option>
                </Form.Select>
              </Form.Group></>: <></>}
            </div>
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">
                  Name (First & Last Name only)
                </Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
                  id="name"
                  ref={nameInputRef}
                />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Designation</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
                  id="designation"
                  ref={designationInputRef}
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Contact Number</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="number"
                  placeholder="Enter your answer"
                  id="contact"
                  ref={contactInputRef}
                />
              </Form.Group>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-5">
            <Button className="inputField border-0 text-muted px-5" type="submit">
              Save as Draft
            </Button>

            <Button
             
              className="learn_more_btn text-white fw-bold"
              type="submit"
            >
              Next
            </Button>
          </div>
        </Form>
      ) : (
        
        <Container className="section_gap">
          <div className="mb-5">
            <h2 className="accomodation_bluetitle ">Payment</h2>
            <p className="radioOption">
              Kindly ensure all the details you have provided is accurate as it
              will be reflected in the invoice.
            </p>
          </div>
          {/* onSubmit={saveDataFormSecond} */}
          <Form onSubmit={saveDataFormSecond}>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Referral/Promo Code</Form.Label>{" "}
              <br />
              <Form.Label className="mb-3 radioOption">
                Please enter any promo/ referral code if applicable
              </Form.Label>
              <Form.Control
                className="inputField border-0"
                type="text"
                placeholder="Enter your answer"
                id="promoCode"
                ref={promoCodeRef}
              />
            </Form.Group>
            <div className="mb-5">
              <p className="fw-bold">Payment Method</p>
              <div className="d-flex flex-column flex-lg-row">

              {option.map((optn, index) => (
               
               <div key={index} className="d-flex mb-3 me-4">
  
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioOptions"  value={optn.label} onClick={() => setSecondRedioValue(optn.label)}/>
                <label class="form-check-label" for="inlineRadio1">{optn.label}</label>
                </div>
  
      
              </div>
  
                ))} 


              </div>
            </div>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="fw-bold">
                Invoice Attention to & Billing Address
              </Form.Label>{" "}
              <br />
              <Form.Label className="mb-3 radioOption">
                Kindly make sure the details provided are correct for us to
                generate the invoice where required.
              </Form.Label>
              <Form.Control
                className="textField border-0"
                type="text"
                as="textarea"
                rows={6}
                placeholder="Enter your answer"
                id="billingAddress"
                ref={billingAddressRef}
              />
            </Form.Group>
            <div className="d-flex justify-content-between mt-5">
              {steeper === 0 ? null : (
                <Button
                  onClick={prevHandler}
                  className="inputField border-0 text-muted px-5"
                >
                  Back
                </Button>
              )}

              <div >
                <Button className="learn_more_btn text-white fw-bold" type="submit">
                  Submit
                </Button>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="border-0" closeButton></Modal.Header>
                <Modal.Body>
                  <ConfirmSms />
                </Modal.Body>
              </Modal>
            </div>
            </Form>
        </Container>
        
      )}
    </Container>
  );
};

export default RegistrationForm;
