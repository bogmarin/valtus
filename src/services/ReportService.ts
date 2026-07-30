import { Asset } from "../models/Asset";

export class ReportService {

    printSummary(data: Asset[]): void {

        const total = data.reduce(
            (sum, asset) => sum + asset.balance,
            0
        );

        console.log("Treasury Report");
        console.log("----------------");
        console.log("Wallets:", data.length);
        console.log("Total USDC:", total);

    }

}
