import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Component3() {
    const [count, setCount] = useState('');
    const [showNewSection, setShowNewSection] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Number of items per page
    const countdownRef = useRef(null);

    const handleChange = (event) => {
        setCount(event.target.value); 
    };

    const handleSubmit = () => {
        if (!count || isNaN(count)) {
            alert('Please enter a valid number.');
        } else {
            const countdown = parseInt(count);

            let timer = countdown;
            toast.success(`${timer} : 1`, {
                position: "bottom-center",
                autoClose: 0,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
                toastId: 'countdown-toast' 
            });

            countdownRef.current = setInterval(() => {
                timer--;
                if (timer >= 0) {
                    toast.update('countdown-toast', {
                        render: `${timer} : 1`,
                        autoClose: 0 
                    });
                } else {
                    clearInterval(countdownRef.current);
                    toast.dismiss('countdown-toast');
                    setShowNewSection(true);
                }
            }, 1000);
        }
    };

    useEffect(() => {
        axios.get('https://api.knowmee.co/api/v1/master/get-country-list')
            .then((res) => {
                setData(res.data.responseData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handlePrevious = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    // Logic to get current items based on currentPage
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="d-flex flex-column">
            <ToastContainer />
            <main className="container mt-4 p-5">
                {!showNewSection && ( 
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="customToastText" className="mb-3 w-75">
                                Enter Countdown Time
                            </label>
                            <div className="d-flex align-items-center mb-3">
                                <input
                                    type="number"
                                    id="customToastText"
                                    placeholder='Enter Here'
                                    className="form-control me-2 mb-2 mb-md-0"
                                    style={{ flex: 1 }}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="btn mt-3 w-100 btnbutton" onClick={handleSubmit}>
                                Start Timer
                            </button>
                        </div>
                    </div>
                )}
            </main>
            {showNewSection && ( 
                <section className="p-3">
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-success' onClick={handlePrevious} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <button className='btn btn-success ms-3' onClick={handleNext} disabled={currentItems.length < itemsPerPage}>
                            Next
                        </button>
                    </div>
                    <ul type="none">
                        {currentItems.map((val, i) => (
                            <li key={i}><p className='fw-bold'>{val.country_name}</p></li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

export default Component3;
