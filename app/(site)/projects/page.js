import { Suspense } from "react";
import ProjectsGrid from "../ui/projects/projectsGrid";
import { ProjectsGridSkeleton } from "../ui/skeletons/skeletons";
import ProjectsGridClient from "../ui/projects/ProjectsGridClient";


const Page = async () => {
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
            <Suspense fallback={<ProjectsGridSkeleton />}>
              {/* <ProjectsGrid /> */}
              <ProjectsGridClient />
            </Suspense>
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
