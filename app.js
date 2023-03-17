const express = require('express');
const expressApp = express();

const port = 3000;

expressApp.use((req, res, next) => {
  res.append('Content-Security-Policy', 'frame-ancestors teams.microsoft.com *.teams.microsoft.com *.skype.com');
  next();
});
expressApp.use(express.static('public'));

expressApp.listen(port, () => console.log(`Listening on port ${port}`));
