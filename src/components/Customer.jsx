import customer from "../assets/image/image_9.png";
import customer_logo from "../assets/image/Frame_10.png";

/**
 *
 *
 * @export
 * @return {*} 
 */
export default function Customer() {
  return (
    <>
      <div className="py-8 px-4 md:px-8 max-w-screen-4xl mx-auto mt-9">
        <div className=" flex items-center justify-center gap-8 flex-col md:flex-row min-w-full">
          <div className=" animate-round hover:animate-none">
            <img src={customer} alt="" className="" />
          </div>
          <div className=" max-w-4xl text-neutralDGrey space-y-1 px-4 md:w-11/12 lg:max-w-4xl">
            <p className="">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h1 className="text-xl text-brandPrimar font-semibold">Tim Smith</h1>
            <p className="text-neutralDGrey space-y-3">British Dragon Boat Racing Association</p>
            <div className="flex flex-col space-y-2 md:flex-row sm:space-y-0 gap-3">
                <div className=" mt-3">
                    <img src={customer_logo} alt="" />
                </div>
                <button className="text-brandPrimar ">Meet all customer  </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
