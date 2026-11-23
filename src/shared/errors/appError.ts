export type AppErrorCode = 'INVALID_FILE' | 'UNSUPPORTED_FORMAT' | 'REPORT_NOT_RECOGNIZED' | 'REQUIRED_FIELD_MISSING' | 'PARSE_FAILED' | 'VALIDATION_FAILED' | 'DUPLICATE_MEASUREMENT' | 'STORAGE_FAILED' | 'BACKUP_INVALID' | 'RESTORE_FAILED';
export class AppError extends Error { constructor(readonly code: AppErrorCode, message: string) { super(message); this.name = 'AppError'; } }
