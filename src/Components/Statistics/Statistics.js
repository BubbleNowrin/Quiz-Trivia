import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'



const Statistics = () => {
    const quizzesData = useLoaderData();
    const quizzes = quizzesData.data;
    // console.log(quizzes);
    return (
        <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center min-vh-100'>
            <div className='mt-5 me-3'>
                <AreaChart width={350} height={250} data={quizzes}
                    margin={{ top: 50, right: 20, left: 5, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </div>
            <div className='mt-5 me-3'>
                <AreaChart
                    width={350}
                    height={250}
                    data={quizzes}
                    margin={{
                        top: 50, right: 20, bottom: 0, left: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Area dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    <Tooltip />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;