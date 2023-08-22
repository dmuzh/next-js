import React from "react";
import style from "./style.module.css";
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { AiFillShop } from 'react-icons/ai';
import { MdOutlineSupportAgent } from 'react-icons/md';

import { BsFillFlagFill } from 'react-icons/bs';

// import { height } from "@mui/system";

const Wrapper = () => {
  const data = [
    {
      cover: <BsFillFlagFill  style={{width:"70", height:70}}/>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FaMoneyCheckAlt style={{width:"70", height:70}} />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <AiFillShop style={{width:"70", height:70}} />,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <MdOutlineSupportAgent style={{width:"70", height:70}} />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className={style.wrapper}>
        <div className={style.container}>
          {data.map((val, index) => {
            return (
              <div className={style.product} key={index}>
                <div className={style.img}>{val.cover}</div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;