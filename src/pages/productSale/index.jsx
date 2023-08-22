import React, { useState } from 'react';
import { Pagination } from 'antd';
import style from '../product.module.css';
import Link from 'next/link';
import axiosClient from '@/libraries/axiosClient';
import Navbar from '../../components/Navbar/navbar';
import { Rate } from 'antd';
import Footer from '@/components/Footer/footer'

const desc = [];

function Hotsale({ productsSaleFull }) {
    const [value, setValue] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = productsSaleFull.slice(startIndex, endIndex);

    return (
        <div>
            <Navbar />
            <div className={style.sp}>
                <div className={style.headline}>
                    <h1 className={style.title}>Top Sale</h1>
                </div>

                {productsToShow.length > 0 ? (
                    <div className={style.wrapper}>
                        {productsToShow.map((product) => (
                            <Link key={product._id} href={`/product/${product._id}`} passHref>
                                <div className={style.product}>
                                    <div className={style.saleOff}>
                                        <span className={style.saleOffPercent}>-{product.discount}%</span>
                                    </div>
                                    <img src={product.img} />
                                    <div className="product-info">
                                        <h4 className={style.productTitle}>{product.name}</h4>
                                        <p className={style.productPrice}>${product.discountedPrice}
                                            <del>${product.price}</del></p>
                                        <span>
                                            <Rate tooltips={desc} onChange={setValue} value={value} />
                                            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <small>Không có sản phẩm</small>
                )}

                <Pagination
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={productsSaleFull.length}
                    onChange={handlePageChange}
                />
            </div>
            <Footer />

        </div>
    );
}

export default Hotsale;

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
    try {
        const responseSale = await axiosClient.get('questions/hotSaleFull');

        return {
            props: {
                productsSaleFull: responseSale.data.payload,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
