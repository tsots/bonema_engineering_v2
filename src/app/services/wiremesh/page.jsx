import { data } from "@/data/pages";

const pageName = "wire-mesh";

const page = () => {
  return (
    <>
      <Billboard />
      <Features />
      <Benefits />
      <Summary />
    </>
  );
};

export default page;

const Billboard = () => {
  const {
    wireMesh: { billboard },
  } = data;

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

const Features = () => {
  const {
    wireMesh: { features },
  } = data;
  // console.log(wireMesh, null, 2);
  return (
    <section className={`features ${pageName}`}>
      <div className="container cards features">
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

const Benefits = () => {
  const {
    wireMesh: { benefits },
  } = data;
  // console.log(wireMesh, null, 2);
  return (
    <section className={`benefits ${pageName}`}>
      <div className="container cards benefits">
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

const Summary = () => {
  const {
    wireMesh: { summary },
  } = data;
  // console.log(wireMesh, null, 2);
  return (
    <section className={`summary ${pageName}`}>
      <div className="container intro">
        <p>{summary}</p>
      </div>
    </section>
  );
};
