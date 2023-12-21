import React, { useState, useEffect } from 'react';
import ProductCard from './CartCard';
import { Row } from 'react-bootstrap';
import ISkeleton from './ISkeleton';
import { Button1 } from '../styles/Buttons';
import { Link } from 'react-router-dom';

const CartList = (props) => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 576);

    useEffect(() => {
        // Add a window resize event listener to update the screen size
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 576);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className=''>
            {
                props.isDesc
                    ? <center>
                        <h1 className='heading font-600 title'>{props.name}</h1>
                        <p>{props.desc}</p>
                    </center>
                    : ""
            }

            {
                props.isLoading
                    ? <ISkeleton ItemCount={10} />
                    : <Row className={`${isLargeScreen ? "g-4" : "g-2"}`}>
                        {
                            props.data.map((item, index) => {
                                return (
                                    <div key={index} className="col-12">
                                        <ProductCard type={props.type} data={item} isLargeScreen={isLargeScreen} />
                                    </div>
                                )
                            })
                        }
                    </Row>
            }
            {
                props.isLoadMoreBtn
                    ? <center className='mt-4'>
                        <Link to={`products/${props.LoadMoreData}/${props.name}`}>
                            <Button1>Load More</Button1>
                        </Link>
                    </center>
                    : <></>
            }
        </div>
    )
}

export default CartList;