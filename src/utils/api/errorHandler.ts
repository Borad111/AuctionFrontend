export function parseApiError(err: any): string {
// RTK Query returns err in different shapes: try to unify
if (!err) return "Unknown error";
if (typeof err === "string") return err;
if (err?.data?.message) return err.data.message;
if (err?.error) return err.error;
if (err?.message) return err.message;
return JSON.stringify(err);
}