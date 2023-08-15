import * as bcrypt from 'bcrypt';
// hashing password
export async function hashPassword(plaintextPassword: string) {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    return hash
}

// compare password
export async function comparePassword(plaintextPassword: string, hash: string) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result; // boolean
}