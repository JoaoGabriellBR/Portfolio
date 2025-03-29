import styles from "./style.module.scss";
import Image from "next/image";

export default function Gallery({ handle }: any) {
  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image src={`/images/${handle}`} alt="image" fill />
      </div>
      <div className={styles.vignette}>
        <Image src={`/images/${handle}`} alt="image" fill />
      </div>
    </div>
  );
}
