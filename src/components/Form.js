import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function BankForm() {
  const [Account, setAccount] = useState("");
  const [Amount, setAmount] = useState("");
  return (
<div  className = 'container2'>
    <Form>
      <h1>Bank</h1>
      <Form.Select className="mb-3" aria-label="Default select example">

        <option>select bank account</option>
        <option value="1">Awash</option>
        <option value="2">buna </option>
        <option value="3"></option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Account Number</Form.Label>
        <Form.Control type="number" value={Account} placeholder="Enter account" onChange={(e)=>setAccount(e.target.value)}  />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" value={Amount} placeholder="Amount" onChange={(e)=>setAmount(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    </div>
  );
}
export default BankForm;

