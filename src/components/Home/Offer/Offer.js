import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className='offer mt-[150px]' style={{'backgroundColor':'rgb(127, 173, 174)'}}>
            <h2 className='font-bold text-center text-3xl underline underline-offset-1 text-blue-900 py-3'>What We Offer</h2>
         <p className='p-5 text-xl text-white font-semibold'>   At Chalmers & Kubeck, we do it all. Our multi-shift operation and vast selection of in-house services and capabilities allows us to respond to customer outages faster than anybody else. We understand the financial impact that a maintenance emergency has on your bottom line and we make it our mission to get your facility back up and running in the fastest most efficient way possible. C&K is a valued service provider to many OEMs and we’re their first call during forced outages and critical path projects. They trust and depend upon us - you should too!</p>

<p className='p-5 text-xl text-white font-semibold'>Our Quality Programs and Certifications - ISO 9001:2015, 10CFR50 Appendix B, NR Certificate of Authorization, National Board Repair “R” and “VR”, ASME – “U”, “V”, “UV”, & “PP” – in conjunction with our professional affiliations and OEM relationships, serve as the foundation for our stellar reputation. The dedication and capabilities of our factory trained and certified technicians and machinists set us apart from the rest and make us best in class.</p>
<p className='p-5 text-xl text-white font-semibold'>
Say goodbye to working with multiple companies - we handle all your needs at Chalmers & Kubeck. You won't believe how much we can do from our world-class facilities throughout the eastern half of the United States!</p>

        </div>
    );
};

export default Offer;