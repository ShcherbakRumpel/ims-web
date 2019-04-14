global.appRoot = __dirname;
require('./core/globals');
require('./core/db');
require('./models');

const colors = require('colors/safe');
const  checkSettingsHaveBeenChanged = require('./services/checkSettingsHaveBeenChanged');
const { startSendEvaluationRequestService, stopSendEvaluationRequestService } = require('./services/sendEvaluationRequestService');

colors.enabled = true;
logger.debug(`Service Worker started (ENV: ${colors.cyan(process.env.NODE_ENV)})!`);

const minutes = 5;
const interval = minutes * 60 * 1000;

startSendEvaluationRequestService();

setInterval(() => {
  checkSettingsHaveBeenChanged()
    .then(isChanged => {
      if (isChanged) {
        stopSendEvaluationRequestService();
        startSendEvaluationRequestService();
      }
    });
}, interval);
