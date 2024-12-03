import normalizeUrl from 'normalize-url';

export function normalizeUserUrl(url: string) {
  try {
    return normalizeUrl(url, {
      defaultProtocol: 'http', // Set default protocol if none is provided
      stripTextFragment: true, // Remove fragments (e.g., #section)
      removeQueryParameters: ['utm_source', 'utm_medium', 'utm_campaign'], // Remove specific query parameters
    });
  } catch (error) {
    console.error('Error normalizing URL:', error);
    return url; // Return original URL if normalization fails
  }
}

export function convertToSlug(text: string) {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/[^a-z0-9 -]/g, '') // Remove all non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}
