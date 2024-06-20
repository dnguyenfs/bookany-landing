export function PageFooter() {
  return (
    <>
      <div className="bg-gradient-to-bl from-indigo-900 to-indigo-700 p-8 md:px-20 md:py-20 mt-20 flex flex-col items-center text-center">
        <h2 className="text-white text-4xl md:text-6xl tracking-tight">
          Build faster websites.
        </h2>
        <p className="text-white/70 mt-4 text-lg md:text-xl">
          Pull content from anywhere and serve it fast with Astro's next-gen
          island architecture.
        </p>
        <div className="flex mt-5">
          {" "}
          <a
            href="#"
            className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-7 py-2.5 bg-white text-indigo-800 border-2 border-transparent"
          >
            Sign up for a 14-day Trial{" "}
          </a>{" "}
        </div>
      </div>
      <footer className="py-14 bg-slate-100 border-t border-slate-100">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
              {" "}
              <a href="/" className="text-lg flex items-center">
                <span className="font-bold text-indigo-600">Astro</span>
                <span className="text-slate-600">ship</span>{" "}
                <span className="uppercase mt-0.5 leading-none text-[10px] ml-1 font-bold bg-gray-200 text-slate-700 px-2 py-1 rounded-md">
                  PRO
                </span>
              </a>
              <p className="mt-4 text-sm text-slate-700 max-w-xs">
                Astroship Pro is a premium astro website template made for saas
                &amp; startups. Built with Astro and Tailwind CSS.
              </p>
              <div className="flex gap-3 mt-4 items-center">
                {" "}
                <a
                  href="https://twitter.com/surjithctly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-200 hover:bg-slate-300 rounded w-6 h-6 inline-flex items-center justify-center text-slate-500"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    data-icon="bx:bxl-twitter"
                  >
                    <symbol id="ai:bx:bxl-twitter">
                      <path
                        d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083z"
                        fill="currentColor"
                      ></path>
                    </symbol>
                    <use xlinkHref="#ai:bx:bxl-twitter"></use>
                  </svg>{" "}
                  <span className="sr-only">Twitter or X</span>
                </a>{" "}
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-200 hover:bg-slate-300 rounded w-6 h-6 inline-flex items-center justify-center text-slate-500"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    data-icon="bx:bxl-facebook-circle"
                  >
                    <symbol id="ai:bx:bxl-facebook-circle">
                      <path
                        d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
                        fill="currentColor"
                      ></path>
                    </symbol>
                    <use xlinkHref="#ai:bx:bxl-facebook-circle"></use>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>{" "}
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-200 hover:bg-slate-300 rounded w-6 h-6 inline-flex items-center justify-center text-slate-500"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    data-icon="bx:bxl-linkedin-square"
                  >
                    <symbol id="ai:bx:bxl-linkedin-square">
                      <path
                        d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z"
                        fill="currentColor"
                      ></path>
                    </symbol>
                    <use xlinkHref="#ai:bx:bxl-linkedin-square"></use>
                  </svg>
                  <span className="sr-only">Linkedin</span>
                </a>{" "}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm text-slate-800">Company</h3>
              <div className="flex flex-col mt-3">
                {" "}
                <a
                  href="/about"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  About{" "}
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  Careers{" "}
                </a>
                <a
                  href="/blog"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  Blog{" "}
                </a>
                <a
                  href="/contact"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  Contact{" "}
                </a>{" "}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm text-slate-800">Product</h3>
              <div className="flex flex-col mt-3">
                {" "}
                <a
                  href="#"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  For Startups{" "}
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  Features
                </a>
                <a
                  href="/pricing"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  Pricing{" "}
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  Integrations{" "}
                </a>{" "}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm text-slate-800">Resources</h3>
              <div className="flex flex-col mt-3">
                {" "}
                <a
                  href="#"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  Help Center{" "}
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  Guides
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  Documentation{" "}
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-slate-600 hover:text-indigo-600"
                >
                  {" "}
                  Uptime Status{" "}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 px-5 border-t border-slate-200">
          <div className="max-w-screen-xl mx-auto px-5">
            <p className="text-center text-sm text-slate-600 [text-wrap:balance]">
              Copyright © {new Date().getFullYear()} Astroship. All rights
              reserved.
            </p>
            <p className="text-center text-xs text-slate-600 mt-2">
              {" "}
              <a href="/terms" className="hover:text-indigo-500">
                Terms
              </a>{" "}
              ・{" "}
              <a href="/privacy" className="hover:text-indigo-500">
                Privacy
              </a>{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
