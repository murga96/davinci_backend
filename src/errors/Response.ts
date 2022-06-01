export class CustomResponse {
    statusCode: number | null;
    timestamp: Date;
    message: string;
    error: unknown;
    path: string;
}