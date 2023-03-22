const express = require('express');
const expressApp = express();

const port = 3000;

expressApp.use((req, res, next) => {
	console.log(req);
  res.append('Content-Security-Policy', 'frame-ancestors teams.microsoft.com *.teams.microsoft.com *.skype.com');
  res.append('X-Content-Security-Policy', 'frame-ancestors teams.microsoft.com *.teams.microsoft.com *.skype.com');
  res.append('X-Frame-Options', 'allow-from https://teams.microsoft.com/')
  next();
});
expressApp.use(express.static('public'));

expressApp.listen(port, () => console.log(`Listening on port ${port}`));
