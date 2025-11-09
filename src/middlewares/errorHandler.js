module.exports = (err, req, res, next) => {
  console.error(err.stack); // Menampilkan error di terminal
  res.status(500).json({ success: false, message: 'Server error' });
};