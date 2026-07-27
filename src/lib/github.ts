const username = process.env.GITHUB_USERNAME!;
const token = process.env.GITHUB_TOKEN!;

const headers = {
  Authorization: `Bearer ${token}`,
};

export async function getGithubProfile() {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers,
    cache: "no-store",
  });

  return res.json();
}

export async function getRepositories() {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers,
      cache: "no-store",
    }
  );

  return res.json();
}