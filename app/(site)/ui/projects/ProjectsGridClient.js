import { fetchProducts } from "../../lib/data";
import { SingleProject } from "./SingleProject";


export default async function ProjectsGridClient() {
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
  