const isEngineer = (req, res, next) => {
    if (req.user.role !== 'engineer') {
      return res.status(403).json({ error: 'Forbidden: Engineer access required' });
    }
    next();
  };
  
  export default isEngineer;
  