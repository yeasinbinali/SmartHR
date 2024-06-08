import React from 'react';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const FooterBar = () => {
    return (
        <Footer className='bg-gray-100 py-5'>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <Footer.Title className='text-black' title="Company" />
                        <Footer.LinkGroup col>
                            <Footer.Link className='text-black' href="#">About</Footer.Link>
                            <Footer.Link className='text-black' href="#">Careers</Footer.Link>
                            <Footer.Link className="text-black" href="#">Brand Center</Footer.Link>
                            <Footer.Link className="text-black" href="#">Blog</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title className='text-black' title="help center" />
                        <Footer.LinkGroup col>
                            <Footer.Link className="text-black" href="#">Discord Server</Footer.Link>
                            <Footer.Link className="text-black" href="#">Twitter</Footer.Link>
                            <Footer.Link className="text-black" href="#">Facebook</Footer.Link>
                            <Footer.Link className="text-black" href="#">Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title className='text-black' title="legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link className="text-black" href="#">Privacy Policy</Footer.Link>
                            <Footer.Link className="text-black" href="#">Licensing</Footer.Link>
                            <Footer.Link className="text-black" href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title className='text-black' title="download" />
                        <Footer.LinkGroup col>
                            <Footer.Link className="text-black" href="#">iOS</Footer.Link>
                            <Footer.Link className="text-black" href="#">Android</Footer.Link>
                            <Footer.Link className="text-black" href="#">Windows</Footer.Link>
                            <Footer.Link className="text-black" href="#">MacOS</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright className='text-black' href="#" by="SmartHR™" year={2028} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon className='text-black' href="#" icon={BsFacebook} />
                        <Footer.Icon className='text-black' href="#" icon={BsInstagram} />
                        <Footer.Icon className='text-black' href="#" icon={BsTwitter} />
                        <Footer.Icon className='text-black' href="#" icon={BsGithub} />
                        <Footer.Icon className='text-black' href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterBar;