const winston = require('winston');
const Log = require('../models/Log');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({ format: winston.format.simple() }));
}

// also save minimal logs into DB (non-blocking)
async function createLog(userId, action, meta = {}, ip) {
  try {
    await Log.create({ userId, action, meta, ip });
  } catch (err) {
    logger.error('Failed to write log to DB', err);
  }
}

module.exports = { logger, createLog };
