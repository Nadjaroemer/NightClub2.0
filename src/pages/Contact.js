import Headline from "../components/Headline";

export default function Contact() {
  return (
    <section>
      <Headline headline="contact us" />
      <form className="flex flex-col gap-8">
        <input
          className="border-2 p-2 bg-transparent  md:h-20"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="border-2 p-2 bg-transparent md:h-20"
          placeholder="Your Email"
        />
        <input
          className="border-2 p-2 bg-transparent md:h-20"
          placeholder="Your Email"
        />
        <textarea
          rows="10"
          className="border-2 p-2 bg-transparent"
          placeholder="Comment"
        />
        <button
          className="col-start-2 col-end-3 place-self-end p{t/b}-{10px} pl-8 pr-8 bg-transparent border-white uppercase border-y-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
