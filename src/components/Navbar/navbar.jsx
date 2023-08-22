import React from 'react'
import Link from "next/link"
import style from '../../components/Navbar/navbar.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Navbar = () => {
  return (
    <>
      <title>Shop Smart Phone</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
      <section >
        <div className={style.topTxt} >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{
              margin: ' -5px 6px'
            }}>
              <AiOutlineMail style={{ fontSize: '30px' }} />
            </div> <label style={{ fontSize: '15px' }}>:ducmanhvd123@gmail.com</label>
          </div>
          <div className={style.sing_in_up} >
            <a href="#">Theme FAQ's</a>

            <a href="# ">SIGN IN</a>
            <a href="# ">SIGN UP</a>
          </div>
        </div>
      </section >
      {/* ma */}
      <nav className={style.navbar}>
        <div className={style.navbarContainer}>
          <Link href='/'>
          <div className={style.logo}>
            <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" />
          </div>
          </Link>
          <input type="checkbox" name="" id="checkbox" />
          <div className={style.hamburgerLines}>
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>

          <ul className={style.menuItems}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Shop</Link>
            </li>
            <li>
              <Link href="#news">Blog</Link>
            </li>
            <li>
              <Link href="/cart">Cart <MdOutlineAddShoppingCart/></Link>
            </li>
          </ul>

        </div>
      </nav>


    </>

  )
}

export default Navbar

