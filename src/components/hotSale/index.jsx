import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Rate } from 'antd';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import style from './hotSale.module.css'
import Link from 'next/link';
import { RightOutlined } from '@ant-design/icons'
import axiosClient from '@/libraries/axiosClient';

const desc = [];
function Hotsale({ productsSale }) {
    const [value, setValue] = useState(5);
    return (
        <div className={style.wrapper}>
            <div className={style.title}>

                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/fb1088de81e42c4e538967ec12cb5caa.png" alt="" />
                <Link href={'/productSale'}>
                    <div>Xem Tất cả</div>
                    <RightOutlined />
                </Link>
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
                        {productsSale.map((sale) => (
                            <SwiperSlide key={sale._id} className={style.wrapperB}>
                                <Link className={style.wrapperA} style={{ height: '20px' }} href={`/product/${sale._id}`}>


                                    <div className={style.allProducts}>
                                        <div className={style.product}>
                                            <div className={style.saleOff}>
                                                <span className={style.saleOffPercent}>-{sale.discount}%</span>
                                            </div>
                                            <img src={sale.img} />
                                            <div className="product-info">
                                                <h4 className={style.productTitle}>{sale.name}</h4>
                                                <p className={style.productPrice}>${sale.price}</p>
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

export default Hotsale;

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
    try {
        const responseSale = await axiosClient.get('questions/hotSale');

        return {
            props: {
                productsSale: responseSale.data.payload
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