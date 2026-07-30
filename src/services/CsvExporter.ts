import { Asset } from "../models/Asset";

export class CsvExporter {

    export(data: Asset[]): string {

        const rows = [
            "Wallet,Network,Balance"
        ];

        data.forEach(asset => {

            rows.push(
                `${asset.wallet},${asset.network},${asset.balance}`
            );

        });

        return rows.join("\n");

    }

}
