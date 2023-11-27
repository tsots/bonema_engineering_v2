import { data } from "@/data/pages";

const pageName = "storage";

export const metadata = {
  title: "Bonema Inverters",
  description:
    "Bonema Engineering. Let's collaborate to drive positive change, reduce carbon footprints, and build a brighter tomorrow",
};

const page = () => {
  const {
    storage: { billboard, batteries, other, summary },
  } = data;
  return (
    <>
      <Billboard billboard={billboard} />
      <Batteries batteries={batteries} />
      <Other other={other} />
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

const Batteries = ({ batteries }) => {
  return (
    <section className={`batteries ${pageName}`}>
      <div className="container intro batteries">
        <h2>{batteries.heading}</h2>
        <p>{batteries.text}</p>
      </div>
      <div className="container benefits cards">
        {batteries.types.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Other = ({ other }) => {
  return (
    <section className={`other ${pageName}`}>
      {other.heading ? (
        <div className="container intro">
          {other.heading ? <h2>{other.heading}</h2> : " "}
          {other.text ? <p>{other.text}</p> : " "}
        </div>
      ) : (
        ""
      )}
      <div className="container cards other">
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
