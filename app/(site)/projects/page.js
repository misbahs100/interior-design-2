import { Suspense } from "react";
import ProjectsGrid from "../ui/projects/projectsGrid";
import { ProjectsGridSkeleton } from "../ui/skeletons/skeletons";
import ProjectsGridClient from "../ui/projects/ProjectsGridClient";
import { fetchProducts } from "../lib/data";
import { SingleProject } from "../ui/projects/SingleProject";


// const Page = async () => {
//   return (
//     <section className="py-20 lg:py-25 xl:py-30">
//       <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
//         <section className="">
//           <div className="container mx-auto text-center">
//             <h2 className="mb-4 text-3xl font-bold">
//               Our Recent Works may impress you
//             </h2>
//             <p className="mb-12 text-gray-600">
//               We are in extremely love with eco-friendly systems.
//             </p>
//             <Suspense fallback={<ProjectsGridSkeleton />}>
//               {/* <ProjectsGrid /> */}
//               <ProjectsGridClient />
//             </Suspense>
//             {/* <div className="mt-5 flex w-full justify-center">
//         <Pagination totalPages={totalPages} />
//       </div> */}
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

// export default Page;

const Page = async () => {
  const projects = await fetchProducts();
    function cleanString(str) {
        // Remove special characters
        str = str.replace(/[^\w\s]/gi, '');
        // Replace spaces with hyphens
        str = str.replace(/\s+/g, '-');
        return str;
    }

    const projectsClone = projects.map(project => {
        return {
            ...project,
            title: cleanString(project.title)
        };
    });

    

    
    return (
        <>
        <section className="py-16">
        <div className="container mx-auto text-center">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsClone.map((project, index) => (
              <SingleProject key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
        </>
    );
  }

  export default Page;