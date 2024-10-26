import { Helmet } from "react-helmet";


const Contact = () => {
    return (
        <div>


            <div>
                <Helmet>
                    <title>  Contact Page</title>
                </Helmet>
            </div>

            <h1 className='font-bold text-center'>BuyMe.com </h1>
            <p className="p-10">
                Upazila ICT Office, Nazirpur, Pirojpur <br></br>
                Email: abulhasanevan@gmail.com<br></br>
                Mobile: 01737013139
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1873437.4013264026!2d88.44487144835423!3d23.494441040798495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffff0d76bc6f9b%3A0xd31e991cd7dc359!2zRGVwYXJ0bWVudCBvZiBJQ1QsIE5hemlycHVyLSDgpobgpocg4Ka44Ka_IOCmn-CmvyDgpoXgpqfgpr_gpqbgpqrgp43gpqTgprAsIOCmqOCmvuCmnOCmv-CmsOCmquCngeCmsA!5e0!3m2!1sen!2sbd!4v1729407529610!5m2!1sen!2sbd" ></iframe>
        </div>
    );
};

export default Contact;