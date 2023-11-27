import { data } from "@/data/pages";

const pageName = "wind-energy";

const page = () => {
  const {
    windEnergy: { billboard, offShore, onShore, summary },
  } = data;
  return (
    <>
      <Billboard billboard={billboard} />
      <OnShore onShore={onShore} />
      <OffShore offShore={offShore} />
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

const OnShore = ({ onShore }) => {
  return (
    <section className={`on-shore ${pageName}`}>
      <div className="container intro">
        <h2>{onShore.heading}</h2>
        <p>{onShore.text}</p>
      </div>
      <div className="container cards">
        {onShore.types.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const OffShore = ({ offShore }) => {
  return (
    <section className={`off-shore ${pageName}`}>
      <div className="container off-shore intro">
        <h2>{offShore.heading}</h2>
        <p>{offShore.text}</p>
      </div>
      <div className="container off-shore cards">
        {offShore.types.map((item, index) => (
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
