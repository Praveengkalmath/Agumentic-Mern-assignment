import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../Styles/package.css'


function Package() {
  return (
    <div className="main   ">
    <Carousel>      
    <Carousel.Item>
        <img
          className="d-block w-100 "
          height={720} src="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=600"
         
        />
        <Carousel.Caption>
          <div className="l">
          <h3 className=' fs-1  text-center text-light'>Maldives</h3>
        <input className='p-2 rounded-5 w-75 text-center' type="text" placeholder='search here'/>
        </div>
        </Carousel.Caption>
      </Carousel.Item> 
      </Carousel> 
   
<div className="asdf d-flex col-sm-4 col-md-8 col-lg-12">
    <div className="two ms-5 col-7  ">
        <div className="a text-dark ">
          <div className="a d-flex">
        <a className='text-dark text-decoration-none ms-5' href="">OVERVIEW</a>
        <a className='text-dark ps-5 pe-5 text-decoration-none' href="">ITINERARY</a>
        <a className='text-dark text-decoration-none pe-5 me-5' href="">ADITIONAL INFORMATION</a>
       
        </div>
        
    <Card className='ms-4 mt-4 mb-4' style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1287441/pexels-photo-1287441.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </Card>

        <h1 className='ms-5'>Package Overview</h1><br />
        <p className='ms-5 w-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo soluta quod ducimus vitae, corrupti tenetur aut distinctio nisi eligendi ipsum laudantium, temporibus voluptates! Vel nulla culpa blanditiis dolorum sequi ipsum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi doloribus quas tempora magni nam quasi temporibus voluptatum eum, harum earum in a, necessitatibus velit ea dignissimos ipsum. A, eveniet incidunt!</p>
        <hr  className='w-50'/>
        <h1 className='ms-5'>Day Wise Itinery</h1>
        <div className="main1 d-flex  ms-5">
        <div className="div me-5 ">
          <button className='btn btn-primary'>Day1</button> 
          </div>
          <div className="card w-50 bg-light">
          <div className="info">
            <h5>ARRIVAL AT MALDIVES</h5>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magnam iure ipsum corrupti ipsa. Hic minima quasi officiis, magnam, nemo natus neque eaque at assumenda accusamus repellendus. Deleniti, soluta? Optio.</p>
          </div>
          </div>
         
        </div><br />
        <div className="main1 d-flex  ms-5">
        <div className="div me-5 ">
          <button className='btn btn-primary'>Day2</button> 
          </div>
          <div className="card w-50 bg-light">
          <div className="info">
            <h5>MALDIVES</h5>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magnam iure ipsum corrupti ipsa. Hic minima quasi officiis, magnam, nemo natus neque eaque at assumenda accusamus repellendus. Deleniti, soluta? Optio.</p>
          </div>
          </div>
         
        </div><br />
        <div className="main1 d-flex  ms-5">
        <div className="div me-5 ">
          <button className='btn btn-primary'>Day3</button> 
          </div>
          <div className="card w-50 bg-light">
          <div className="info">
            <h5>DEPARTURE AT MALDIVES</h5>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magnam iure ipsum corrupti ipsa. Hic minima quasi officiis, magnam, nemo natus neque eaque at assumenda accusamus repellendus. Deleniti, soluta? Optio.</p>
          </div>
          </div>
         
         
        </div>
        <hr className='w-50'/>
      <div className="card w-50 mb-3 bg-light">
          <h4>Additional information</h4><br />
          <h5>Inclusion</h5>
          <p className=''>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Quis, ipsam optio expedita totam ex <br /> tempore laudantium! Voluptas beatae minus sit accusantium <br /> mollitia odit iure. Fuga ab ipsa eligendi mollitia tempora!</p><br />
          </div>
          <div className="card w-50 mb-5 bg-light">
          <h5>Exclusion</h5>
          
        <p className=''>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Illum, assumenda id. Nulla  <br /> quos deserunt molestias adipisci! Quae, quas doloribus nam <br /> maiores officia, distinctio pariatur et <br /> excepturi repellat officiis id quia.</p>
        </div>
        </div>
    </div>

    <div className="three col-4">
  
    <a className='d-flex text-decoration-none text-dark fs-5 mb-3 ms-5 ps-5 align-content-end' href="">Starting from <h3 className='text-info text-decoration-none'>₹50000</h3></a>
    
    <div className="card p-4 text-bg-light">
      <h4>Want to go for a memorable Holiday?</h4>
      <p className='ms-4'>Lorem ipsum dolor sit  dllum pariatur ipsa natus </p> <br />
      
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Package Name</Form.Label>
        <Form.Control type="text" placeholder="Explore maldives " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>City of Departure</Form.Label>
        <Form.Control type="text" placeholder="enter city" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Date of Departure</Form.Label>
        <Form.Control type="date" placeholder="enter date" />
      </Form.Group>
      <div className="btn d-flex">
        <div className="o me-5 pe-5">
      <Form.Label className='ms-4'>Adult</Form.Label> <br />
    <ButtonGroup className='ms-3' aria-label="Basic example">
      <Button variant="light">-</Button>
      <Button variant="secondary">2</Button>
      <Button variant="light">+</Button>
    </ButtonGroup>
    </div>
    <div className="p ">
    <Form.Label className=''>Child</Form.Label> <br />
    <ButtonGroup aria-label="Basic example">
      <Button variant="light">-</Button>
      <Button variant="secondary">2</Button>
      <Button variant="light">+</Button>
    </ButtonGroup>
    </div>
    </div><br />
    <h5>Contact deatils ----------------------</h5> <br />
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="email" placeholder="enter email" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
        <Form.Control className='w-25' type="number" placeholder="+91" />
        <Form.Control type="number" placeholder="enter number" />
      </Form.Group>
      <button  className='w-100 btn btn-outline-primary'>Send Query</button> <br /> <br />
      <h5 className='ms-5'>-------------------OR----------------------</h5>
      <button  className='w-100 btn btn-primary'>Book Now</button>
    </Form>
    </div>

    <div className="card mt-5 col-sm-4 col-md-8 col-lg-12  bg-light p-3">
      <h2 className='ms-5 ps-5 '>FAQ</h2>
      <input className='w-100  rounded-5 mt-4 p-3 ' type="text"  placeholder='search here'/>
    <Form className='m-3'>
    <div className="card mt-1">
      <h5 className='p-2 w-100'>Try using our Tamplets!           +</h5>
    </div>
    <div className="card mt-2">
      <h5 className='p-2 w-100'>Try using our Tamplets!           +</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nemo expedita aperiam quibusdam accusamus, reiciendis voluptatibus reprehenderit doloremque repellendus nihil, doloribus, dolorem in hic tempora obcaecati animi rem veritatis labore.</p>

    </div>
    <div className="card mt-2">
      <h5 className='p-2 w-100'>Try using our Tamplets!           +</h5>
    </div>
    <div className="card mt-2">
      <h5 className='p-2  w-100'>Try using our Tamplets!           +</h5>
    </div>

   </Form>
   </div>
    </div>
    </div>















  
    </div>
  );
}

export default Package;