import { data } from "@/data/pages";

const pageName = "utilities";

const page = () => {
  const {
    utilities: { billboard, benefits, features, summary },
  } = data;
  return (
    <>
      <Billboard billboard={billboard} />
      <Benefits benefits={benefits} />
      <Features features={features} />
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

const Benefits = ({ benefits }) => {
  return (
    <section className={`benefits ${pageName}`}>
      {/* <div className="container benefits">
        <h2>{onShore.heading}</h2>
        <p>{onShore.text}</p>
      </div> */}
      <div className="container benefits-cards">
        {benefits.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Features = ({ features }) => {
  return (
    <section className={`features ${pageName}`}>
      {/* <div className="container features">
        <h2>{offShore.heading}</h2>
        <p>{offShore.text}</p>
      </div> */}
      <div className="container features-cards">
        {features.map((item, index) => (
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
      <div className="container summary">
        <p>{summary}</p>
      </div>
    </section>
  );
};
