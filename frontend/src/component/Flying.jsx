import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/Flying.css'

function Flying() {
  return (
    <div className="card p-5 border border-1 border-primary m-5" >
    <h1>When You are Flying?</h1>
   
    <Form className=' '>
        <div className="form  justify-content-evenly p-4  d-flex">
      <div className="f1 "><Form.Group className="mb-3 " controlId="text"  >
        <Form.Control type="text" placeholder="From-to" />
      </Form.Group></div>
      <div className="f2">
      <Form.Group className="mb-3" controlId="text">
        <Form.Control type="text" placeholder="Return" />
      </Form.Group>
      </div>
      <div className="f3">
      <Form.Group className="mb-3" controlId="date">
        <Form.Control type="date"   placeholder="Departure-return" />
      </Form.Group>
      </div>
      <div className="f4">
      <Form.Group className="mb-3" controlId="text">
        <Form.Control type="text" placeholder="1 Passenger,economy" />
      </Form.Group>
      </div>
      </div>

   <div className="ab mx-auto" >
   <a className='a1'  href="">+Passenger</a>
      <Button className='btn btn-primary py-3' variant="info" type="submit"> Submit Now </Button>
   </div>
    </Form>
    </div>
   
  );
}

export default Flying;