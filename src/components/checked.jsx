export default function CheckBox({ text, ...rest }) {
  return (
    <label className=" py-2 pl-2">
      <input type="checkbox" {...rest} /> <span> {text}</span>
    </label>
  );
}
