
import React, { useCallback, useState ,useContext,useEffect} from "react";
// import Head from "next/head";
import PropTypes from "prop-types";
import style from './productDetail.module.css'
import axiosClient from '@/libraries/axiosClient';
// import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Footer from '@/components/Footer/footer'
import Image from "next/image";
// import Link from "next/link";
import Navbar from '../../components/Navbar/navbar'
import ProductRandom from "../../components/productRandom"
import BuyForm from '@/components/FormBuy/buyForm'
import { CartContext } from '../../context/cart'
import Information from '@/components/Information/Information'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaMoneyCheckAlt } from 'react-icons/fa';


import {
  Button,
 
  Space,
  Modal,
  message,
} from 'antd';  
import Products from ".";
const MESSAGE_TYPE = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
};
function ProductDetail(props) {
  const { product, random } = props;
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { cartItems, addToCart } = useContext(CartContext)
  const [showModal, setshowModal] = useState(false);
  const toggle = () => {
    setshowModal(!showModal);
  };
  const onSelectProduct = () => {
    setEditModalVisible(true);

  }

  const [messageApi, contextHolder] = message.useMessage();



  const onShowMessage = useCallback(
    (content, type = MESSAGE_TYPE.SUCCESS) => {
      console.log("ZZZZ", messageApi);
      messageApi.open({
        type: type,
        content: "Mua Hàng Thành Công",
      });
    },
    [messageApi],
  );

  // const router = useRouter();
  return (
    <>
      {/* <Head>
        <title>Chi Tiết Sản Phẩm</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />

      {product && (

        <main>
          <Navbar />
          {/* <Header/> */}
          {/* {isSuccess && <Alert message="Success Text" type="success" closable/>} */}
          {contextHolder}
          <div className={style.awesome} >
            <div className={style.card_wrapper}>
              <div className={style.card}>
                {/* card left */}
                <div className={style.product_imgs}>
                  <div className={style.img_display}>
                    <div className={style.img_showcase}>
                      <Image
                        src={product.img}
                        alt="shoe image"
                        width={350}
                        height={350}
                      />
                    </div>
                  </div>
                </div>
                {/* card right */}


                <div className={style.product_content}>
                  <h2 className={style.product_title}
                  >{product.name}</h2>
                  <div className={style.product_price}
                  >
                    <p className={style.last_price}
                    >
                      Old Price: <span>${product.price}</span>
                    </p>
                    <p className={style.new_price}
                    >
                      New Price: <span>${product.discountedPrice} (-{product.discount}%)</span>
                    </p>
                  </div>
                  <div className={style.product_detail}
                  >
                    <h2>about this item: </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                      eveniet veniam tempora fuga tenetur placeat sapiente architecto
                      illum soluta consequuntur, aspernatur quidem at sequi ipsa!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
                    </p>
                  </div>

{/* <div className="d-flex mb-3">
                <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                <form>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-1">
                      XS
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-2"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-2">
                      S
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-3"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-3">
                      M
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-4"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-4">
                      L
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-5"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-5">
                      XL
                    </label>
                  </div>
                </form>
              </div> */}
                  <div className={style.purchase_info}
                  >
                    <input type="number" min={0} defaultValue={1} />
                    <button onClick={() => addToCart(product)}type="button" className={style.btn} >
                     <AiOutlineShoppingCart/> Add to Cart
                    </button>
                    <Space>
                      <Button 
                        type="dashed"
                        className={style.btn}
                        onClick={onSelectProduct}
                        icon = {<FaMoneyCheckAlt/>}
                      >
                        Buy Now
                      </Button>


                    </Space>
                    {/* <button type="button" updateForm ={style.btn}>
                      Buy Now
                    </button> */}
                  </div>
                </div>

              </div>
            </div>
          </div>

          <ProductRandom random={random} />
<Information/>
          <Footer />

          <Modal
            open={editModalVisible}
            centered
            title=" Vui Lòng Điền Thông Tin "
            onCancel={() => {
              setEditModalVisible(false);
              
            }}
            cancelText="Đóng"
            okText="Lưu"
            onOk={() => {
              setEditModalVisible(false);
              onShowMessage("Tao la Manh cho dien");
            }}
          >
            <BuyForm
            
              formName="update-product"
              isHiddenSubmit
            />
          </Modal>
          
        </main>
      )}
    </>
  );
}


ProductDetail.propTypes = {
  post: PropTypes.instanceOf(Object),
};

ProductDetail.defaultProps = {
  post: {},
};

export default ProductDetail;



export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(req) {
  try {
    const { params } = req;
    const response = await axiosClient.get(`/user/products/${params.id}`);
    const responseRandom = await axiosClient.get('questions/productRandom');
    return {
      props: {
        product: response.data.payload,
        random: responseRandom.data.payload,

      },

      revalidate: 60 * 60 * 24 * 30,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

// SSR
// export async function getServerSideProps(req) {
//   try {
//     console.log('««««« req »»»»»', req);
//     const { params } = req;
//     const response = await axiosClient.get(`/products/${params.id}`);

//     return {
//       props: {
//         product: response.data.payload,
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }