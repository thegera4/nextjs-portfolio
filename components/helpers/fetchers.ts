export async function getProjects() {
  const res = await fetch('/api/projects')
  return res
}