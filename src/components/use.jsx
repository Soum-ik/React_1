import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";

export default function Users() {
  const Images = [
    {
      id: 1,
      Image: img1,
      tittle: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      Image: img2,
      tittle:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      Image: img3,
      tittle: "Revamping the Membership Model with Triathlon Australia",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-8 items-center pt-4 px-4">
      {Images.map((image) => (
        <div key={image.id} className="mx-auto relative mb-12 cursor-pointer ">
          <img src={image.Image} alt="" />
          <div className=" text-center mx-auto rounded-md px-4 py-4 backdrop-blur-xl   shadow-md hover:shadow-lg  max-w-lg  md:w-3/4 left-0 right-0 absolute -bottom-12 ">
            <h1 className="text-neutralGrey text-lg pb-4 hover:text-slate-50 delay-300 ease-in-out">
              {image.tittle}
            </h1>
            <button className="buttom focus:bg-slate-100 focus:text-black focus:outline-none focus:shadow-md  delay-100">
              Read more..
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
