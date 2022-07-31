import React from "react";
import styles from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={styles.luxury_container}>
      <div className={styles.luxury_text}>
        <h2>Luxury Selection.</h2>
        <p>Select from the top luxury vichels to roll in style</p>
      </div>
      <div className={styles.grid_container__img}>
        <div className={styles.img_card}>
          <img
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Audi</h3>
        </div>
        <div className={styles.img_card}>
          <img
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Ferrari</h3>
        </div>
        <div className={styles.img_card}>
          <img
            src="https://images.unsplash.com/photo-1617037914705-b3b2c5e57920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9sbHNyb3ljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Rolsroyes</h3>
        </div>
        <div className={styles.img_card}>
          <img
            src="https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Toyota</h3>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
