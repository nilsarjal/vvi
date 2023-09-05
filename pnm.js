module.exports = (req, res) => {
  res.writeHead(302, {
    Location: 'https://example.com', // URL to redirect to
  });
  res.end();
};
