export default function Users() {
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
    
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-8 items-center pt-4 ">
      {Images.map((image) => (
        <div key={image.id} className="mx-auto relative mb-12 cursor-pointer ">
          <img src={image.Image} alt="" />
          <div className=" text-center mx-auto border-md px-4 py-4 bg-slate-100   shadow-md hover:shadow-lg rounded-sm max-w-xs md:w-3/4 left-0 right-0 absolute -bottom-12">
            <h1 className="text-neutralGrey text-lg pb-4 ">{image.tittle}</h1>
            <button className="buttom">Read more..</button>
          </div>
        </div>
      ))}
    </div>
  );
}
