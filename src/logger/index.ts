import winston from "winston";
const { format, createLogger, transports } = winston;
const { timestamp: timestamp, printf: printf } = format;

const logFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} ${level}: ${message}`;
});

export default createLogger({
  level: "info",
  format: format.combine(
    timestamp({ format: "HH:mm:ss" }),
    logFormat
  ),
  transports: [
    new transports.File({
      filename: 'log.txt',
    })
  ],
});
