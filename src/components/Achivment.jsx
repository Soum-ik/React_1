import icon1 from "../assets/image/Icon3.png";
import icon2 from "../assets/image/Icon2.png";
import icon3 from "../assets/image/Icon.png";
export default function Achivment() {
  return (
    <>
      <div className="px-4 lg:px-14  max-w-screen-2xl mx-auto bg-neutralSilver py-8">
        <div className=" flex justify-center items-center flex-col md:flex-row space-y-12 max-w-screen-xl" >

          <div className="md:w-1/2 mx-auto">
            <h1 className="heading pt-3">
              Helping a local {" "} <br />
              <span className="text-brandPrimar">business reinvent itself</span>
            </h1>
            <p className="text-gray900 px-2  pt-2">
              We reached here with our hard work and dedication
            </p>
          </div>
          
            
          <div className=" md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-6">
            <div className=" space-y-8"> 
              <div className="acchivement">
                  <img src={icon1} alt="" />
                <div className="text-center">
                  <p className="mini_title">2,245,341</p>
                  <p className="mini_title">Number</p>
                </div>
              </div>
              <div className="acchivement">
                  <img src={icon2} alt="" />
                <div className="text-center">
                  <p className="mini_title">54,545 </p>
                  <p className="mini_title">clubs</p>
                </div>
              </div>  
            </div>            
            <div className=" space-y-8 "> 
              <div className="acchivement">
                  <img src={icon3} alt="" />
                <div className="text-center">
                  <p className="mini_title">2,245,341</p>
                  <p className="mini_title">Number</p>
                </div>
              </div>
              <div className="acchivement">
                  <img src={icon2} alt="" />
                <div className="text-center">
                  <p className="mini_title">54,545 </p>
                  <p className="mini_title">clubs</p>
                </div>
              </div>  
            </div>            
            
          </div>

        </div>
      </div>
    </>
  );
}
