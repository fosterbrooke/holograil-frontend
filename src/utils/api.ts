export class FetchError extends Error {
  status: number;
  requires_verification?: boolean;

  constructor(
    message: string,
    status: number,
    requires_verification?: boolean
  ) {
    super(message); // Call the parent class constructor
    this.name = 'FetchError'; // Optional, can be useful for debugging
    this.status = status;
    this.message = message;
    this.requires_verification = requires_verification;
    Object.setPrototypeOf(this, FetchError.prototype); // Ensure proper prototype chain
  }
}

const fetchAPI = async (endpoint: string, options: RequestInit) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BACKEND_URL}${endpoint}`,
      options
    );

    if (!response.ok) {
      const errorDetail = await response.json();

      // Create a new FetchError and throw it
      const error = new FetchError(
        errorDetail.detail,
        response.status,
        errorDetail.detail.requires_verification
      );

      throw error;
    }

    return await response.json();
  } catch (error: unknown) {
    // Type guard: Handle errors based on type
    if (error instanceof FetchError) {
      console.error('FetchError:', error);
      throw error; // Re-throw the custom FetchError to be handled by calling functions
    } else if (error instanceof Error) {
      // Handle general errors like network issues, unexpected problems, etc.
      console.error('Error:', error.message);
      throw new FetchError('An unexpected error occurred.', 500); // Optionally rethrow a general FetchError
    } else {
      console.error('Unknown error:', error);
      throw new FetchError('An unknown error occurred.', 500); // Handle unexpected cases
    }
  }
};

export { fetchAPI };
