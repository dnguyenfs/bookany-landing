import Link from "next/link";
import { PageFooter } from "./components/page-footer";
import { PageHeader } from "./components/page-header";

export default function NotFound() {
  return (
    <>
      <PageHeader />
      <div className="max-w-screen-xl mx-auto px-5">
        {" "}
        <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center">
          {" "}
          <div className="mt-16 text-center">
            {" "}
            <h1 className="text-6xl lg:text-9xl font-bold lg:tracking-tight bg-gradient-to-b from-indigo-600 to-indigo-300 bg-clip-text text-transparent">
              404
            </h1>{" "}
            <p className="text-lg lg:text-2xl font-medium mt-4 text-slate-700">
              The page you are looking for doesn’t exist.
            </p>{" "}
            <div className="mt-10">
              {" "}
              <Link
                href="/"
                className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-7 py-2.5 bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600 "
              >
                Back to Home{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <PageFooter />
    </>
  );
}
