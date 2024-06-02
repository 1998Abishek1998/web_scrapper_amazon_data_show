import { customLogger } from '@/utils/custom-logger';
import type { Context } from 'hono';

export interface ExtractedErrorsType {
  [key: string]: string[];
}

export const validateSchema = (result: any, c: Context) => {
  if (!result.success) {
    const errors = result.error.issues
      .map((issue: { path: any[]; message: any; }) => [issue.path.join('.'), issue.message])
      .reduce((acc: { [x: string]: any[]; }, [key, msg]: any) => {
        if (key in acc) {
          acc[key].push(msg);
        } else {
          acc[key] = [msg];
        }
        return acc;
      }, {} as ExtractedErrorsType);

    customLogger(JSON.stringify(errors))
    return c.json({ error: true, errors }, 400)
  }
}
