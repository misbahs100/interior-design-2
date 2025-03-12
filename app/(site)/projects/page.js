import { Suspense } from "react";
import ProjectsGrid from "../ui/projects/projectsGrid";
import { ProjectsGridSkeleton } from "../ui/skeletons/skeletons";
import { fetchProducts } from "../lib/data";
import Link from "next/link";
import Image from "next/image";

const Page = async () => {
  const projects = await fetchProducts();
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <section className="">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Our Recent Works may impress you
            </h2>
            <p className="mb-12 text-gray-600">
              We are in extremely love with eco-friendly systems.
            </p>
            {/* <Suspense fallback={<ProjectsGridSkeleton />}>
              <ProjectsGrid />
            </Suspense> */}
            
<section className="py-16">
        <div className="container mx-auto text-center">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div className="flex flex-col">
              <Link href={`/projects/${project.id}/${project.title}`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                 
                    <Image
                      width={100}
                      height={100}
                      src={project.project_image.split(",")[0]}
                      alt={`${project.title}`}
                      className="h-48 w-full transform object-cover transition hover:scale-105"
                    />
                  
                   
                  <span
                    className={`absolute right-3 top-3 rounded-full px-4 py-1 text-sm font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </Link>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <p className="text-left font-bold text-black dark:text-white">
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>














            {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Page;
