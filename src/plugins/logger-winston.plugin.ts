import winston from "winston";
const { combine, timestamp, json } = winston.format;
type LogMetadata = Record<string, unknown>;
export class Logger {
  private readonly className: string;
  private readonly logger: winston.Logger;
  constructor(className: string) {
    this.className = className;
    this.logger = winston.createLogger({
      levels: { error: 0, info: 1 },
      level: "info",
      format: combine(timestamp(), json()),
      transports: [
        new winston.transports.File({ filename: "logs/application.log" }),
      ],
    });
  }
  info(message: string, metadata: LogMetadata = {}): void {
    this.logger.info(message, { className: this.className, ...metadata });
  }
  error(message: string, metadata: LogMetadata = {}): void {
    this.logger.error(message, { className: this.className, ...metadata });
  }
}
