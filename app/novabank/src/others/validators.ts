export function validateEmail(
    value: string
) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!value.trim()) {
        return "Email is required"
    }

    if (!regex.test(value)) {
        return "Invalid email"
    }

    return ""
}
export function validatePassword(
    value: string
) {

    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if (!value.trim()) {
        return "Password is required"
    }

    if (!regex.test(value)) {
        return "Weak password"
    }

    return ""
}