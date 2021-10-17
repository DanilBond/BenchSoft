import React from 'react';
import Service_block_left from './Service_block_left/Service_block_left';
import Service_block_right from './Service_block_right/Service_block_right';

const Service = () => {
    return (
        <div className="service">
            <h1 className="service_title"> Our services </h1>

            <div className="service_blocks">
                <Service_block_left title="Web platforms" description="E-commerce. E-learning. CRM systems. Admin dashboards. HR Management systems. Blogs"/>
                <Service_block_right title="Mobile applications" description="Cross platform mobile applications for IOS and Android"/>

                <Service_block_left title="Landing pages" description="Beautiful and stylish landing pages for your business"/>
                <Service_block_right title="UI & UX design" description="Creative design for any product"/>

                <Service_block_left title="Staff augmentation" description="Experieced backend and frontend develops for any kind of project"/>
                <Service_block_right title="MVP development" description="Test your business idea with minimum valuableTest your business idea with minimum valuable product"/>
            </div>  
        </div>
    );
};

export default Service;