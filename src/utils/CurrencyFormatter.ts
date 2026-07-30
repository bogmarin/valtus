export class CurrencyFormatter {

    static usdc(value: number): string {

        return value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + " USDC";

    }

}
