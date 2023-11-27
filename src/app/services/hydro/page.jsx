import { data } from "@/data/pages";

const pageName = "hydro";

export const metadata = {
  title: "Hydro Power",
  description:
    "Bonema Engineering. Let's collaborate to drive positive change, reduce carbon footprints, and build a brighter tomorrow",
};

const page = () => {
  const {
    hydroEnergy: {
      billboard,
      conventionalHydropower: { largeScale, smallScale },
      other,
      summary,
    },
  } = data;
  return (
    <>
      <Billboard billboard={billboard} />
      <Conventional largeScale={largeScale} smallScale={smallScale} />
      <OtherHydro other={other} />
      <Summary summary={summary} />
    </>
  );
};

export default page;

const Billboard = ({ billboard }) => {
  return (
    <section className={`billboard ${pageName}`}>
      <div className="container billboard">
        <div className="mobile">
          <h1>{billboard.heading}</h1>
          <p dangerouslySetInnerHTML={{ __html: billboard.text }} />
          <div className="image">
            <img src={billboard.image} alt="" />
          </div>
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

const Conventional = ({ largeScale, smallScale }) => {
  return (
    <section className={`conventional-hydro ${pageName}`}>
      <div className="container intro">
        <h2>{data.hydroEnergy.conventionalHydropower.heading}</h2>
      </div>
      <div className="container conventional">
        <div className="large-scale">
          <h4>{largeScale.heading}</h4>
          <p>{largeScale.text}</p>
        </div>

        <div className="small-scale">
          <h4>{smallScale.heading}</h4>
          <p>{smallScale.text}</p>
        </div>
      </div>
    </section>
  );
};

const OtherHydro = ({ other }) => {
  return (
    <section className={`other-hydro ${pageName}`}>
      {/* <div className="container thermal-systems">
        <h2>{thermalSystems.heading}</h2>
        <p>{thermalSystems.text}</p>
      </div> */}
      <div className="container other-hydro cards">
        {other.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Summary = ({ summary }) => {
  return (
    <section className={`summary ${pageName}`}>
      <div className="container intro">
        <p>{summary}</p>
      </div>
    </section>
  );
};
