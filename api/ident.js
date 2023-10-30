import corsify from "../lib/corsify.js"

export default async (req, res) => {
  await corsify(req, res)
  return res.json(req.headers)
}