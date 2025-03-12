"use client";

import { ProjectsGridSkeleton } from "../skeletons/skeletons";
import ProjectsGridClient from "./ProjectsGridClient";
import { useEffect, useState, useCallback, useRef } from "react";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProjectsRef = useRef(false);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await fetch(`/api/projects`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const projects = await response.json();
      setProjects(projects);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!fetchProjectsRef.current) {
      fetchProjectsRef.current = true;
      fetchProjects();
    }
  }, [fetchProjects]);

  if (loading) {
    return <ProjectsGridSkeleton />; // ✅ Show skeleton while loading
  }

  return <ProjectsGridClient projects={projects} />;
}