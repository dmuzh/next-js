import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import axiosClient from '@/libraries/axiosClient';
import style from '../product.module.css'
import Navbar from '../../components/Navbar/navbar'
import { Rate } from 'antd';
import { Pagination } from 'antd';
import Footer from '@/components/Footer/footer'

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
      <div className={style.sp}>
        <div className={style.headline}>
          <h1 className={style.title}>Tất cả Sản Phẩm</h1>
        </div>
        {
          productsShow.length > 0 ? (
            <div className={style.wrapper}>
              {productsShow.map((product) => <Link key={product._id} href={`/product/${product._id}`}>
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
      </div>
      <Footer />

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

