import React ,{useState}from 'react'
import { Form, Row, Col, FloatingLabel, Button, Card, Table , Alert } from 'react-bootstrap';

function Input(props) {

    const [amount, setAmount] = useState("");
    const [service, setService] = useState("");
    const [customer, setCustomer] = useState("");
    const [tip, setTip] = useState([]);
    const [totalCustomer, setTotalCustomer] = useState(0);
    const [tip1, setTip1] = useState([0])



    const handlerBill = (event) => {
        setAmount(event.target.value)
    }

    const handlerService = (event) => {
        setService(event.target.value)


    }
    const handlerChange = (event) => {
        setCustomer(event.target.value)
        setTip(amount * service)
    }




    const getData = () => {
        
        props.AddCustomerName(`${customer} Offering a Tip Of - Rs.  ${tip}`);
        props.AddTip(tip);
        setCustomer("");
    }
  
    const getData1 = () => {
        setTip1(`${props.totaltip.reduce((prev, next) => prev + next)}`);
        setTotalCustomer(`${props.customername.length}`);
    }

    return (
        <>
         <div className=".bg-light">
                <div>
                <Form className="container" >
                    <Form.Group className="container mb-3" controlId="formBillAmount">
                        <h4>Enter Bill Amount</h4>
                        <br></br>
                        <Form.Control type="number" value={amount} placeholder="Enter Bill Amount" onChange={handlerBill} style={{  background: "#fff"}} />
                    </Form.Group>
                    <br></br>
                    
                </Form>

                <br></br>
                <Form className="container" >
                    <Row className="g-2">
                        <Col md>
                            <Form.Label controlId="floatingSelectGrid" label="How Was The Service" Col>
                                <h3>How was service</h3>
                                <Form.Select aria-label="Floating label select example" style={{background: "#fff" }} value={service} onChange={handlerService} >
                                    
                                    <option value="0">Choose Our Services</option>
                                    <option value="0.3">30&#37; &#45; Excellent</option>
                                    <option value="0.15">15&#37; &#45; It was OK</option>
                                    <option value="0.05">5&#37; &#45; Too Bad</option>
                                </Form.Select>
                            </Form.Label>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" >
                                <h3>Customer Name</h3>
                                <Form.Control type="text" value={customer}  placeholder="Enter Your Name" onChange={handlerChange} />
                            </FloatingLabel>
                            <br></br>
                            <br></br>
                        </Col>

                        <div className="containe">
                            <Button
                            style={{ width: "250px", fontWeight: "600"}} onClick={getData}>Add Customer</Button>
                        </div>
                    </Row>
                    <br></br>
                    

                    <div className="container">
                    <Card.Header style={{ textAlign: "center", fontSize: "30px", fontFamily: "Times New Roman', Times, serif", fontWeight: "bolder"}}>Customer List</Card.Header>
                    <br></br>

                {
                    props.customername.map(ele => (
                    <Alert variant="dark">
                    <Alert.Heading>{ele}</Alert.Heading>
                    
                    </Alert>
                ))
                        }

                    </div>

                </Form>
                <br></br>
                <hr style={{ color: "black" }}></hr>
                <br></br>

            </div>
            <div className="container d-flex justify-content-center">
                <Button variant="primary" style={{ width: "250px", fontWeight: "600" }} onClick={getData1} >Calculate Tip & Customer</Button>
            </div>
            <br></br>
            <div className="container">
                <Table striped bordered hover variant="dark" style={{ background: "#fff" }}>
                    <thead>
                        <tr>

                            <th>Total Customer</th>
                            <th>Total Tip</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>

                                <td>{totalCustomer}</td>


                                <td>
                                    Rs.{tip1}
                                </td>

                            </tr>
                        }
                    </tbody>
                </Table>
            </div>
            </div>
        </>
    )
}


export default Input
