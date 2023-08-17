import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Material() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  return (
    <div  className = 'container2'>
    <Form onSubmit={handleSubmit}>
    <h1>Contact</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <input 
        type="emil" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone number:</Form.Label>
        <input 
        type="number" 
        name="number" 
        value={inputs.number || ""} 
        onChange={handleChange}
      />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Enter Location:</Form.Label>
        <input 
        type="text" 
        name="location" 
        value={inputs.text || ""} 
        onChange={handleChange}
      />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
      submit
      </Button>
    </Form>
    </div>
  );
}

export default Material;