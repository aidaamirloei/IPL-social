export function validateEmail(email: string): boolean {
    // 1. Must not contain spaces
    if (email.includes(" ")) return false;

    // 2. Must contain at least one '@'
    const atIndex = email.indexOf("@");
    if (atIndex <= 0) return false; // ensures text before '@'

    // 3. Must have text after '@'
    const domain = email.slice(atIndex + 1);
    if (domain.length === 0) return false;

    // 4. Domain must contain at least one '.' not at the end
    const dotIndex = domain.lastIndexOf(".");
    if (dotIndex <= 0 || dotIndex === domain.length - 1) return false;

    return true;
}
