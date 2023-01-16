export interface LoggerServiceInterface {
  /**
   * Write a 'log' level log.
   */
  log(message: any): any;
  /**
   * Write an 'error' level log.
   */
  error(message: any): any;
  /**
   * Write a 'warn' level log.
   */
  warn(message: any): any;
  /**
   * Write a 'debug' level log.
   */
  debug?(message: any): any;
}
