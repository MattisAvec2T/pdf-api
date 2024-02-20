// Get index path
const indexPath: string = window.location.port // may be useless to check
  ? `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
  : `${window.location.protocol}//${window.location.hostname}`;

setTimeout(() => {
  window.location.href = indexPath; // Redirection
}, 2000);
