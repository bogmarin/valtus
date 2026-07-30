export class DateHelper {

    static today(): string {

        return new Date().toLocaleDateString();

    }

    static now(): string {

        return new Date().toLocaleString();

    }

}
