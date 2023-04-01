import { useEffect, useState } from "react"

const Island = () => {
    let [places,setPlaces]=useState([])

    

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2002/places')
            let data=await response.json()
            setPlaces(data)
        }
        fetchData()
    },[places])

    return (
        <div className="island">
            <div className="package " style={{ textAlign: 'center' }}>
                <h1>Best Packages For You</h1>
                <p>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
                <div className="box">

                </div>

            </div>
            <div className="pack_img d-flex justify-content-evenly">
                <div className="p1 p-3">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.OumNJkV-q1ikRGsmnC4jmAHaEV&pid=Api&P=0" height={250} alt="" />
                    <h6>Indonesia</h6>
                    <p>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
                <div className="p2 p-3 ms-5 ">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.B4iOJcri5LJDjVKTQCOPaQHaFj&pid=Api&P=0" height={250} alt="" />
                    <h6>Indonesia</h6>
                    <p>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
                <div className="p3 p-3">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.vQFPQ5Klene-rHjzKFHczwHaEc&pid=Api&P=0" height={250} alt="" />
                    <h6>Indonesia</h6>
                    <p>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
                    <button className="btn btn-primary">Book Now</button>
                </div>


            </div>
            <div className="btn">
                <button className="btn btn-outline-primary" >Discover More</button>
            </div>
            <div className="ise1" style={{ textAlign: 'center' }}>
                <h2>Island Stays</h2>
                <p>One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious <br />
                    modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</p>
            </div>
            <div className="places d-flex flex-wrap 80ms-5 ">
                {places.map((data)=>(
                    <div className="info d-flex ">
                      <div className="main w-50">
                        <div className="img ms-5 ps-3 ">
                            <img height={400} width={600} src={data.imgUrl} alt="" />
                        </div>
                        <div className="desc ms-5 ps-3  ">
                        <h6>{data.title}</h6>
                            <p>{data.description}</p>
                            <p>{data.rating}</p>
                        </div>
                        </div>
                      
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Island;