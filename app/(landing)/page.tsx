import { TrustedMerchants } from "../components/trusted-merchants";

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="overflow-x-clip">
        <div className="max-w-screen-xl mx-auto px-5">
          <main className="grid lg:grid-cols-5 place-items-center relative">
            <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial from-indigo-200 right-0 top-0"></div>
            <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial from-purple-200 right-56 top-10"></div>
            <div className="max-w-sm md:max-w-max lg:col-span-2">
              <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter [text-wrap:balance] text-center lg:text-start">
                Create websites with Astroship™
              </h1>
              <p className="text-lg mt-4 max-w-lg text-slate-600 [text-wrap:balance] text-center lg:text-start">
                Pro version of popular Astroship starter template made for
                startups. Built with Astro and Tailwind CSS.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                {" "}
                <a
                  href="https://web3templates.com/templates/astroship-pro-astro-saas-website-template"
                  target="_blank"
                  rel="noopener"
                  className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-7 py-2.5 bg-indigo-600 text-white hover:bg-indigo-800 flex gap-1 items-center justify-center"
                >
                  Buy Template — $49
                </a>{" "}
                <a
                  href="https://github.com/surjithctly/astroship"
                  rel="noopener"
                  target="_blank"
                  className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-7 py-2.5 bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600  flex gap-1 items-center justify-center"
                >
                  Free Version
                </a>{" "}
              </div>
            </div>
            <div className="py-3 lg:col-span-3 lg:-mr-44">
              <picture>
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_2kX9IQ.avif 240w, https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_p47kV.avif 540w, https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_2r7UJA.avif 720w, https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_ZE0EX9.avif 1183w"
                  type="image/avif"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_Z1gf1Ry.webp 240w, https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_1S34xs.webp 540w, https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_Z1a5fQO.webp 720w, https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_ZEzjxP.webp 1183w"
                  type="image/webp"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <img
                  src="https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_10u77m.png"
                  srcSet="https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_10u77m.png 240w, https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_2fuB1b.png 540w, https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_ZMCIo6.png 720w, https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_10u77m.png 1183w"
                  alt="Astronaut in the air"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="eager"
                  fetchPriority="high"
                  width="1183"
                  height="787"
                  decoding="async"
                />
              </picture>
            </div>
          </main>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5">
        <TrustedMerchants />
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center mt-24">
          {" "}
          <span className="bg-purple-100 border-purple-200 border text-purple-600 rounded-full text-xs font-medium px-3 py-1 ">
            TWO-COL FEATURES{" "}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-4 text-center">
            Supercharge Your Workflows
          </h2>
          <p className="text-lg mt-4 text-slate-600 text-center [text-wrap:pretty]">
            Unlock your team's true potential with our state-of-the-art SaaS
            platform. From intelligent task management to real-time
            collaboration and top-notch data security, we have everything you
            need to streamline your workflows and achieve high productivity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 py-10">
          <div className="grid place-items-center">
            <picture>
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/6.Ep0jo6kx_jbH81.avif"
                type="image/avif"
              />
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/6.Ep0jo6kx_Z1QgT1P.webp"
                type="image/webp"
              />{" "}
              <img
                src="https://astroship-pro.web3templates.com/_astro/6.Ep0jo6kx_Z2s10bH.png"
                alt="Feature Image"
                loading="lazy"
                width="730"
                height="584"
                decoding="async"
              />
            </picture>
          </div>
          <div className="grid place-items-center">
            <div className="max-w-lg">
              {" "}
              <span className="bg-purple-100 border-purple-200 border text-purple-600 -ml-px rounded-full text-xs font-medium px-3 py-1 ">
                Simplified Workflows{" "}
              </span>
              <h3 className="text-2xl font-medium mt-4 [text-wrap:balance]">
                Experience the Ultimate Boost in Productivity with Our Intuitive
                Platform
              </h3>
              <p className="mt-4 text-slate-600 [text-wrap:balance]">
                Streamline your tasks and collaborate seamlessly with our
                cutting-edge SaaS startup platform. Unlock the potential of your
                team and take productivity to new heights.
              </p>
              <ul className="grid mt-6 text-left gap-y-4">
                <li className="flex items-center gap-3 text-neutral-800">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <symbol id="ai:ph:check-circle-fill">
                      <path
                        fill="currentColor"
                        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"
                      ></path>
                    </symbol>
                    <use xlinkHref="#ai:ph:check-circle-fill"></use>
                  </svg>{" "}
                  <span className="text-sm">Intelligent Task Management</span>{" "}
                </li>
                <li className="flex items-center gap-3 text-neutral-800">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use xlinkHref="#ai:ph:check-circle-fill"></use>
                  </svg>{" "}
                  <span className="text-sm">Real-time Collaboration</span>{" "}
                </li>
                <li className="flex items-center gap-3 text-neutral-800">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use xlinkHref="#ai:ph:check-circle-fill"></use>
                  </svg>{" "}
                  <span className="text-sm">Data Security &amp; Privacy</span>{" "}
                </li>
              </ul>
              <div className="flex items-center gap-4 mt-6">
                {" "}
                <a
                  href="#"
                  className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-4 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-800 inline-flex items-center group gap-px"
                >
                  <span>Start 14-day trial</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mt-px group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                </a>{" "}
                <a
                  href="#"
                  className="text-sm px-2 transition py-1 text-slate-600 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo rounded-full"
                >
                  Contact Sales
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 py-10">
          <div className="grid place-items-center pb-10 md:pb-0 md:order-2">
            <picture>
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_ZIfUrc.avif"
                type="image/avif"
              />
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_Z1VcUNt.webp"
                type="image/webp"
              />{" "}
              <img
                src="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_ZgktxF.png"
                alt="Feature Image"
                loading="lazy"
                width="1280"
                height="800"
                decoding="async"
              />
            </picture>
          </div>
          <div className="grid place-items-center">
            <div className="max-w-lg">
              {" "}
              <span className="bg-purple-100 border-purple-200 border text-purple-600 -ml-px rounded-full text-xs font-medium px-3 py-1 ">
                AI-Powered Insights{" "}
              </span>
              <h3 className="text-2xl font-medium mt-4 [text-wrap:balance]">
                Supercharge Your Marketing Strategy with Advanced Analytics
              </h3>
              <p className="mt-4 text-slate-600 [text-wrap:balance]">
                Harness the potential of AI-driven marketing analytics to
                optimize your campaigns, understand your audience better, and
                achieve unprecedented growth.
              </p>
              <ul className="grid mt-6 text-left gap-y-4">
                <li className="flex items-center gap-3 text-neutral-800">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use xlinkHref="#ai:ph:check-circle-fill"></use>
                  </svg>{" "}
                  <span className="text-sm">Smart Audience Segmentation</span>{" "}
                </li>
                <li className="flex items-center gap-3 text-neutral-800">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use xlinkHref="#ai:ph:check-circle-fill"></use>
                  </svg>{" "}
                  <span className="text-sm">
                    Predictive Campaign Performance
                  </span>{" "}
                </li>
                <li className="flex items-center gap-3 text-neutral-800">
                  {" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use xlinkHref="#ai:ph:check-circle-fill"></use>
                  </svg>{" "}
                  <span className="text-sm">Real-time Data Visualization</span>{" "}
                </li>
              </ul>
              <div className="flex items-center gap-4 mt-6">
                {" "}
                <a
                  href="#"
                  className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-4 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-800 inline-flex items-center group gap-px"
                >
                  <span>Start 14-day trial</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mt-px group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                </a>{" "}
                <a
                  href="#"
                  className="text-sm px-2 transition py-1 text-slate-600 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo rounded-full"
                >
                  Contact Sales
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-5">
        <div className="mt-24">
          <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            Everything you need to{" "}
            <span className="text-indigo-600">start a website</span>{" "}
          </h2>
          <p className="text-lg mt-4 text-slate-600">
            Astro comes batteries included. It takes the best parts of
            state-of-the-art tools and adds its own innovations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 mt-16 gap-10">
          <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg lg:col-span-3">
            <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>
              <picture>
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_ZIfUrc.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_Z1VcUNt.webp"
                  type="image/webp"
                />{" "}
                <img
                  src="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_ZgktxF.png"
                  alt="Feature image"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width="1280"
                  height="800"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mt-2">
              {" "}
              <span className="bg-purple-100 border-purple-200 border text-purple-600 rounded-full text-xs font-medium px-3 py-1 ">
                <span>Astroship</span>{" "}
              </span>
              <h3 className="text-xl lg:text-2xl font-medium mt-2">
                <span>Responsive Template</span>
              </h3>
              <p className="text-slate-600 mt-2 [text-wrap:balance]">
                <span>
                  Astroship is a creative and modern mobile responsive website
                  template that helps you create any kind of marketing websites
                  or landing pages.
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg lg:col-span-2">
            <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>
              <picture>
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_ZIfUrc.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_Z1VcUNt.webp"
                  type="image/webp"
                />{" "}
                <img
                  src="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_ZgktxF.png"
                  alt="Feature image"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width="1280"
                  height="800"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mt-2">
              {" "}
              <span className="bg-indigo-100 border-indigo-200 border text-indigo-600 rounded-full text-xs font-medium px-3 py-1 ">
                <span>Creative</span>{" "}
              </span>
              <h3 className="text-xl lg:text-2xl font-medium mt-2">
                <span>Next Level Template</span>
              </h3>
              <p className="text-slate-600 mt-2 [text-wrap:balance]">
                <span>
                  Astroship is a new kind of website template that integrates
                  your favorite tools and workflows.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
          <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg">
            <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-60">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>
              <picture>
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/3.XiLsQFjx_Z1JuNDf.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/3.XiLsQFjx_27JjNp.webp"
                  type="image/webp"
                />{" "}
                <img
                  src="https://astroship-pro.web3templates.com/_astro/3.XiLsQFjx_Z1hzmJI.png"
                  alt="Feature image"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width="1280"
                  height="800"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mt-2">
              {" "}
              <span className="bg-indigo-100 border-indigo-200 border text-indigo-600 rounded-full text-xs font-medium px-3 py-1 ">
                <span>Template</span>{" "}
              </span>
              <h3 className="text-xl lg:text-2xl font-medium mt-2">
                <span>Modern Design</span>
              </h3>
              <p className="text-slate-600 mt-2 [text-wrap:balance]">
                <span>
                  Feeling old? Try this template and be a part of the modern
                  design.
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg">
            <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-60">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>
              <picture>
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_ZIfUrc.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_Z1VcUNt.webp"
                  type="image/webp"
                />{" "}
                <img
                  src="https://astroship-pro.web3templates.com/_astro/2.ldT67BXv_ZgktxF.png"
                  alt="Feature image"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width="1280"
                  height="800"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mt-2">
              {" "}
              <span className="bg-purple-100 border-purple-200 border text-purple-600 rounded-full text-xs font-medium px-3 py-1 ">
                <span>Product</span>{" "}
              </span>
              <h3 className="text-xl lg:text-2xl font-medium mt-2">
                <span>Highlight Features</span>
              </h3>
              <p className="text-slate-600 mt-2 [text-wrap:balance]">
                <span>
                  You can highlight your features in a trendy grid like this
                  one.
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg">
            <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-60">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>{" "}
              <img
                src="https://astroship-pro.web3templates.com/_astro/integrations.HhfHOMQB.svg"
                alt="Feature image"
                className="h-full w-full object-contain"
                loading="lazy"
                width="909"
                height="823"
                decoding="async"
              />
            </div>
            <div className="mt-2">
              {" "}
              <span className="bg-gray-100 border-gray-200 border text-gray-800 rounded-full text-xs font-medium px-3 py-1 ">
                <span>Webhooks</span>{" "}
              </span>
              <h3 className="text-xl lg:text-2xl font-medium mt-2">
                <span>100+ Integrations</span>
              </h3>
              <p className="text-slate-600 mt-2 [text-wrap:balance]">
                <span>
                  Astroship can be integrated with hundreds of tools using
                  Zapier.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 max-w-3xl mx-auto flex flex-col items-center justify-center">
          {" "}
          <span className="bg-purple-100 border-purple-200 border text-purple-600 rounded-full text-xs font-medium px-3 py-1 ">
            MORE FEATURES{" "}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-4 text-center">
            We've got you covered
          </h2>
          <p className="text-lg mt-4 text-slate-600 text-center [text-wrap:pretty]">
            Our template covers all things SAAS. If you don't find what you're
            looking for, contact us and we'll either help you or steer you in
            the right direction.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-8 md:gap-16">
          <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
            <div className="mt-1 bg-indigo-50 border shadow shadow-indigo-100/50 border-indigo-100 transition-colors rounded-lg grid place-items-center  p-2 w-10 h-10 shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:document-javascript-24-regular"
              >
                <symbol id="ai:fluent:document-javascript-24-regular">
                  <path
                    fill="currentColor"
                    d="M18 20.5h-7.034a2.939 2.939 0 0 1-.702 1.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828a.491.491 0 0 0-.049-.04a.63.63 0 0 1-.036-.03a2.072 2.072 0 0 0-.219-.18a.652.652 0 0 0-.08-.044l-.048-.024l-.05-.029c-.054-.031-.109-.063-.166-.087a1.977 1.977 0 0 0-.624-.138a.56.56 0 0 1-.059-.007a.605.605 0 0 0-.082-.007H6a2 2 0 0 0-2 2v10.018a1.745 1.745 0 0 1 1.5.508V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5m-.622-12H14a.5.5 0 0 1-.5-.5V4.621zM4.25 15a.75.75 0 0 1 .75.75V20a2 2 0 1 1-4 0v-.25a.75.75 0 0 1 1.5 0V20a.5.5 0 0 0 1 0v-4.25a.75.75 0 0 1 .75-.75m3.7 0A1.95 1.95 0 0 0 6 16.95v.234c0 .614.323 1.184.85 1.5l1.529.918a.25.25 0 0 1 .121.214v.234a.45.45 0 0 1-.45.45h-.1a.45.45 0 0 1-.45-.45V20A.75.75 0 0 0 6 20v.05A1.95 1.95 0 0 0 7.95 22h.1A1.95 1.95 0 0 0 10 20.05v-.234a1.75 1.75 0 0 0-.85-1.5l-1.529-.918a.25.25 0 0 1-.121-.214v-.234a.45.45 0 0 1 .45-.45h.1a.45.45 0 0 1 .45.45V17a.75.75 0 0 0 1.5 0v-.05A1.95 1.95 0 0 0 8.05 15z"
                  ></path>
                </symbol>
                <use xlinkHref="#ai:fluent:document-javascript-24-regular"></use>
              </svg>{" "}
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Bring Your Own Framework
              </h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                Build your site using React, Svelte, Vue, Preact, web
                components, or just plain ol' HTML + JavaScript.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
            <div className="mt-1 bg-indigo-50 border shadow shadow-indigo-100/50 border-indigo-100 transition-colors rounded-lg grid place-items-center  p-2 w-10 h-10 shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:trophy-24-regular"
              >
                <symbol id="ai:fluent:trophy-24-regular">
                  <path
                    fill="currentColor"
                    d="M15.254 2a2.25 2.25 0 0 1 2.236 2h1.268a1.75 1.75 0 0 1 1.744 1.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648L6 21.25v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.246 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268a2.25 2.25 0 0 1 2.237-2zm-1 17H9.25a1.75 1.75 0 0 0-1.705 1.352l-.028.148h8.468a1.75 1.75 0 0 0-1.578-1.493zm1-15.5H8.25a.75.75 0 0 0-.75.75v5.999a4.252 4.252 0 0 0 8.503 0V4.25a.75.75 0 0 0-.75-.75m3.504 2h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243zM6 5.5H4.746a.25.25 0 0 0-.25.25v3a1.75 1.75 0 0 0 1.505 1.733z"
                  ></path>
                </symbol>
                <use xlinkHref="#ai:fluent:trophy-24-regular"></use>
              </svg>{" "}
            </div>
            <div>
              <h3 className="font-semibold text-lg">100% Static HTML, No JS</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                Astro renders your entire page to static HTML, removing all
                JavaScript from your final build by default.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
            <div className="mt-1 bg-indigo-50 border shadow shadow-indigo-100/50 border-indigo-100 transition-colors rounded-lg grid place-items-center  p-2 w-10 h-10 shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:box-24-regular"
              >
                <symbol id="ai:fluent:box-24-regular">
                  <path
                    fill="currentColor"
                    d="M10.591 2.513a3.75 3.75 0 0 1 2.818 0l7.498 3.04A1.75 1.75 0 0 1 22 7.175v9.653a1.75 1.75 0 0 1-1.093 1.621l-7.498 3.04a3.75 3.75 0 0 1-2.818 0l-7.498-3.04A1.75 1.75 0 0 1 2 16.827V7.176a1.75 1.75 0 0 1 1.093-1.622zm2.254 1.39a2.25 2.25 0 0 0-1.69 0L9.24 4.68l7.527 2.927l2.669-1.03zm1.846 4.505L7.215 5.5L4.59 6.564l7.411 2.882zM3.5 16.828a.25.25 0 0 0 .156.231l7.499 3.04c.031.013.063.025.095.036v-9.371L3.5 7.75zm9.345 3.271l7.499-3.04a.25.25 0 0 0 .156-.232V7.774l-7.75 2.992v9.37a2.18 2.18 0 0 0 .095-.036"
                  ></path>
                </symbol>
                <use xlinkHref="#ai:fluent:box-24-regular"></use>
              </svg>{" "}
            </div>
            <div>
              <h3 className="font-semibold text-lg">On-Demand Components</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                Need some JS? Astro can automatically hydrate interactive
                components when they become visible on the page.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
            <div className="mt-1 bg-indigo-50 border shadow shadow-indigo-100/50 border-indigo-100 transition-colors rounded-lg grid place-items-center  p-2 w-10 h-10 shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:box-multiple-24-regular"
              >
                <symbol id="ai:fluent:box-multiple-24-regular">
                  <path
                    fill="currentColor"
                    d="M15.78 3.737a2.25 2.25 0 0 0-1.56 0L9.913 5.33a.25.25 0 0 0-.163.234v2.793a4.75 4.75 0 0 0-1.5 0V5.563a1.75 1.75 0 0 1 1.143-1.641L13.7 2.33a3.75 3.75 0 0 1 2.6 0l4.307 1.592a1.75 1.75 0 0 1 1.143 1.641v10.67a1.75 1.75 0 0 1-1.143 1.642l-4.018 1.484c.105-.292.161-.604.161-.927v-.731l3.337-1.233a.25.25 0 0 0 .163-.235V5.563a.25.25 0 0 0-.163-.234zm-4.01 3.93a.75.75 0 1 1 .49-1.418l2.658.92a.25.25 0 0 0 .163 0l2.65-.92a.75.75 0 1 1 .492 1.418l-2.65.919a1.75 1.75 0 0 1-1.145 0zm-6 7a.75.75 0 0 1 .49-1.418l2.74.948l2.732-.947a.75.75 0 1 1 .49 1.417l-2.472.857v2.7a.75.75 0 0 1-1.5 0v-2.7zM10.3 9.53a3.75 3.75 0 0 0-2.6 0l-4.307 1.592a1.75 1.75 0 0 0-1.143 1.641v5.67a1.75 1.75 0 0 0 1.143 1.642L7.7 21.666a3.75 3.75 0 0 0 2.6 0l4.307-1.592a1.75 1.75 0 0 0 1.143-1.642v-5.67a1.75 1.75 0 0 0-1.143-1.641zm-2.08 1.407a2.25 2.25 0 0 1 1.56 0l4.307 1.592a.25.25 0 0 1 .163.234v5.67a.25.25 0 0 1-.163.235L9.78 20.259a2.25 2.25 0 0 1-1.56 0l-4.307-1.592a.25.25 0 0 1-.163-.235v-5.67a.25.25 0 0 1 .163-.234z"
                  ></path>
                </symbol>
                <use xlinkHref="#ai:fluent:box-multiple-24-regular"></use>
              </svg>{" "}
            </div>
            <div>
              <h3 className="font-semibold text-lg">Broad Integration</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                Astro supports TypeScript, Scoped CSS, CSS Modules, Sass,
                Tailwind, Markdown, MDX, and any other npm packages.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
            <div className="mt-1 bg-indigo-50 border shadow shadow-indigo-100/50 border-indigo-100 transition-colors rounded-lg grid place-items-center  p-2 w-10 h-10 shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:book-search-24-regular"
              >
                <symbol id="ai:fluent:book-search-24-regular">
                  <path
                    fill="currentColor"
                    d="M14.819 11.795a3.724 3.724 0 1 0-1.024 1.024l2.476 2.475l.067.058l.008.006a.724.724 0 0 0 .942-1.093zm-3.095-4.348a2.276 2.276 0 1 1 0 4.553a2.276 2.276 0 0 1 0-4.553M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1z"
                  ></path>
                </symbol>
                <use xlinkHref="#ai:fluent:book-search-24-regular"></use>
              </svg>{" "}
            </div>
            <div>
              <h3 className="font-semibold text-lg">SEO Enabled</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                Automatic sitemaps, RSS feeds, pagination and collections take
                the pain out of SEO and syndication. It just works!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
            <div className="mt-1 bg-indigo-50 border shadow shadow-indigo-100/50 border-indigo-100 transition-colors rounded-lg grid place-items-center  p-2 w-10 h-10 shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:people-community-24-regular"
              >
                <symbol id="ai:fluent:people-community-24-regular">
                  <path
                    fill="currentColor"
                    d="M7.5 3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M4.5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-.732 4C2.79 9 2 9.791 2 10.768v.36c0 .207 0 1.408.7 2.575c.548.91 1.477 1.727 2.975 2.093a2.777 2.777 0 0 1 1.062-1.335c-1.603-.171-2.361-.883-2.75-1.53c-.484-.806-.487-1.664-.487-1.806v-.357c0-.148.12-.268.268-.268H8.03A3.974 3.974 0 0 1 8.535 9zm11.697 0c.261.452.437.959.504 1.5h4.263c.148 0 .268.12.268.268v.357c0 .142-.003 1-.487 1.805c-.389.648-1.147 1.36-2.75 1.531c.48.32.856.786 1.062 1.335c1.498-.366 2.427-1.183 2.974-2.093c.701-1.167.701-2.367.701-2.576v-.36C22 9.792 21.209 9 20.232 9zM15 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M12 9.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M9 11a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2.5 5.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zm1.768-.268a.268.268 0 0 0-.268.268v.357c0 .142.003 1 .487 1.805c.446.743 1.377 1.57 3.513 1.57s3.067-.827 3.513-1.57c.484-.805.487-1.663.487-1.805v-.357a.268.268 0 0 0-.268-.268z"
                  ></path>
                </symbol>
                <use xlinkHref="#ai:fluent:people-community-24-regular"></use>
              </svg>{" "}
            </div>
            <div>
              <h3 className="font-semibold text-lg">Community</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                Astro is an open source project powered by hundreds of
                contributors making thousands of individual contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
