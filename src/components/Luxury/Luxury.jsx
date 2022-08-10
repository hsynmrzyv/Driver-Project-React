import styles from "./Luxury.module.css";

import { data } from "./carData";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Luxury Selection</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {data.map((carData, index) => {
          return (
            <div key={index} className={styles.card}>
              <img src={carData.image} alt={carData.title} />
              <div className={styles.content}>
                <h3>{carData.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Luxury;
