import winston from 'winston';
import path from 'path';
import fs from 'fs';

const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

// Utility to get the caller file
function getCallerFile(): string {
  const err = new Error();
  const stack = err.stack?.split('\n') || [];
  const callerLine = stack[3]; // Adjust this if nesting is deeper
  const match = callerLine?.match(/\(([^)]+)\)/);
  if (match && match[1]) {
    const fullPath = match[1].split(':')[0];
    return path.basename(fullPath);
  }
  return 'unknown';
}

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  const callerFile = getCallerFile();
  return `${timestamp} [${level.toUpperCase()}] [${callerFile}] ${message}`;
});

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), logFormat),
    }),
    new winston.transports.File({ filename: path.join(logDir, 'server.log'), format: logFormat }),
  ],
});

(globalThis as any).logger = logger;

export default logger;
