import React from 'react'
import style from './filter.module.css'
import Link from 'next/link';
import axiosClient from '@/libraries/axiosClient';
import Image from 'next/image';
const Categories = ({ categories }) => {
    return (
        <>
            {
                categories.length > 0 ? (
                    <div className={style.collections}>
                        {categories.map((cat) => <Link key={cat._id} href={`/`}>
                            <section id="collection">
                                <div>
                                    <div className={style.content}>
                                        <Image src={cat.img} alt="img"
                                            width={200}
                                            height={200}>

                                        </Image>
                                        <div className={style.imgContent}>
                                            <p>Clothing Collections</p>
                                            <button>
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </Link>)}
                    </div>

                ) : <small>Không có sản phẩm</small>
            }

        </>
    )
}


export default Categories
export async function getServerSideProps() {
    try {
        const filter = await axiosClient.get('user/categories');

        return {
            props: {
                categories: filter.data.payload
            },

        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
