import corsify from "../lib/corsify.js"

export default async (req, res) => {
  await corsify(req, res)

  let url = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt="
  let market = req.query.market || "es-ES"

  let result = await fetch(url + market)
  res.set('Cache-Control', 'public, s-maxage=43200')
  return res.json(await result.json())
}
