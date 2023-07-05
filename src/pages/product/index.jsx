import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import axiosClient from '@/libraries/axiosClient';
import style from './product.module.css'
import Navbar from '../../components/Navbar/navbar'
import { Rate } from 'antd';
import { Pagination } from 'antd';

const desc = [];

function Products({ products }) {

  const [value, setValue] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsShow = products.slice(startIndex, endIndex);
  return (

    <>
      <Navbar />
      <div className={style.headline}>
        <h1 className={style.title}>Products</h1>
        {/* <div>
          <button onClick={prevPage} disabled ={currentPage===1}>Previous</button>
          <span >{currentPage}/{totalPages}</span>
          <button onClick={nextPage} disabled={currentPage===totalPages}>next</button>
        </div> */}
      </div>

      {
        productsShow.length > 0 ? (
          <div className={style.wrapper}>
            {productsShow.map((p) => <Link className={style.wrapperA} key={p._id} href={`/product/${p._id}`}>


              <div className={style.allProducts}>
                <div className={style.product}>
                  {/* <div className={style.saleOff}>
                    <span className={style.saleOffPercent}>-{p.discount}%</span>
                  </div> */}
                  <img src={p.img} />
                  <div className="product-info">
                    <h4 className={style.productTitle}>{p.name}</h4>
                    <p className={style.productPrice}>${p.price}</p>
                    <span>
                      <Rate tooltips={desc} onChange={setValue} value={value} />
                      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                    </span>

                  </div>
                </div>
              </div>
            </Link>)}
          </div >
        ) : <small>Không có sản phẩm</small>
      }
      <Pagination
                current={currentPage}
                pageSize={itemsPerPage}
                total={products.length}
                onChange={handlePageChange}
            />

    </>
  );
}

export default Products;
// export const Page = () => <Pagination defaultCurrent={1} total={3} />;

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
  try {
    const response = await axiosClient.get('/user/products');

    return {
      props: {
        products: response.data.payload,
      },

    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

