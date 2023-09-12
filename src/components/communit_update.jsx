// import d from "../assets/Agency/img1.png";
export default function Community() {
  const Images = [
    {
      id: 1,
      Image: "/src/assets/Agency/img1.png",
      tittle: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      Image: "/src/assets/Agency/img2.png",
      tittle:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      Image: "/src/assets/Agency/img3.png",
      tittle: "Revamping the Membership Model with Triathlon Australia",
    },
  ];
  return (
    <>
      <div className="px-4 mt-8 max-w-screen-2xl mx-auto mb-12">
        <div className="text-center md:w-1/2 mx-auto">
          <h1 className="heading">Caring is the new marketing</h1>
          <p className=" text-neutralGrey justify-center">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-8 items-center pt-4">
          {Images.map((image) => (
            <div
              key={image.id}
              className="mx-auto relative mb-12 cursor-pointer "
            >
              <img src={image.Image} alt="" />
              <div className=" text-center mx-auto border-md px-4 py-4 bg-slate-100   shadow-md hover:shadow-lg rounded-sm max-w-xs md:w-3/4 left-0 right-0 absolute -bottom-12">
                <h1 className="text-neutralGrey text-lg pb-4 ">
                  {image.tittle}
                </h1>
                <button className="buttom">Read more..</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
