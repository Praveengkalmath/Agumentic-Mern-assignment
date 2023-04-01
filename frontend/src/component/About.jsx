import Carousel from 'react-bootstrap/Carousel';
import '../Styles/About.css'

const About = () => {
    return (
        <div className="about">
            <div className="img">
                {/* <img src="https://fvmstatic.s3.amazonaws.com/maps/m/WRLD-EPS-02-8001.png" className="w-100" height={700} alt="" />
                <h1 className="">About Us</h1> */}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://fvmstatic.s3.amazonaws.com/maps/m/WRLD-EPS-02-8001.png"
                            alt="First slide" height={700}
                        />
                        <Carousel.Caption>
                            <div className="side " style={{ textAlign: 'center' }}>
                                <h1 className='text-dark fs-1'><b>About Us</b></h1>



                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="ourTeam  m-4">
                <h1>Our Team</h1>
                <p>Quidam officiis similique sea ei, vel tollit indoctum</p>
                <p>efficiendi ei,at nihil tantas platonem eos</p>
            </div>
            <div className="text d-flex m-4 p-4">
                <div className="img1">
                    <img height="400px" src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="text1 p-4">
                    <h1 className='text-primary'>Sebastian Bennett</h1>
                    <h6><b>FOUNDER, LEAD PHOTOGRAPHER, CEO</b></h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse eligendi soluta sapiente, et magni odit porro voluptatum similique fuga ipsum earum hic adipisci assumenda necessitatibus exercitationem consectetur enim perferendis!
                    Beatae labore a quasi illo hic asperiores debitis eaque incidunt perspiciatis atque similique ab sed fuga odio odit, qui molestias vitae! Nam id eum officia architecto maxime quo iste cupiditate!</p>
                </div>
            </div>
            <div className="customer  m-5">
                <div className=" ms-3">
                    <h3>What Customer's saying?</h3>
                    <p>Take a look at what our cutomers are saying. At Nature we not only <br />
                    provide you with services but also we provide you with valuable <br />
                   experiences for your valuable time</p>
                </div>
                <div className="div d-flex ">
                    <div className="c1  p-4" >
                    <img className='border border-4 border-primary rounded-4' src="https://tse3.mm.bing.net/th?id=OIP.kQde-mZJ0hDH6SqMui8zxAHaJ4&pid=Api&P=0" height="300px" alt="" />
                    </div>
                    <div className="c2 p-4">
                    <img className='rounded-4' src="https://tse3.mm.bing.net/th?id=OIP.O9GnGIUMhqJ4IBmU52lVGwHaKn&pid=Api&P=0"  height="300px" alt="" />

                    </div>
                    <div className="c3 p-4">
                        <img className='rounded-4' src="https://tse3.mm.bing.net/th?id=OIP.O9GnGIUMhqJ4IBmU52lVGwHaKn&pid=Api&P=0"  height="300px" alt="" />
                    </div>
                    <div className="c4 p-4">
                        <img className='rounded-4' src="https://tse3.mm.bing.net/th?id=OIP.kQde-mZJ0hDH6SqMui8zxAHaJ4&pid=Api&P=0"  height="300px" alt="" />
                    </div>
                </div>
            </div>
            <div className="certificate">
                <div className="cer_text w-50 ">
                <h3>Certificate</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta repellat dolorum non molestiae, sequi, maxime voluptas adipisci facilis harum optio, placeat blanditiis consectetur eos error autem .</p>
                </div>
                <div className="eimg d-flex flex-wrap m-5 p-4">
                    <div className="e1">
                        <img className='p-4 m-4'width={600} src="https://tse3.mm.bing.net/th?id=OIP.fhc4_jfHoHLV8aVnhVwE2wHaFj&pid=Api&P=0" alt="" />
                    </div>
                    <div className="e2">
                        <img className='p-4 m-4' width={600} src="https://tse3.mm.bing.net/th?id=OIP.fhc4_jfHoHLV8aVnhVwE2wHaFj&pid=Api&P=0" alt="" />
                    </div>
                    <div className="e3">
                        <img className='p-4 m-4' width={600} src="https://tse3.mm.bing.net/th?id=OIP.fhc4_jfHoHLV8aVnhVwE2wHaFj&pid=Api&P=0" alt="" />
                    </div>
                    <div className="e4">
                        <img className='p-4 m-4'width={600} src="https://tse3.mm.bing.net/th?id=OIP.fhc4_jfHoHLV8aVnhVwE2wHaFj&pid=Api&P=0" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;