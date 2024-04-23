const isNormalUser = (req, res, next) => {
    if (req.user.role !== 'normal') {
      return res.status(403).json({ error: 'Forbidden: Normal user access required' });
    }
    next();
  };
  
  export default isNormalUser;
  