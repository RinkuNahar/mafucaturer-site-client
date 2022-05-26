import React from 'react';
import test from '../../../images/home/test.jpg'
const Speciality = () => {
    return (

             <div >
                <div height='200px' className="hero min-h-screen mt-10" style={{'backgroundColor':'black', }}>
                    <div className="hero-content flex-col lg:flex-row md:flex-row text-white">
                        <img width='700px' height='400px'  src={test} />
                        <div className=' pl-16'>
                            <h1 className="text-5xl font-bold pl-16 text-white">Priority in testing tools ever</h1>
                            <p className="py-6 pl-16 text-white">Manufacturing Services means the manufacturing, quality control, quality assurance and stability testing, packaging, labeling and related services, as contemplated in this Agreement, required to produce Products and from Active Material and Components, and Finished Goods from Products.</p>
                            <p className="py-6 pl-16 text-white">As manufacturers automate an increasing number of processes, this includes the testing of applications’ performance. Automation testing, or using an automation tool to execute a test instead of having a human manually test performance, has many proven benefits as long as the tool fits the automation requirements. Yet, many quality assurance managers and engineers have been slow to incorporate automation into their testing methods, citing reasons such as high costs and use of resources for their hesitation.</p>
                         
                        </div>
                    </div>
                </div>
            </div>
   
    );
};

export default Speciality;