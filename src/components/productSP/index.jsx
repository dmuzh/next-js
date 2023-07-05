import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import axiosClient from '@/libraries/axiosClient';
import style from './product.module.css'
import { Rate } from 'antd';


const desc = [];

function productSP({ productSP }) {

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
            {productSP.map((p) => <Link className={style.wrapperA} style={{ flexDirection: 'none' }} key={p._id} href={`/product/${p._id}`}>

              <div className={style.product}>
               
                <img src={p.img} />
                <div className="product-info">
                  <h4 className={style.productTitle}>{p.name}</h4>
                  <p className={style.productPrice}>${p.price}</p>

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

export default productSP;

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