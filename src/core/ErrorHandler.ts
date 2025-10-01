import { Logger } from "./Logger";

export class ErrorHandler {
    static handle(error: unknown): void {
        if (error instanceof Error) {
            Logger.error(error.message);
        } else {
            Logger.error("An unknown error occurred");
        }
    }
}
