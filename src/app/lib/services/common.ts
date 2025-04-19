export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhoneNumber(phoneNumber: string): boolean {
  const phoneRegex = /^[0-9+\-]+$/;
  return phoneRegex.test(phoneNumber);
}
