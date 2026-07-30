import { Asset } from "../models/Asset";
import { CurrencyFormatter } from "../utils/CurrencyFormatter";

export class ConsoleDashboard {

    render(data: Asset[]): void {

        console.log("Wallet Balances");
        console.log("-------------------------");

        data.forEach(asset => {

            console.log(
                `${asset.wallet} | ${asset.network} | ${CurrencyFormatter.usdc(asset.balance)}`
            );

        });

    }

}
