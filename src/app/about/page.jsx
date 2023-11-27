import { data } from "@/data/pages";

const pageName = "about";

export const metadata = {
  title: "About",
  description:
    "Bonema Engineering. Let's collaborate to drive positive change, reduce carbon footprints, and build a brighter tomorrow",
};

const page = () => {
  return (
    <>
      <Billboard />
      <Introduction />
      <Teasers />
    </>
  );
};

export default page;

const Billboard = () => {
  const {
    about: { billboard },
  } = data;

  return (
    <section className={`billboard ${pageName}`}>
      <div className="container billboard">
        <div className="">
          <h1>{billboard.heading}</h1>
          <p dangerouslySetInnerHTML={{ __html: billboard.text }} />
        </div>
      </div>
    </section>
  );
};

const Introduction = () => {
  const {
    about: {
      introduction: {
        image,
        whoWeAre,
        leadershipTeam: { leader },
      },
    },
  } = data;
  return (
    <section className={`introduction ${pageName}`}>
      <div className="container introduction">
        <div className="content">
          <div className="who-we-are">
            <h2>{whoWeAre.heading}</h2>
            <p>{whoWeAre.text}</p>
          </div>
          <div className="leadership-team">
            {leader.map((leader, index) => (
              <p key={index}>
                {leader.title}&nbsp;<small>{leader.designation}</small>
              </p>
            ))}
          </div>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

const Teasers = () => {
  const {
    about: { teasers },
  } = data;
  return (
    <section className={`teasers ${pageName}`}>
      <div className="cards">
        {teasers.map((item, index) => (
          <div className="card" key={index}>
            <div className="content">
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
            </div>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
