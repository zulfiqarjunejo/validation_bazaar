export interface PhoneNumberValidator {
    validate(number: string): boolean;
};

export class GermanyNumberValidator implements PhoneNumberValidator {
    validate(number: string): boolean {
        return number.startsWith("+49");
    }
};

export class NoopNumberValidator implements PhoneNumberValidator {
    validate(number: string): boolean {
        return true;
    }
};