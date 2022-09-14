import {LogLevel} from '../types/ILogging';

class Logger {
  static log = (content: string, logLevel: LogLevel) => {
    switch (logLevel) {
      case 'info':
        console.info(`[INFO]: ${content}`);
        break;
      case 'debug':
        console.debug(`[DEBUG]: ${content}`);
        break;
      case 'warn':
        console.warn(`[WARN]: ${content}`);
        break;
      case 'error':
        console.error(`[ERROR]: ${content}`);
        break;
    }
  };

  static mongoStatus = (err: string | undefined) => {
    if (!err) {
      Logger.log('Successfully connected to MongoDB', 'info');
    } else {
      Logger.log('Failed to connected to MongoDB', 'error');
    }
  };

  static serverListening = () => {
    Logger.log(`API started on port: ${process.env.PORT}`, 'info');
  };
}

export default Logger;
