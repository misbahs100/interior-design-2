import { fetchProducts } from "@/app/(site)/lib/data";
import ProjectsGridClient from "./ProjectsGridClient";


export default async function ProjectsGrid() {
  const projects = await fetchProducts();
  return <ProjectsGridClient projects={projects} />;
}
