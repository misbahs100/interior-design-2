import { Suspense } from "react";
import { fetchSixProducts } from "../lib/data";
import { ProjectsGridSkeleton } from "./skeletons/skeletons";
import ProjectsGridClient from "./projects/ProjectsGridClient";
import Link from "next/link";

const RecentWork = async () => {
  const projects = await fetchSixProducts();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-2">

        <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Our Recent Works may impress you
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          We are in extremely love with eco-friendly systems.
        </p>
        <Suspense fallback={<ProjectsGridSkeleton />}>
          <ProjectsGridClient projects={projects} />
        </Suspense>
      </div>
      <div className="flex justify-center">
        <Link href={`/projects`}>
          <button
            href="/projects"
            className="inline-block mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold uppercase tracking-wide rounded hover:bg-yellow-600 transition"
          >
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RecentWork;
