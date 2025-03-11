import Image from "next/image";
import Link from "next/link";

export const SingleProject = ({ project }) => {
  const id = project.id;
  const title = project.title;
  const imageUrlsArray = project.project_image.split(",");
  const imageSrc = imageUrlsArray[0];
  return (
    <div className="flex flex-col">
      <Link href={`/projects/${id}/${title}`}>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          {imageSrc ? (
            <Image
              width={100}
              height={100}
              src={imageSrc}
              alt={`${title}`}
              className="h-48 w-full transform object-cover transition hover:scale-105"
            />
          ) : (
            <Image
              width={100}
              height={100}
              src="/images/features/features-03.png"
              alt={`${title}`}
              className="h-48 w-full transform object-cover transition hover:scale-105"
            />
          )}
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
  );
};
