declare class ApiError extends Error {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    static badRequest(message: string): ApiError;
    static internal(message: string): ApiError;
    static forbidden(message: string): ApiError;
}
export default ApiError;
//# sourceMappingURL=ApiError.d.ts.map