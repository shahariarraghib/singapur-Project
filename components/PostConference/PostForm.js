import React, { useRef, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import ConfirmSms from "../Exhibitors/Form/ConfirmSms";
import PaymentForm from "../Payment/PaymentForm";
import PostPayment from "./PostPayment";
import { BsArrowRight} from "react-icons/bs"

const PostForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const paragraph = [
        {
            para:"Regular Price: $481.50 (inclusive of GST)"
        },
        {
            para:"Conference delegate promo: $385.20 (inclusive of GST)"
        },
        {
            para:"Kindly ensure all the details you have provided is accurate as it will be reflected in the invoice."
        },
    ]
    const options = [
        {
          label: "Credit / Debit card",
          name: "option1",
        },
        {
          label: "Pay now / Bank transfer",
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

  //  api chilling

  const [radioCondition, setRedioCondition] = useState(0)
  const [firstFormValue, setFirstFormValue] = useState([])
  console.log("setFirstFormValue", firstFormValue)
  const emailAddress= useRef(null); 
  const Company_NameRef= useRef(null);  
  const nameInputRef= useRef(null);
  const designationInputRef = useRef(null);
  const promoCodeRef = useRef(null);

  const saveDataFormFirst = (e) =>{
    e.preventDefault();

    const name = nameInputRef.current.value;
    const email = nameInputRef.current.value;
    const company_name = Company_NameRef.current.value;
    const designation = designationInputRef.current.value;
    const promo_code = promoCodeRef.current.value;

    const firstForm = {email, company_name, name, designation, promo_code }
    setFirstFormValue(firstForm)
   
    NextHandler()
  }


  const saveDataFormSecond = (e) =>{
  e.preventDefault();
     const payment_method = radioCondition;

     const valueFromFirstFormArray = [firstFormValue]
     let oldVal = [];
     oldVal.push(...valueFromFirstFormArray, payment_method );
     setFirstFormValue(oldVal);

     console.log('lets see',firstFormValue)

     const name = firstFormValue[0]?.name;
     const email = firstFormValue[0]?.email;
     const company_name = firstFormValue[0]?.company_name;
     const designation = firstFormValue[0]?.designation;
     const promo_code = firstFormValue[0]?.promo_code;
     const status = 1;
     const never_give_password = "never_give_password";
     const created_at = "2022-12-05T22:36:32.000000Z";
     const updated_at = "2022-12-05T22:36:32.000000Z";
    

     const finalFormValueForDataBaseInput = {name, email, company_name, designation, promo_code, status, never_give_password, created_at, updated_at, payment_method}
     console.log(finalFormValueForDataBaseInput)

     const url =  process.env.NEXT_PUBLIC_API_LOCAL;
     fetch(`${url}/api/post-conference-registration`, {
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
      <h2 className="accomodation_bluetitle text-center mb-5">
        Fill up the form
      </h2>
      {steeper === 0 ? (
           <Form onSubmit={saveDataFormFirst}>
           <div className="row g-5">
             <div className="col-12 col-lg-6">
               <Form.Group className="mb-5" controlId="formBasicEmail">
                 <Form.Label className="fw-bold mb-3">Name</Form.Label>
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
                   id="designationInput"
                   ref={designationInputRef}
                 />
               </Form.Group>
               <Form.Group className="mb-5" controlId="formBasicPassword">
                 <Form.Label className="fw-bold mb-3">Promo code</Form.Label>
                 <Form.Control
                   className="inputField border-0"
                   type="number"
                   placeholder="Enter your answer"
                   id="promoCode"
                   ref={promoCodeRef}
                 />
               </Form.Group>
             </div>
             <div className="col-12 col-lg-6">
               <Form.Group className="mb-5" controlId="formBasicEmail">
                 <Form.Label className="fw-bold mb-3">Email address</Form.Label>
                 <Form.Control
                   className="inputField border-0"
                   type="email"
                   placeholder="Enter your answer"
                   id="designationInput"
                   ref={emailAddress}
                 />
               </Form.Group>
   
               <Form.Group className="mb-5" controlId="formBasicPassword">
                 <Form.Label className="fw-bold mb-3">Company</Form.Label>
                 <Form.Control
                   className="inputField border-0"
                   type="text"
                   placeholder="Enter your answer"

                   id="company"
                   ref={Company_NameRef}
                 />
               </Form.Group>
             </div>
           </div>
   
           <div className="d-flex justify-content-between mt-5">
             <Button className="inputField border-0 text-muted px-5">
               Save as Draft
             </Button>
             {/* onClick={NextHandler} */}
             <Button  className="primary__btn arrow__btn arrow__btn6 text-white fw-bold" type="submit">Next <BsArrowRight/></Button>
           </div>
         </Form>
          ) : (
            <Container>
            <h2 className='accomodation_bluetitle mb-3'>Payment</h2>
            <div>
                {
                    paragraph.map((p,index)=><p key={index}
                    className="radioOption">
                        {p.para}
                    </p>)
                }
            </div>
            <div className="mb-5">
          <p className="fw-bold">Select your payment method</p>
          <div className='d-flex flex-column flex-lg-row'>

          {options.map((option, index) => (
               
               <div key={index} className="d-flex mb-3 me-4">
  
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioOptions"  value={option.label} onClick={() => setRedioCondition(option.label)}/>
                <label class="form-check-label" for="inlineRadio1">{option.label}</label>
                </div>
  
      
              </div>
  
                ))}
          {/* {options.map((option, index) => (
            <div key={index} className="d-flex mb-3 me-4">
              <Form.Check
                className="radioOption"
                label={option.label}
                name={option.name}
                type="radio"
              />
            </div>
          ))} */}
          </div>
          <div className="d-flex justify-content-between mt-5">
          {steeper === 0 ? null : (
            <Button  onClick={prevHandler} className="inputField border-0 text-muted px-5" >
            Back
          </Button>
          )}
{/* onClick={handleShow} */}
          <div >
            <Button className="primary__btn text-white fw-bold" onClick={saveDataFormSecond}>
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
        </div>
        </Container>
          )}

     
    </Container>
  );
};

export default PostForm;
