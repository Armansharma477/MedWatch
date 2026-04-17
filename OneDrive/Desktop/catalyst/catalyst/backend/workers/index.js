// Import all workers
const meetingProcessor = require('./meetingProcessor');
const performanceScorer = require('./performanceScorer');
const recommendationEngine = require('./recommendationEngine');
const promotionAnalyzer = require('./promotionAnalyzer');

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [new winston.transports.Console()]
});

logger.info('All workers initialized');

module.exports = {
  meetingProcessor,
  performanceScorer,
  recommendationEngine,
  promotionAnalyzer
};
