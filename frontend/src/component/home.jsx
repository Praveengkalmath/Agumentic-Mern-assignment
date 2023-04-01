import '../Styles/home.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Flying from './Flying';
import Island from './island';

function Home() {
  return (
    <div className="home">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={720} src="https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="side " style={{textAlign:'left'}}>
        {/* <button className=' btn btn-primary text-light  p-2 ps-2 pe-4 rounded-5 fs-4 fw-1'>Visit<img className='ms-3' height={20} src="https://www.golakshadweep.com/assets/new-theme/img/visit.svg" alt="" /></button> */}
        <h1><Badge className='rounded-5 ms-4' bg="info">Visit 🧭</Badge></h1> <br />

          <h3><Badge className='fs-1' bg="">The Exoitic</Badge></h3>
          <h3><Badge className='fs-1' bg="">Lakshdweep</Badge></h3>
          <h3> <Badge className='fs-1' bg="">Island</Badge></h3>
        
          <Button className=' ms-4 ' variant="info" >Discover</Button>{' '}
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={720} src="https://images.thequint.com/thequint/2019-09/8b710543-a0c0-442f-bc6f-df93d6a8a363/iStock_153761009.jpg?rect=0%2C0%2C2121%2C1193&auto=format%2Ccompress&fmt=webp"
          alt="Second slide"
        /> 

         <Carousel.Caption>
         <div className="side " style={{textAlign:'left'}}>
        {/* <button className=' btn btn-primary text-light  p-2 ps-2 pe-4 rounded-5 fs-4 fw-1'>Visit<img className='ms-3' height={20} src="https://www.golakshadweep.com/assets/new-theme/img/visit.svg" alt="" /></button> */}
        <h1><Badge className='rounded-5 ms-4' bg="info">Visit 🧭</Badge></h1> <br />

          <h3><Badge className='fs-1' bg="">The Exoitic</Badge></h3>
          <h3><Badge className='fs-1' bg="">Lakshdweep</Badge></h3>
          <h3> <Badge className='fs-1' bg="">Island</Badge></h3>
        
          <Button className=' ms-4 ' variant="info" >Discover</Button>{' '}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={720} src="https://images.pexels.com/photos/1024973/pexels-photo-1024973.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="side " style={{textAlign:'left'}}>
        {/* <button className=' btn btn-primary text-light  p-2 ps-2 pe-4 rounded-5 fs-4 fw-1'>Visit<img className='ms-3' height={20} src="https://www.golakshadweep.com/assets/new-theme/img/visit.svg" alt="" /></button> */}
        <h1><Badge className='rounded-5 ms-4' bg="info">Visit 🧭</Badge></h1> <br />

          <h3><Badge className='fs-1' bg="">The Exoitic</Badge></h3>
          <h3><Badge className='fs-1' bg="">Lakshdweep</Badge></h3>
          <h3> <Badge className='fs-1' bg="">Island</Badge></h3>
        
          <Button className=' ms-4 ' variant="info" >Discover</Button>{' '}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
   
    <Flying/>
    <Island/>
    
   
    </div>
   

    
  );
}

export default Home;