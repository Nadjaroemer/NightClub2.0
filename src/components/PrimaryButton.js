export default function PrimaryButton({ text }) {
  return (
    <button className="p{t/b}-{10px} pl-8 pr-8 bg-transparent border-white uppercase border-y-4">
      {text}
    </button>
  );
}
