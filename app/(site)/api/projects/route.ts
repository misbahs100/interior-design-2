import { NextRequest, NextResponse } from 'next/server';
import { fetchProjects } from '../../lib/data';

export async function GET(request: NextRequest) {
    try {
        const projects = await fetchProjects();
        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}
