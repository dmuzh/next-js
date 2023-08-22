import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Rate } from 'antd';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import style from './hotSale.module.css'
import Link from 'next/link';
import { RightOutlined } from '@ant-design/icons'
import axiosClient from '@/libraries/axiosClient';

import { Pagination } from 'swiper/modules';

const desc = [];
function ProductRandom({ random }) {
    const [value, setValue] = useState(5);
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <h1 > Sản Phẩm Bán Chạy</h1>

            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={style.
                    wrapper}
            >
                {
                    <div >
                        {random.map((product) => (
                            <SwiperSlide key={product._id} className={style.wrapperB}>
                                <Link className={style.wrapperA} style={{ height: '20px' }} href={`/product/${product._id}`}>
                                    <div className={style.allProducts}>
                                        <div className={style.product}>
                                            <div className={style.saleOff}>
                                                <span className={style.saleOffPercent}>-{product.discount}%</span>
                                            </div>
                                            <img src={product.img} />
                                            <div className="product-info">
                                                <h4 className={style.productTitle}>{product.name}</h4>
                                                <p className={style.productPrice}>${product.price} 
                                                        </p>
                                                <span>
                                                    <Rate tooltips={desc} onChange={setValue} value={value} />
                                                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            </SwiperSlide>
                        ))}
                    </div>

                }

            </Swiper >
        
        </div>
    );
}

export default ProductRandom;

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
    try {
        const responseRandom = await axiosClient.get('questions/productRandom');

        return {
            props: {
                random: responseRandom.data.payload
            },

            // revalidate: 24 * 60 * 60,
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

// getStaticProps - Static-Side Generation
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps(req) {
//   try {
//     const response = await axiosClient.get('/user/products');

//     return {
//       props: {
//         products: response.data.payload,
//       },

//       // revalidate: 10,
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }