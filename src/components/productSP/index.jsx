import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import axiosClient from '@/libraries/axiosClient';
import style from './product.module.css'
import { Rate } from 'antd';


const desc = [];

function ProductSP({ productSP }) {

  // const productsData = getProducts()

  // const [products] = await Promise.all([productsData])
  const [value, setValue] = useState(4);
  return (
    <>
      <div className={style.headline}>
        <h1 className={style.title}>Products</h1>
      </div>
      {
        productSP.length > 0 ? (
          <div className={style.wrapper}>
            {productSP.map((por) => <Link className={style.wrapperA} style={{ flexDirection: 'none' }} key={por._id} href={`/product/${por._id}`}>

              <div className={style.product}>
               
                <Image  src={por.img} 
                 width={200}
                 height={300} ></Image>
                <div className="product-info">
                  <h4 className={style.productTitle}>{por.name}</h4>
                  <p className={style.productPrice}>${por.price}</p>

                </div>
                <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </span>
                <div >
                  <button className={style.button}>
                    Mua Ngay
                  </button>
                </div>
                <div >

                </div>
              </div>


            </Link>)}

          </div >
        ) : <small>Không có sản phẩm</small>
      }
      <div className={style.moreButton}>
        <Link href={`/product`} className={style.more}>
          <p>Xem Thêm</p>
        </Link>
      </div>
    </>
  );
}

export default ProductSP;

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
  try {
    const responseSP = await axiosClient.get('questions/spRandom');


    return {
      props: {
        productSP: responseSP.data.payload,
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