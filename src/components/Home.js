import React from 'react'
import { useEffect, useState } from 'react';
import ShowData from './ShowData';

export default function Home() {
    const [show, setShow] = useState([])

    useEffect(() => {
        fetchData();

    }, [])

    // Fetch the Data from API 
    async function fetchData() {
        let data = await fetch('https://api.tvmaze.com/search/shows?q=all');
        data = await data.json();
        console.log(data);
        if (data.length > 0) {
            setShow(data)
        }
    }

    return (
        <>
            <div className="App">
                <div className="container my-3">
                    <div className="jumbotron jumbotron-fluid mb-3">
                        <div className="container p-3" style={{ backgroundColor: "#4a95aa" }} >
                            <h1 className="display-4">Fetch Data</h1>
                            <p className="lead">This API includes the details of various shows with their timing and other details</p>
                        </div>
                    </div>

                    {/* Data from API */}

                    <table className='table mt-5 table-striped table-hover table-bordered'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>ID</th>
                                <th>Show Name</th>
                                <th>Language</th>
                                <th>Geners</th>
                                <th>Ratings</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Called this Component to display the data from API in form of Array */}
                            <ShowData show={show}></ShowData>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}
