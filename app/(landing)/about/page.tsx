import { TrustedMerchants } from "@/app/components/trusted-merchants";

export default function AboutPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="mt-16 text-center">
        <div className="mb-4">
          {" "}
          <span className="bg-purple-100 border-purple-200 border text-purple-600 rounded-full text-xs font-medium px-3 py-1 ">
            ABOUT US{" "}
          </span>{" "}
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          {" "}
          We're Building Future{" "}
        </h1>
        <p className="text-lg mt-4 text-slate-500 mx-auto max-w-xl">
          We're a multi-cultural team from around the world! We come from
          diverse backgrounds, bringing different personalities, experiences and
          skills to the job. This is what makes our team so special..
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
      <div className="mt-16 border-y py-6 border-slate-100">
        <TrustedMerchants />
      </div>
      <div className="grid sm:grid-cols-2 gap-10 mx-auto mt-24">
        <div className="relative">
          <div className="absolute hidden md:block w-96 h-96 bg-purple-100 rounded-full right-0 top-1/3 -z-10"></div>
          <div className="absolute hidden md:block w-44 h-44 bg-purple-100 rounded-full left-10 top-1/4 -z-10"></div>
          <picture>
            <source
              srcSet="https://astroship-pro.web3templates.com/_astro/employee.z64nYtdP_Z21kYiC.avif"
              type="image/avif"
            />
            <source
              srcSet="https://astroship-pro.web3templates.com/_astro/employee.z64nYtdP_Zxm266.webp"
              type="image/webp"
            />{" "}
            <img
              src="https://astroship-pro.web3templates.com/_astro/employee.z64nYtdP_Wg19w.jpg"
              alt="Happy Team"
              className="rounded-xl w-full max-w-md mx-auto shadow-2xl"
              loading="lazy"
              width="1270"
              height="1652"
              decoding="async"
            />
          </picture>
        </div>
        <div className="place-self-center">
          <h2 className="text-5xl text-gray-800 tracking-tight -mt-2">
            {" "}
            <span className="text-indigo-600">Our</span>
            <strong>Mission</strong>{" "}
          </h2>
          <p className="text-lg max-w-xl mt-4 leading-relaxed text-slate-500">
            We're a multi-cultural team from around the world! We come from
            diverse backgrounds, bringing different personalities, experiences
            and skills to the job. This is what makes our team so special.
          </p>
          <ul className="grid mt-6 text-left gap-y-4">
            <li className="flex items-center gap-3 text-slate-800">
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
              <span className="text-slate-600">
                Intelligent Task Management
              </span>{" "}
            </li>
            <li className="flex items-center gap-3 text-slate-800">
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
              <span className="text-slate-600">Real-time Collaboration</span>{" "}
            </li>
            <li className="flex items-center gap-3 text-slate-800">
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
              <span className="text-slate-600">
                Data Security &amp; Privacy
              </span>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-4xl lg:text-5xl lg:tracking-tight text-center">
          Core <span className="text-indigo-600 font-bold">Team</span>{" "}
        </h2>
        <p className="text-lg mt-4 text-slate-600 text-center">
          Astroship is built by these awesome individuals.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-10 mx-auto mt-12">
        <div className="group">
          <div className="w-full aspect-square">
            <picture>
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/photo-1487309078313-fad80c3ec1e5_ZsWNHo.avif"
                type="image/avif"
              />
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/photo-1487309078313-fad80c3ec1e5_1OLRzu.webp"
                type="image/webp"
              />{" "}
              <img
                src="https://astroship-pro.web3templates.com/_astro/photo-1487309078313-fad80c3ec1e5_ZK1YYu.png"
                alt="Daniel Collins"
                loading="lazy"
                className="w-full h-full object-cover bg-white rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
                width="400"
                height="400"
                decoding="async"
              />
            </picture>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg text-gray-800">Daniel Collins</h2>
            <h3 className="text-sm text-slate-500"> Chief Sales Officer </h3>
          </div>
        </div>
        <div className="group">
          <div className="w-full aspect-square">
            <picture>
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/photo-1553514029-1318c9127859_Z1EVsJT.avif"
                type="image/avif"
              />
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/photo-1553514029-1318c9127859_6dSmJ.webp"
                type="image/webp"
              />{" "}
              <img
                src="https://astroship-pro.web3templates.com/_astro/photo-1553514029-1318c9127859_2rC27d.png"
                alt="Janette Lynch"
                loading="lazy"
                className="w-full h-full object-cover bg-white rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
                width="400"
                height="400"
                decoding="async"
              />
            </picture>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg text-gray-800">Janette Lynch</h2>
            <h3 className="text-sm text-slate-500"> Senior Director </h3>
          </div>
        </div>
        <div className="group">
          <div className="w-full aspect-square">
            <picture>
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/photo-1611695434369-a8f5d76ceb7b_Z2spKw9.avif"
                type="image/avif"
              />
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/photo-1611695434369-a8f5d76ceb7b_Z9F4eg.webp"
                type="image/webp"
              />{" "}
              <img
                src="https://astroship-pro.web3templates.com/_astro/photo-1611695434369-a8f5d76ceb7b_2kHc0G.png"
                alt="Marcell Ziemann"
                loading="lazy"
                className="w-full h-full object-cover bg-white rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
                width="400"
                height="400"
                decoding="async"
              />
            </picture>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg text-gray-800">Marcell Ziemann</h2>
            <h3 className="text-sm text-slate-500"> Principal Strategist </h3>
          </div>
        </div>
        <div className="group">
          <div className="w-full aspect-square">
            <picture>
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/photo-1519345182560-3f2917c472ef_ZcGVjR.avif"
                type="image/avif"
              />
              <source
                srcSet="https://astroship-pro.web3templates.com/_astro/photo-1519345182560-3f2917c472ef_262JX1.webp"
                type="image/webp"
              />{" "}
              <img
                src="https://astroship-pro.web3templates.com/_astro/photo-1519345182560-3f2917c472ef_ZtL7AX.png"
                alt="Robert Palmer"
                loading="lazy"
                className="w-full h-full object-cover bg-white rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
                width="400"
                height="400"
                decoding="async"
              />
            </picture>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg text-gray-800">Robert Palmer</h2>
            <h3 className="text-sm text-slate-500"> Marketing Engineer </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
