import got from "got"
import Cors from "cors"

const cors = Cors()

function middleware(req, res, fn) {
  return new Promise(resolve => fn(req, res, resolve))
}

export default async (req, res) => {
  await middleware(req, res, cors)

  let url = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt="
  let market = req.query.market || "es-ES"

  let result = await got(url + market).json()

  return res.json(result)
}