import React from 'react'
import Link from "next/link"
import style from '../../components/Navbar/navbar.module.css'
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <title>Shop Smart Phone</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
      <section >
        <div  className={style.topTxt} >
          <div className="head-txt ">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
          <div className={style.sing_in_up} >
            <a href="# ">SIGN IN</a>
            <a href="# ">SIGN UP</a>
          </div>
        </div>
      </section >
      <nav className={style.navbar}>
        <div className={style.navbarContainer}>
          <input type="checkbox" name="" id={style.checkbox} />
          <div className={style.hamburgerLines}>
            <span className={`${style.line},${style.line1}`} />
            <span className={`${style.line},${style.line2}`} />
            <span className={`${style.line},${style.line3}`} />
          </div>
          <Link href={`/`}>
          <div className="logo">
            <img src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993" alt="" 
           ></img>
          </div>
          </Link>
          

          <div className={style.search}>
            <form className="navbar-form navbar-left" action="/action_page.php">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="search"
                />
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
              </div>

            </form>
          </div>
          
          <ul className={style.menuItems}>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={`/product`}>Shop</Link>
            </li>
            <li>
              <Link href="#news">Blog</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

          
        </div>
      </nav>

    </>

  )
}

export default Navbar

