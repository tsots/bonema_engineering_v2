import { data } from "@/data/pages";
import Link from "next/link";

const pageName = "services";

const page = () => {
  const {
    services: { billboard, services, summary },
  } = data;
  return (
    <>
      <Billboard billboard={billboard} />
      <Services services={services} />
    </>
  );
};

export default page;

const Billboard = ({ billboard }) => {
  return (
    <section className={`billboard ${pageName}`}>
      <div className="container billboard">
        <h1>{billboard.heading}</h1>
        <p dangerouslySetInnerHTML={{ __html: billboard.text }} />
        <div className="image">
          <img src={billboard.image} alt="" />
        </div>
        {/* <div className="desktop">
          <div className="content">
            <h1>{billboard.heading}</h1>
            <p dangerouslySetInnerHTML={{ __html: billboard.text }} />
          </div>
          <div className="image">
            <img src={billboard.image} alt="" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

const Services = ({ services }) => {
  return (
    <section className={`services ${pageName}`}>
      <div className="container services">
        <div className="cards">
          {services.map((item, index) => (
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
