import aboutImage from "../../assets/Agency/Frame_35.png";
import unlock from "../../assets/Agency/pana.png";

export default function higerOrder({ titel, deription, button, img }) {
  const info = () => {
    if (img == "about") {
      return aboutImage;
    } else if (img == "unlock") {
      return unlock;
    }
  };

  return (
    <>
      <div className="mt-10 px-8 md:px-8 mx-auto py-8">
        <div className=" md:flex items-center justify-center gap-12 md:mx-auto">
          <div className=" selection:select-none">
            <img src={info} alt="" className=" " />
          </div>
          <div className="max-w-lg space-y-6">
            <h1 className="heading">{titel}</h1>
            <p className="text-sm text-neutralGrey px-2 selection:text-brandPrimar">
              {deription}
            </p>
            <button className="buttom mx-2 selection:select-none">
              {button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
