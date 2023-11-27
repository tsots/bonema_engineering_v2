import { data } from "@/data/pages";

const pageName = "solar";

export const metadata = {
  title: "Solar Power",
  description:
    "Bonema Engineering. Let's collaborate to drive positive change, reduce carbon footprints, and build a brighter tomorrow",
};

const page = () => {
  const {
    solarEnergy: {
      billboard,
      solarPanels,
      thermalSystems,
      solarFarms,
      offGrid,
      consumerProducts,
      buildingIntegrated,
      summary,
    },
  } = data;
  return (
    <>
      <Billboard billboard={billboard} />
      <SolarPanels solarPanels={solarPanels} />
      <ThermalSystems thermalSystems={thermalSystems} />
      <SolarFarms solarFarms={solarFarms} />
      <OffGrid offGrid={offGrid} />
      <ConsumerProducts consumerProducts={consumerProducts} />
      <BuildingIntegrated buildingIntegrated={buildingIntegrated} />
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

const SolarPanels = ({ solarPanels }) => {
  return (
    <section className={`batteries ${pageName}`}>
      <div className="container batteries">
        <h2>{solarPanels.heading}</h2>
        <p>{solarPanels.text}</p>
      </div>
      <div className="container benefits-cards">
        {solarPanels.solarPanels.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ThermalSystems = ({ thermalSystems }) => {
  return (
    <section className={`thermal-systems ${pageName}`}>
      <div className="container intro thermal-systems">
        <h2>{thermalSystems.heading}</h2>
        <p>{thermalSystems.text}</p>
      </div>
      <div className="container thermal-systems cards">
        {thermalSystems.types.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const SolarFarms = ({ solarFarms }) => {
  return (
    <section className={`solar-farms ${pageName}`}>
      <div className="container intro solar-farms">
        <h2>{solarFarms.heading}</h2>
        <p>{solarFarms.text}</p>
      </div>
      <div className="container solar-farms cards">
        {solarFarms.types.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const OffGrid = ({ offGrid }) => {
  return (
    <section className={`off-grid ${pageName}`}>
      <div className="container intro off-grid">
        <h2>{offGrid.heading}</h2>
        <p>{offGrid.text}</p>
      </div>
      <div className="container off-grid cards">
        {offGrid.types.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ConsumerProducts = ({ consumerProducts }) => {
  return (
    <section className={`consumer-products ${pageName}`}>
      <div className="container intro consumer-products">
        <h2>{consumerProducts.heading}</h2>
        <p>{consumerProducts.text}</p>
      </div>
      <div className="container consumer-products cards">
        {consumerProducts.types.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const BuildingIntegrated = ({ buildingIntegrated }) => {
  return (
    <section className={`building-integrated ${pageName}`}>
      <div className="container building-integrated intro">
        <h2>{buildingIntegrated.heading}</h2>
        <p>{buildingIntegrated.text}</p>
      </div>
      {/* <div className="container building-integrated-cards">
        {buildingIntegrated.types.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div> */}
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
