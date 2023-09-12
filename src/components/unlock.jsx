import HgerOrder from "../components/Order_Higher/Higher";

export default function Unlock() {
  const title = "How to design your site footer like we did";
  const dec =
    "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.";
  const btn = "learn more";
  return (
    <HgerOrder titel={title} deription={dec} button={btn} img={"unlock"} />
  );
}