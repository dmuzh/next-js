import React from 'react'
import style from '../../components/Information/imformation.module.css'
const Information = () => {
    return (
        <div className={style.Frame}> 
            <form action="https://formspree.io/f/xzbowpjq" method="POST">
            <div className={style.form}>
                <div className={style.formTxt}>
                    <h4>INFORMATION</h4>
                    <h1>Contact Us</h1>
                    <span>
                        As you might expect of a company that began as a high-end
                        interiors contractor, we pay strict attention.
                    </span>
                    <h3>VN</h3>
                    <p>
                    57 Mỹ An 7, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam
                        <br />
                        +81 0559921828
                    </p>
                    <h3>India</h3>
                    <p>
                        HW95+C9C, Lorem ipsum dolor sit.
                        <br />
                        411014
                    </p>
                </div>
                <div className={style.formDetails}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required=""
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required=""
                    />
                    <textarea
                        name="message"
                        id="message"
                        cols={52}
                        rows={7}
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                    />
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </form></div>
    )
}

export default Information