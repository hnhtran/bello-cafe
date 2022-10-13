module.exports = function ensureLoggedIn(req, res, next) {
    if (!req.user) return res.status(401).json({ err: 'Not Authorized' });
    next();
}