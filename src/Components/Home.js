import React from 'react';
import './home.css'; 
import Chart from './Chart'
import Feature from './Feature'
import HomeCard from './HomeCard';
const Home = () => {
    return (
        <div className='Home'>
            <div className="homecontainer">     
                <div className="CardPanel">
                    <HomeCard/>
                    {/* <CardPanel type='computer' />       
                    <CardPanel type='mobile' />
                    <CardPanel type='laptop' />
                    <CardPanel type='earning' /> */}
                </div>
                <div className="charts">
                    <Chart  />
                    <Feature  />

                </div>


            </div>


        </div>
    )
}

export default Home