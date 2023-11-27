import { data } from "@/data/pages";
import Link from "next/link";
// import { Laila } from "next/font/google";
// const laila = Laila({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

const pageName = "home";

export const metadata = {
  title: "Home",
  description:
    "Bonema Engineering. Let's collaborate to drive positive change, reduce carbon footprints, and build a brighter tomorrow",
};

export default function Home() {
  return (
    <>
      <Billboard />
      <Greeting />
      <Introductin />
      <Benefits />
      <Features />
      <Accreditaions />
    </>
  );
}
//
const Billboard = () => {
  const {
    home: { billboard },
  } = data;

  return (
    <section className={`billboard ${pageName}`}>
      <div className="container billboard">
        <div className="mobile">
          <h1>{billboard.heading}</h1>
          <div className="image">
            <img src={billboard.image} alt="" />
          </div>
          <p dangerouslySetInnerHTML={{ __html: billboard.text }} />
        </div>
        <div className="desktop">
          <div className="content">
            <h1>{billboard.heading}</h1>
            <p dangerouslySetInnerHTML={{ __html: billboard.text }} />
          </div>
          <div className="image">
            <img src={billboard.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Greeting = () => {
  const {
    home: { services },
  } = data;
  return (
    <section className={`greetings ${pageName}`}>
      <div className="container intro greetings">
        <h2>{services.heading}</h2>
        <p>{services.text}</p>
      </div>

      <div className="container services">
        <div className="cards">
          {services.services.map((item, index) => (
            <div className="card" key={index}>
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
              <Link href={item.url}>Read more ...</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Introductin = () => {
  const {
    home: {
      introduction: { whoWeAre, ourMission },
    },
  } = data;
  return (
    <>
      <section className={`${pageName}`}>
        <div className="mobile container greeting">
          <div className="content">
            <h2>{whoWeAre.heading}</h2>
            <p>{whoWeAre.text}</p>
          </div>
          <div className="image">
            <img src={data.home.introduction.image} alt="" />
          </div>
          <div className="content">
            <h2>{ourMission.heading}</h2>
            <p>{ourMission.text}</p>
          </div>
        </div>

        <div className="desktop container greeting">
          <div className="content">
            <div className="who-we-are">
              <h2>{whoWeAre.heading}</h2>
              <p>{whoWeAre.text}</p>
            </div>
            <div className="our-mission">
              <h2>{ourMission.heading}</h2>
              <p>{ourMission.text}</p>
            </div>
          </div>
          <div className="image">
            <img src={data.home.introduction.image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

const Benefits = () => {
  const {
    home: { benefits },
  } = data;
  return (
    <section className={`benefits ${pageName}`}>
      <div className="container benefits">
        <div className="cards">
          {benefits.map((item, index) => (
            <div className="card" key={index}>
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const {
    home: { features },
  } = data;
  return (
    <section className={`features ${pageName}`}>
      <div className="container intro">
        <h2>{features.heading}</h2>
      </div>
      <div className="container features">
        <div className="cards">
          {features.features.map((item, index) => (
            <div className="card" key={index}>
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Accreditaions = () => {
  const {
    home: { accreditation },
  } = data;
  return (
    <section className={`accreditations ${pageName}`}>
      <div className="container intro">
        <h2>{accreditation.heading}</h2>
        <p>{accreditation.text}</p>
      </div>
      {/* <div className="container features">
        {features.features.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
};
