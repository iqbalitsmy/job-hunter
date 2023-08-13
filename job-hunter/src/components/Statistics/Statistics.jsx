import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
const data = [
    {
        name: 'Assignment 1',
        marks: 590,
    },
    {
        name: 'Assignment 2',
        marks: 868,
    },
    {
        name: 'Assignment 3',
        marks: 1397,
    },
    {
        name: 'Assignment 4',
        marks: 1480,
    },
    {
        name: 'Assignment 5',
        marks: 1520,
    },
    {
        name: 'Assignment 6',
        marks: 1400,
    },
    {
        name: 'Assignment 7',
        marks: 800,
    },
    {
        name: 'Assignment 8',
        marks: 1400,
    },
    {
        name: 'Assignment 9',
        marks: 300,
    },
];

const Statistics = () => {
    return (
        <section className='container mx-auto'>
            <div className='mt-11'>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="marks" stroke="#ff7300" />

                </ComposedChart>
            </div>
            <h1 className='text-red-600 mt-5 font-semibold bg-yellow-200 p-2'>I have not yet submitted an assignment due to starting this course later. Unfortunately, I mistakenly submitted a random link instead of assignment link.</h1>
        </section>
    );
};

export default Statistics;