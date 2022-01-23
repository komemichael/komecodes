import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class Password {
    static async toHash(password) {
        const salt = randomBytes(8).toString('hex');
        const buffer = (await scryptAsync(password, salt, 64));
        return `${buffer.toString('hex')}.${salt}`
    }

    static async compare(stored_password, input_password) {
        const [hashed_password, salt] = stored_password.split('.');
        const buffer = (await scryptAsync(input_password, salt, 64));
        return buffer.toString('hex') === hashed_password;
    }
}