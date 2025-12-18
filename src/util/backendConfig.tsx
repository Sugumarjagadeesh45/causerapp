// Change from ngrok to your server IP
export const API_BASE_URL = "https://5207a262405d.ngrok-free.app";

// Add this function to get your server URL for map tiles
export const getMapTileUrl = () => {
  return "https://5207a262405d.ngrok-free.app/data/v3";
};
// ----------- MAIN URL FUNCTIONS -------------- //

export const getBackendUrl = (): string => {
  return API_BASE_URL; // Always use production URL
};

export const getSocketUrl = (): string => {
  return getBackendUrl();
};

// ----------- IMAGE URL HANDLERS -------------- ///
// Main image URL handler
export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return "";

  const backendUrl = getBackendUrl();

  // If it's already a complete URL
  if (imagePath.startsWith("http")) {
    // Replace any localhost/127.0.0.1 with production backend URL
    if (imagePath.includes('localhost') || imagePath.includes('127.0.0.1')) {
      return imagePath.replace(/http:\/\/[^/]+/, backendUrl);
    }
    return imagePath;
  }

  // Handle different path formats
  if (imagePath.startsWith("/uploads/")) {
    return `${backendUrl}${imagePath}`;
  }

  if (imagePath.startsWith("uploads/")) {
    return `${backendUrl}/${imagePath}`;
  }

  // Default case
  return `${backendUrl}/uploads/${imagePath}`;
};

// Add this missing function that your components need
export const getProductImageUrl = (imagePath: string): string => {
  return getImageUrl(imagePath);
};

// ----------- ENV BASED API CONFIG -------------- //

export const API_CONFIG = {
  BASE_URL: getBackendUrl(),

  getImageUrl: (path: string) => getImageUrl(path),
  
  getProductImageUrl: (path: string) => getProductImageUrl(path),
};

// ----------- DEFAULT EXPORT -------------- //

export default {
  getBackendUrl,
  getSocketUrl,
  getImageUrl,
  getProductImageUrl,
  API_CONFIG,
  API_BASE_URL,
};




