export default function Terms() {
  return (
    <section className="max-w-screen-xl mx-auto px-5">
      <div className="mt-16 text-center">
        <div className="mb-4">
          {" "}
          <span className="bg-purple-100 border-purple-200 border text-purple-600 rounded-full text-xs font-medium px-3 py-1 ">
            Terms{" "}
          </span>{" "}
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          {" "}
          Terms and Conditions
        </h1>
        <p className="text-lg mt-4 text-slate-500 mx-auto max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="mt-6 text-center">
        {" "}
        <a
          href="#"
          target="_blank"
          rel="noopener"
          className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-4 py-2 text-sm bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600 "
        >
          Learn more →
        </a>{" "}
      </div>
    </section>
  );
}
