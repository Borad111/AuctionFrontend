import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
 export function calculateTimeLeft(endTime: Date): string {
  const now = new Date();
  const difference = endTime.getTime() - now.getTime();

  if (difference <= 0) return "Ended";

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  if (days > 0) return `${days}d ${hours}h left`;
  if (hours > 0) return `${hours}h left`;

  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  return `${minutes}m left`;
}


// utils/format.ts
export const formatCurrency = (amount: number, locale = "en-US", currency = "USD") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};
