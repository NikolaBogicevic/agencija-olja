import styles from "../page.module.css";
import pic1 from "../../../public/assets/1.apolo.jpeg";
import pic2 from "../../../public/assets/2.malutas.jpeg";
import pic3 from "../../../public/assets/3.dagama.jpeg";
import pic4 from "../../../public/assets/4.apotekadar.jpeg";
import pic5 from "../../../public/assets/5.dental.jpeg";
import pic6 from "../../../public/assets/6.logistics.jpeg";
import pic7 from "../../../public/assets/7.trift.jpeg";
import pic8 from "../../../public/assets/8.atlas.jpeg";
import pic9 from "../../../public/assets/9.studio.jpeg";
import pic10 from "../../../public/assets/10.radic.jpeg";
import pic11 from "../../../public/assets/11.stefanovic.jpeg";
import pic12 from "../../../public/assets/12.22.jpeg";
import pic13 from "../../../public/assets/13.perce.jpeg";
import pic14 from "../../../public/assets/14.habmurg.jpeg";
import pic15 from "../../../public/assets/15.nidza.jpeg";
import pic16 from "../../../public/assets/16.velja.jpeg";
import pic17 from "../../../public/assets/17.tehnoolimp.jpeg";
import pic18 from "../../../public/assets/18.pmt.jpeg";
import pic19 from "../../../public/assets/19.put.jpeg";
import pic20 from "../../../public/assets/20.prijatelji dece.jpeg";
import Image from "next/image";

export default function Companies() {
  return (
    <div className={styles.companiesContainer} id="Companies">
      <div className={styles.companiesHeader}>
        <h1>
        Уз поверење врхунских <span className={styles.darkBlueTitle}>компанија</span>
        </h1>
        <p className={styles.textTitle}>
        Дугогодишњи рад, искуство и поверење које стекну клијенти и државни органи, уз стално усавршавање, гаранција су квалитета наших услуга, које стално прилагођавамо нашим клијентима.
        </p>
      </div>
      <div className={styles.companiesLogos}>
      <Image src={pic1} width={200} alt={""} />
      <Image src={pic2} width={200} alt={""} />
      <Image src={pic3} width={150} alt={""} />
      <Image src={pic4} width={150} alt={""} />
      <Image src={pic5} width={200} alt={""} />
      <Image src={pic6} width={150} alt={""} />
      <Image src={pic7} width={150} alt={""} />
      <Image src={pic8} width={150} alt={""} />
      <Image src={pic9} width={150} alt={""} />
      <Image src={pic10} width={150} alt={""} />
      <Image src={pic11} width={150} alt={""} />
      <Image src={pic12} width={150} alt={""} />
      <Image src={pic13} width={200} alt={""} />
      <Image src={pic14} width={150} alt={""} />
      <Image src={pic15} width={150} alt={""} />
      <Image src={pic16} width={150} alt={""} />
      <Image src={pic17} width={150} alt={""} />
      <Image src={pic18} width={150} alt={""} />
      <Image src={pic19} width={150} alt={""} />
      <Image src={pic20} width={150} alt={""} />
      </div>
    </div>
  );
}
