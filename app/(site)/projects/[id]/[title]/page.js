
import { fetchSingleProject } from "@/app/(site)/lib/data";
import { Carousel } from "@/app/(site)/ui/projects/carousel";


export default async function Page(props) {
  const params = await props.params;
  console.log(params.id);
  const id = params.id;
  const project = await fetchSingleProject(id);
  const imageUrlsArray = project.project_image.split(',');

  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="py-8">
                <h1 className="mb-2 text-3xl font-bold">{project.title}</h1>
                <h1 className="mb-2 text-lg font-normal">
                  {project.client_name}, {project.client_address}
                </h1>
                <p className="text-sm text-gray-500">
                  {" "}
                  Completed on {project.completion_time}{" "}
                </p>
              </div>

              {/* <img
                src={project.project_image}
                alt="Featured image"
                className="mb-8 h-auto w-full"
              /> */}
              <div className="my-5">
              <Carousel imageUrlsArray={imageUrlsArray} />
              </div>

              <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                <p className="text-justify">{project.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


