import Image from "next/image";
import hero from "../../../public/assets/hero03.jpg";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

export function Hero() {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === 'en' ? en : sr;

  return (
      <div className={styles.hero} id="Home">
        <div className={styles.heroText}>
          <h1>Сачувајте своје финансије за бољу будућност</h1>
          <p>
          Брига о новцу је универзална. Многи од нас, из целог света и из свих сфера живота, готово су стално суочени са финансијским стресом и неизвесношћу у погледу будућности. Шта највише брине људе када су финансије у питању и који су корисни савети за финансијску сигурност, сазнајте у наставку.
          </p>
          <a href="#Services"><button type="submit">Почети</button></a>
        </div>
        <div>
        <Image
          src={hero}
          width={340}
          height={472}
          className={styles.heroImage}
          alt="view of skyscrapers from the bottom-up"
        /></div>
      </div>
    
  );
}
