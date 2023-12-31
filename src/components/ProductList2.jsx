import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import { Row } from 'react-bootstrap';
import ISkeleton from './ISkeleton';
import { Button1 } from '../styles/Buttons';

const ProductList = (props) => {

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
                props.isLoading
                    ? <ISkeleton ItemCount={10} />
                    : <Row className={`${isLargeScreen? "g-4" : "g-2"}`}>
                        {
                            props.data.map((item, index) => {
                                return (
                                    <div key={index} className="col-6 col-md-4 col-sm-6">
                                        <ProductCard data={item} isLargeScreen={isLargeScreen} />
                                    </div>
                                )
                            })
                        }
                    </Row>
            }

        </div>
    )
}

export default ProductList;