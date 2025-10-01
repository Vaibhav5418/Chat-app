export class Validation {
    static isValidUsername(username: string): boolean {
        return username.trim().length > 0;
    }

    static isValidRoomId(roomId: string): boolean {
        return /^[a-zA-Z0-9_-]+$/.test(roomId);
    }
}
