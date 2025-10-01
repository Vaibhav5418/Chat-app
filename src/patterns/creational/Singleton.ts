// Generic Singleton Base Class
export abstract class Singleton<T> {
    private static _instance: any;

    protected constructor() {
        // prevent direct instantiation
        if ((this.constructor as any)._instance) {
            throw new Error(`${this.constructor.name} is a singleton and already has an instance!`);
        }
    }

    static getInstance<T>(this: new () => T): T {
        const ctor = this as any;
        if (!ctor._instance) {
            ctor._instance = new ctor();
        }
        return ctor._instance;
    }
}
