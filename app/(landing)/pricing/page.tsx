export default function Pricing() {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="mt-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          {" "}
          Pricing{" "}
        </h1>
        <p className="text-lg mt-4 text-slate-500 mx-auto max-w-xl">
          Simple &amp; Predictable pricing. No Surprises.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
        <div>
          <div className="flex flex-col w-full order-first lg:order-none border py-5 px-6 relative rounded-lg  border-neutral-200 shadow-sm">
            <div className="">
              <h3 className="text-indigo-600"> Starter </h3>
              <p className="mt-2 text-black">
                {" "}
                <span className="flex items-baseline">
                  {" "}
                  <span className=""> $</span>{" "}
                  <span className="font-bold text-2xl  md:text-4xl"> 49</span>{" "}
                  <span className="ml-1 text-neutral-600">/month</span>{" "}
                </span>{" "}
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Perfect for startups
              </p>
            </div>
            <ul className="grid mt-8 text-left gap-y-4">
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
                <span className="text-sm">Lifetime free</span>{" "}
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
                <span className="text-sm">Up to 3 users</span>{" "}
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
                <span className="text-sm">Unlimited Pages</span>{" "}
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
                <span className="text-sm">Astro Sub domain</span>{" "}
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
                <span className="text-sm">Basic Integrations</span>{" "}
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
                <span className="text-sm">Community Support</span>{" "}
              </li>
            </ul>
            <div className="flex mt-8">
              {" "}
              <a
                href="/"
                className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo w-full px-7 py-2.5 bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600 "
              >
                Get Started{" "}
              </a>{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-full order-first lg:order-none border py-5 px-6 relative rounded-lg   border-orange-500 shadow-lg shadow-orange-50">
            <span className="inline-flex absolute px-3 py-1 text-xs -top-3 left-1/2 -translate-x-1/2 font-medium rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white ">
              Popular
            </span>
            <div className="">
              <h3 className="text-orange-700"> Business </h3>
              <p className="mt-2 text-black">
                {" "}
                <span className="flex items-baseline">
                  {" "}
                  <span className=""> $</span>{" "}
                  <span className="font-bold text-2xl  md:text-4xl"> 149</span>{" "}
                  <span className="ml-1 text-neutral-600">/month</span>{" "}
                </span>{" "}
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                For serious businesses
              </p>
            </div>
            <ul className="grid mt-8 text-left gap-y-4">
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
                <span className="text-sm">All Free Features</span>{" "}
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
                <span className="text-sm">Up to 20 users</span>{" "}
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
                <span className="text-sm">20 Custom domains</span>{" "}
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
                <span className="text-sm">Unlimited Collaborators</span>{" "}
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
                <span className="text-sm">Advanced Integrations</span>{" "}
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
                <span className="text-sm">Priority Support</span>{" "}
              </li>
            </ul>
            <div className="flex mt-8">
              {" "}
              <a
                href="#"
                className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo w-full px-7 py-2.5 bg-indigo-600 text-white hover:bg-indigo-800"
              >
                Get Started{" "}
              </a>{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-full order-first lg:order-none border py-5 px-6 relative rounded-lg  border-neutral-200 shadow-sm">
            <div className="">
              <h3 className="text-purple-600"> Enterprise </h3>
              <p className="mt-2 text-black">
                {" "}
                <span className="font-bold text-2xl  md:text-4xl">
                  {" "}
                  Custom
                </span>{" "}
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Suitable for Enterprise solutions
              </p>
            </div>
            <ul className="grid mt-8 text-left gap-y-4">
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
                <span className="text-sm">All Pro Features</span>{" "}
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
                <span className="text-sm">Unlimited Custom domains</span>{" "}
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
                <span className="text-sm">99.99% Uptime SLA</span>{" "}
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
                <span className="text-sm">SAML &amp; SSO Integration</span>{" "}
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
                <span className="text-sm">Dedicated Account Manager</span>{" "}
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
                <span className="text-sm">24/7 Phone Support</span>{" "}
              </li>
            </ul>
            <div className="flex mt-8">
              {" "}
              <a
                href="/contact"
                className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo w-full px-7 py-2.5 bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600 "
              >
                Contact us{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="mt-16">
          <h3 className="text-xl lg:text-3xl font-bold lg:tracking-tight">
            Compare Plans
          </h3>
          <p className="mt-1 text-slate-600">
            Use the table below to compare full features of this product.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto lg:overflow-visible w-full border border-slate-200 rounded-md">
          <div className="min-w-max">
            <div className="sticky top-0 py-6 bg-white border-b border-slate-200 rounded-t-md">
              <div className="grid grid-cols-5 gap-0 items-center bg-white">
                <div className="text-slate-500 px-5">Compare Plans</div>
                <div className="px-5">
                  <h3 className="text-neutral-800">Free</h3>
                  <div className="text-xl mt-1 lg:text-2xl font-bold text-black">
                    {" "}
                    $0{" "}
                  </div>
                  <div className="flex mt-3">
                    {" "}
                    <a
                      href="#"
                      className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo w-full px-4 py-2 text-sm bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600 "
                    >
                      Get Started
                    </a>{" "}
                  </div>
                </div>
                <div className="px-5">
                  <h3 className="text-indigo-600">Starter</h3>
                  <div className="text-xl mt-1 lg:text-2xl font-bold text-black">
                    {" "}
                    $49/mo{" "}
                  </div>
                  <div className="flex mt-3">
                    {" "}
                    <a
                      href="#"
                      className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo w-full px-4 py-2 text-sm bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600 "
                    >
                      Get Started
                    </a>{" "}
                  </div>
                </div>
                <div className="px-5">
                  <h3 className="text-orange-700">Business</h3>
                  <div className="text-xl mt-1 lg:text-2xl font-bold text-black">
                    {" "}
                    $149/mo{" "}
                  </div>
                  <div className="flex mt-3">
                    {" "}
                    <a
                      href="#"
                      className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo w-full px-4 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-800"
                    >
                      Get Started
                    </a>{" "}
                  </div>
                </div>
                <div className="px-5">
                  <h3 className="text-purple-600">Enterprise</h3>
                  <div className="text-xl mt-1 lg:text-2xl font-bold text-black">
                    {" "}
                    Custom{" "}
                  </div>
                  <div className="flex mt-3">
                    {" "}
                    <a
                      href="#"
                      className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo w-full px-4 py-2 text-sm bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600 "
                    >
                      Get Started
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-0 items-center">
              <div className="grid">
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Custom Domains{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Storage
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Users
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Email Support{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  API Access
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  SSO Integration{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Data Export{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  File Uploads{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Analytics
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Custom Branding{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  24/7 Support{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Priority Access{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Custom Reporting{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Team Collaboration{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  Integration with CRM{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  White Label{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Data Security{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Mobile App Access{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  User Permissions{" "}
                </div>
                <div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">
                  {" "}
                  Backup and Restore{" "}
                </div>
              </div>
              <div className="grid gap-0">
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Single Subdomain
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  1GB{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  10{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Email Only{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Limited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Basic{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Limited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Basic{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Basic{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Limited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
              </div>
              <div className="grid gap-0">
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  1 Custom Domain{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  10GB{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  100{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Email and Chat{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Unlimited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Basic{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Limited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Basic{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Limited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Basic{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Limited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
              </div>
              <div className="grid gap-0">
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  5 Custom Domains
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  50GB{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  500{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Email, Chat, and Phone
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Unlimited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Advanced{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Limited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Advanced{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  -{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Advanced{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Unlimited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
              </div>
              <div className="grid gap-0">
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  100 Custom Domains
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  200GB{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Unlimited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  24/7 Support{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Unlimited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Advanced{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Unlimited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Advanced{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Advanced{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
                  {" "}
                  Unlimited{" "}
                </div>
                <div className="border-b border-slate-200 odd:bg-slate-50 text-sm py-3 px-5">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="mt-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            {" "}
            FAQ{" "}
          </h1>
          <p className="text-lg mt-4 text-slate-500 mx-auto max-w-xl">
            {" "}
            Frequenty asked questions{" "}
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                {" "}
                <span> What is Astroship's API-based SAAS platform?</span>{" "}
                <span className="transition group-open:rotate-180">
                  {" "}
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>{" "}
                </span>{" "}
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {" "}
                Astroship's API-based SAAS platform is a cloud-based software
                service that allows users to access and use a variety of
                API-powered tools and functionality.{" "}
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                {" "}
                <span> How does Astroship's billing work?</span>{" "}
                <span className="transition group-open:rotate-180">
                  {" "}
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>{" "}
                </span>{" "}
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {" "}
                Astroship offers a variety of billing options, including monthly
                and annual subscription plans, as well as pay-as-you-go pricing
                for certain services. Payment is typically made through a credit
                card or other secure online payment method.{" "}
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                {" "}
                <span>
                  {" "}
                  Can I get a refund for my Astroship subscription?
                </span>{" "}
                <span className="transition group-open:rotate-180">
                  {" "}
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>{" "}
                </span>{" "}
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {" "}
                Astroship offers a 30-day money-back guarantee for most of its
                subscription plans. If you are not satisfied with your
                subscription within the first 30 days, you can request a full
                refund. Refunds for subscriptions that have been active for
                longer than 30 days may be considered on a case-by-case basis.{" "}
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                {" "}
                <span> How do I cancel my Astroship subscription?</span>{" "}
                <span className="transition group-open:rotate-180">
                  {" "}
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>{" "}
                </span>{" "}
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {" "}
                To cancel your Astroship subscription, you can log in to your
                account and navigate to the subscription management page. From
                there, you should be able to cancel your subscription and stop
                future billing.{" "}
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                {" "}
                <span> Can I try Astroship's API platform for free?</span>{" "}
                <span className="transition group-open:rotate-180">
                  {" "}
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>{" "}
                </span>{" "}
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {" "}
                Astroship offers a free trial of its API platform for a limited
                time. During the trial period, you will have access to a limited
                set of features and functionality, but you will not be charged.{" "}
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                {" "}
                <span>
                  {" "}
                  How do I access Astroship's API documentation?
                </span>{" "}
                <span className="transition group-open:rotate-180">
                  {" "}
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>{" "}
                </span>{" "}
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {" "}
                Astroship's API documentation is available on the company's
                website and can be accessed by logging in to your account. The
                documentation provides detailed information on how to use the
                API, as well as code examples and other resources.{" "}
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                {" "}
                <span> How do I contact support?</span>{" "}
                <span className="transition group-open:rotate-180">
                  {" "}
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>{" "}
                </span>{" "}
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {" "}
                If you need help with Astroship's API platform or have any other
                questions, you can contact the company's support team by
                submitting a support request through the website or by emailing
                support@Astroship.com.{" "}
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                {" "}
                <span> Do you offer any discounts or promotions?</span>{" "}
                <span className="transition group-open:rotate-180">
                  {" "}
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>{" "}
                </span>{" "}
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {" "}
                Astroship may offer discounts or promotions from time to time.
                To stay up-to-date on the latest deals and special offers, you
                can sign up for the company's newsletter or follow it on social
                media.{" "}
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                {" "}
                <span>
                  {" "}
                  How does Astroship compare to other similar services?
                </span>{" "}
                <span className="transition group-open:rotate-180">
                  {" "}
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>{" "}
                </span>{" "}
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {" "}
                Astroship's API platform is a highly reliable and feature-rich
                service that offers a wide range of tools and functionality. It
                is competitively priced and offers a variety of billing options
                to suit different needs and budgets.{" "}
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
