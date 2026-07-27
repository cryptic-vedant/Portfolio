import { NextResponse } from "next/server";

const username = process.env.GITHUB_USERNAME!;
const token = process.env.GITHUB_TOKEN!;

export async function GET() {
  try {
    const profileRes = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const profile = await profileRes.json();
    const repos = await reposRes.json();

    return NextResponse.json({
      profile,
      repos,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}