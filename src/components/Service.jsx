import client from "../assets/Agency/client.png";
// import icon1 from "../../src/assets";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      // img: "../assets/Agency/Icon.png",
      Image: "/src/assets/Agency/Icon.png",
    },
    {
      id: 2,
      title: "National Associations",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      img: "../assets/Agency/Icon2.png",
      Image: "/src/assets/Agency/Icon2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      // img: "../assets/Agency/Icon3.png",
      Image: "/src/assets/Agency/Icon3.png",
    },
  ];

  console.log(services);

  return (
    <>
      <div className="md:px-14 px-4 py-10 max-w-screen-2xl mx-auto">
        <div className="text-center gap-8 justify-center flex flex-col ">
          <h1 className=" text-neutralDGrey text-3xl font-semibold selection:text-brandPrimar">
            Our Client
          </h1>
          <p className=" text-neutralGrey text-base font-normal selection:text-brandPrimar">
            We have been working with some Fortune 500+ clients
          </p>
          <img
            src={client}
            alt=""
            className="flex m-auto justify-center items-center w-10/12 mb-4"
          />
        </div>

        <div className=" mt-10 text-center">
          <h1 className=" text-neutralDGrey text-4xl font-semibold mb-4">
            Manage your entire community <br /> in a single system
          </h1>
          <p className=" text-neutralGrey text-base font-normal">
            Who is Nextcent suitable for?
          </p>
        </div>

        {/* card  */}
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto gap-12 selection:text-brandPrimar">
          {services.map((service) => (
            <div
              key={service.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 md:px-4 rounded-md shadow-md hover:shadow-lg "
            >
              <div className="flex items-center justify-center flex-col gap-1 ">
                <img src={service.Image} alt="" />
                <h1 className=" text-neutralDGrey text-3xl font-semibold mb-2 px-2">
                  {service.title}
                </h1>
                <p className="text-sm text-neutralGrey">{service.decription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
