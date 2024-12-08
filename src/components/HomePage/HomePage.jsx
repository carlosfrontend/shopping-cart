import styles from "./HomePage.module.css";
import WomanImage from "../../assets/woman.webp";
import RingsImage from "../../assets/rings.webp";
import EarphonesImage from "../../assets/earphones.webp";
import ManImage from "../../assets/man.webp";
import HomeCard from "../HomeCard/HomeCard";

const HomePage = () => {

  return (
    <section className={styles.homePageContainer}>
      <div className={styles.cardsContainer}>
        <HomeCard
          pathName={"categories/women's clothing"}
          slogan={"Take advantage of our Black Friday offers!"}
          imageUrl={WomanImage}
          category={"Women's clothing"}
          description={
            "The best fashion selection in women's clothing for this season. You will be able to achieve a unique style."
          }
        />
        <HomeCard
          pathName={"categories/men's clothing"}
          slogan={"We have lowered prices on many items!"}
          imageUrl={ManImage}
          category={"Men's clothing"}
          description={
            "Here you will find pants, jackets, shirts and everything at the best price. It's time to show off your elegance. Don't let it escape."
          }
        />
        <HomeCard
          pathName={"categories/jewelery"}
          slogan={"What are you waiting for?"}
          imageUrl={RingsImage}
          category={"Jewelry"}
          description={
            "Everything is ready so you can show off wonderful rings, earrings, bracelets and much more..."
          }
        />
        <HomeCard
          pathName={"categories/electronics"}
          slogan={"Come in and see for yourself!"}
          imageUrl={EarphonesImage}
          category={"Electronic"}
          description={
            "If you are thinking about changing your phone or looking for any electronic device, this is your place."
          }
        />
      </div>
    </section>
  );
};

export default HomePage;
