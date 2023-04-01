const Footer = () => {
    return (
        <div className="main bg-info h-50">
            <div className=" p-5 d-flex justify-content-evenly ">
                <div className="info w-25 text-light me-5">
                    <img height={40} src="https://www.golakshadweep.com/assets/new-theme/img/logo2.png" alt="" /> <br /> <br />

                    GoL (Go Lakshadweep) Travels <br /> Private Limited, a Government <br /> Authorized Travel Agent (ATA) is <br /> a Private Limited Company <br /> registered at Thoppumpady, Kochi,<br /> Kerala..
                </div>
                <div className="tag w-25 text-light">
                    <h1 className="fs-4">Company</h1> <br />
                    <p>Find Reservation</p>
                    <p>About us</p>
                    <p>Contact us </p> <br />
                    <img src="https://www.golakshadweep.com/assets/images/play_store.png" alt="" />

                </div>
                <div className="tag w-25 text-light">
                    <h1 className="fs-4">About</h1> <br />
                    <p>FAQ</p>
                    <p>Contact us </p>
                    <p>Terms & Condition</p>

                </div>
                <div className="contact w-25 text-light">
                    <h1 className="fs-4">Conatact Us</h1> <br />
                    <p>Pallichal Road, Pyarry Jn.,<br /> Thoppumpady, Cochin – 682 005,<br /> Kerala, India. <br /><br />

                        +91 97785 09629, +91 97783 89592 <br /><br />

                        info@golakshadweep.com</p>
                </div>

            </div>
            <hr className="text-light" />
            <p className="c text-light text-center  fs-5 p-4">Copyright © 2023 GoL Travels Private Limited., All Right Reserved.</p>

        </div>
    );
}

export default Footer;