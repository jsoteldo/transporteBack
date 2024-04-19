import jwt  from 'jsonwebtoken';

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
console.log(req.headers?.authorization);
console.log(authHeader?.startsWith('Bearer '));
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({msg: "Unauthorized. Please add valid token"});
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_JWT_SECRET)
    const { id, name } = decoded
    req.user = { id, name }
    next()
  } catch (error) {
    return res.status(401).json({msg: "Unauthorized. Please add valid token"});
  }
}

export default authenticationMiddleware