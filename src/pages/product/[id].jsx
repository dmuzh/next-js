import React from "react";
// import Head from "next/head";
import PropTypes from "prop-types";
import style from './productDetail.module.css'
import axiosClient from '@/libraries/axiosClient';
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import Link from "next/link";
import Navbar from '../../components/Navbar/navbar'
function ProductDetail(props) {
  const { product } = props;
  // const router = useRouter();

  return (
    <>

      {product && (

        <main>
          <Navbar />
          <>
            <Link
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
              rel="stylesheet"
              id="bootstrap-css"
            />
            {/*---- Include the above in your HEAD tag --------*/}
            <Link
              href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap"
              rel="stylesheet"
            />
            <Link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
            />
            <Link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
            />
            <Link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
            />
            <div className={style.pdWrap}>
              <div className="container">

                <div className={style.wrapper}>
                  <div >
                    <div id="thumb" >
                      <div className={style.item}>
                        <img src={product.img} />
                      </div>

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-dtl">
                      <div className={style.productInfo}>
                        <div className={style.productName}>{product.name}</div>
                        <div className={style.reviewsCounter}>
                          <div className={style.rate}>
                            <input
                              type="radio"
                              id="star5"
                              name="rate"
                              defaultValue={5}
                              defaultChecked=""
                            />
                            <label htmlFor="star5" title="text">
                              5 stars
                            </label>
                            <input
                              type="radio"
                              id="star4"
                              name="rate"
                              defaultValue={4}
                              defaultChecked=""
                            />
                            <label htmlFor="star4" title="text">
                              4 stars
                            </label>
                            <input
                              type="radio"
                              id="star3"
                              name="rate"
                              defaultValue={3}
                              defaultChecked=""
                            />
                            <label htmlFor="star3" title="text">
                              3 stars
                            </label>
                            <input type="radio" id="star2" name="rate" defaultValue={2} />
                            <label htmlFor="star2" title="text">
                              2 stars
                            </label>
                            <input type="radio" id="star1" name="rate" defaultValue={1} />
                            <label htmlFor="star1" title="text">
                              1 star
                            </label>
                          </div>
                          <span>3 Reviews</span>
                        </div>
                        <div className={style.productPricePiscount}>
                          <span>${product.price} </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="size">GB</label>
                          <select id="size" name="size" className="form-control">
                            <option>128GB</option>
                            <option>256GB</option>
                            <option>512GB</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="color">Color</label>
                          <select id="color" name="color" className="form-control">
                            <option>Black</option>
                            <option>Violet</option>
                            <option>Yellow</option>
                          </select>
                        </div>
                      </div>


                      <div className={style.quantity}>
                        <p>Quantity :</p>
                        <input type="number" min={1} max={5} defaultValue={1} />
                      </div>

                      <div className={style.btnBox}>
                        <button className={style.cartBtn}>Add to Cart</button>
                        <button className={style.buyBtn}>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.productInfoTabs}>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <div>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="review-tab"
                          data-toggle="tab"
                          href="#review"
                          role="tab"
                          aria-controls="review"
                          aria-selected="false"
                        >
                          Reviews (0)
                        </a>

                      </li>
                    </div>
                    {/* <div className={style.reviewHeading}>REVIEWS</div> */}
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade"
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >

                      <p className="mb-20">There are no reviews yet.</p>
                      <form className={style.reviewForm}>
                        <div className={style.formGroup}>
                          <label>Your rating</label>
                          <div className="reviews-counter">
                            <div className={style.rate}>
                              <input
                                type="radio"
                                id="star5"
                                name="rate"
                                defaultValue={5}
                              />
                              <label htmlFor="star5" title="text">
                                5 stars
                              </label>
                              <input
                                type="radio"
                                id="star4"
                                name="rate"
                                defaultValue={4}
                              />
                              <label htmlFor="star4" title="text">
                                4 stars
                              </label>
                              <input
                                type="radio"
                                id="star3"
                                name="rate"
                                defaultValue={3}
                              />
                              <label htmlFor="star3" title="text">
                                3 stars
                              </label>
                              <input
                                type="radio"
                                id="star2"
                                name="rate"
                                defaultValue={2}
                              />
                              <label htmlFor="star2" title="text">
                                2 stars
                              </label>
                              <input
                                type="radio"
                                id="star1"
                                name="rate"
                                defaultValue={1}
                              />
                              <label htmlFor="star1" title="text">
                                1 star
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Your message</label>
                          <textarea
                            className="form-control"
                            rows={10}
                            defaultValue={""}
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name=""
                                className="form-control"
                                placeholder="Name*"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name=""
                                className="form-control"
                                placeholder="Email Id*"
                              />
                            </div>
                          </div>
                        </div>
                        <button className="round-black-btn">Submit Review</button>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>




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

// 
//   }
// }

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

    return {
      props: {
        product: response.data.payload,
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