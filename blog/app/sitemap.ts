export const baseUrl = 'https://hddempsey.github.io'
export const dynamic = 'force-static'

export default async function sitemap() {
  return [{ url: baseUrl, lastModified: new Date().toISOString().split('T')[0] }]
}
