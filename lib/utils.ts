import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getArticleSubcategory(categories: string[] = []) {
  const sub = categories.find(
    (c) =>
      c.endsWith('-predictions') ||
      c.endsWith('-betting') ||
      c.endsWith('-news')
  );
  if (!sub) return null;
  if (sub.endsWith('-predictions')) return 'Predictions';
  if (sub.endsWith('-betting')) return 'Betting';
  if (sub.endsWith('-news')) return 'News';
  return null;
}

export function getArticleSubcategoryInfo(categories: string[] = []) {
  const sub = categories.find(
    (c) =>
      c.endsWith('-predictions') ||
      c.endsWith('-betting') ||
      c.endsWith('-news')
  );
  if (!sub) return null;
  if (sub.endsWith('-predictions')) return { label: 'Predictions', slugSuffix: 'predictions' };
  if (sub.endsWith('-betting')) return { label: 'Betting', slugSuffix: 'betting' };
  if (sub.endsWith('-news')) return { label: 'News', slugSuffix: 'news' };
  return null;
}
