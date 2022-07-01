export default class ResponseError extends Error {
  constructor(message: string | undefined) {
    super(message);
  }
}
