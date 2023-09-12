// import aboutImage from "../assets/Agency/Frame_35.png"
import HgerOrder from "../components/Order_Higher/Higher";

export default function About() {
  const title = "The unseen of spending three years at Pixelgrade";
  const dec =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.";
  const btn = "learn more";
  return <HgerOrder titel={title} deription={dec} button={btn} img={"about"} />;
}
