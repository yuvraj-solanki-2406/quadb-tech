import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function ViewDetails() {

    const settings = {
        lazyload: true,
        nav: false,
        mouseDrag: true
    };

    const { id } = useParams();

    const [showdetails, setshowdetails] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')
    const [day, setday] = useState('')
    const [channel, setChannel] = useState('')

    useEffect(() => {
        fetchData();

    }, '')

    // Fetch the Data from API based on id
    async function fetchData() {
        let data = await fetch(`https://api.tvmaze.com/shows/${id}`);
        data = await data.json();
        // console.log(data);

        setshowdetails(data)
        setImage(data.image.original)
        setTime(data.schedule.time)
        setday(data.schedule.days)
        setChannel(data.network.name)
    }

    // const summary = showdetails.summary.replace(/<\/?[^>]+(>|$)/g, '');

    return (
        <>
            <div className="container m-5 p-2">
                <div className="row col-12">
                    {/* For Showing Image */}
                    <div className="col-md-5 col-sm-12">
                        <img src={image} alt={showdetails.name} width={"100%"} height={"70%"} />
                    </div>

                    {/* For Showing other content of the API */}
                    <div className="col-md-7 col-sm-12 card-shadow rounded">
                        <div className="card p-3">
                            <div className="row">
                                <div className="col-md-6 col-sm-10 my-3">
                                    <h5 className='title'>Show Name: </h5>
                                    <h6 className='content'> {showdetails.name} </h6>
                                </div>
                                <div className="col-md-6 col-sm-10 my-3">
                                    <h5 className='title'>Show Type: </h5>
                                    <h6 className='content'> {showdetails.type} </h6>
                                </div>
                                <div className="col-md-6 col-sm-10 my-3">
                                    <h5 className='title'>Show Language: </h5>
                                    <h6 className='content'> {showdetails.language} </h6>
                                </div>
                                <div className="col-md-6 col-sm-10 my-3">
                                    <h5 className='title'>Show Geners: </h5>
                                    <h6 className='content'> {showdetails.genres} </h6>
                                </div>
                                <div className="col-md-6 col-sm-10 my-3">
                                    <h5 className='title'>Show Timimgs: </h5>
                                    <h6 className='content'> {time} on {day} </h6>
                                </div>
                                <div className="col-md-6 col-sm-10 my-3">
                                    <h5 className='title'>Show Channel: </h5>
                                    <h6 className='content'> {channel} </h6>
                                </div>
                                <div className="col-md-12 col-sm-12 my-3">
                                    <h5 style={{ color: "blue" }}>Show Summary</h5>
                                    <h6 style={{ textAlign: "justify" }}> {showdetails.summary} </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
