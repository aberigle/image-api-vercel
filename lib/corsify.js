
import Cors from "cors"

const cors = Cors()

export default (req, res)  => {
  return new Promise(resolve => cors(req, res, resolve))
}
