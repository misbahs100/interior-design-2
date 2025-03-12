import { sql } from "@vercel/postgres";

const ITEMS_PER_PAGE = 6;

export async function fetchProducts() {
  try {
    
    const projects = await sql`
        SELECT *
        FROM projects
        ORDER BY projects.id DESC
      `;

    return projects.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch projects.");
  }
}

export async function fetchSixProducts() {
  try {
    const projects = await sql`
          SELECT *
          FROM projects
          ORDER BY projects.id DESC
          LIMIT ${ITEMS_PER_PAGE} 
        `;

    return projects.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch first six projects.");
  }
}

export async function fetchSingleProject(id) {
    try {
      const project = await sql`
            SELECT *
            FROM projects
            WHERE projects.id = ${id};
          `;
  
      return project.rows[0];
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch single project.");
    }
  }
