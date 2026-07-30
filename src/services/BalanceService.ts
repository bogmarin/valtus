import { Asset } from "../models/Asset";

export class BalanceService {

    largestWallet(data: Asset[]): Asset {

        return data.reduce((a, b) =>
            a.balance > b.balance ? a : b
        );

    }

    smallestWallet(data: Asset[]): Asset {

        return data.reduce((a, b) =>
            a.balance < b.balance ? a : b
        );

    }

    averageBalance(data: Asset[]): number {

        if (data.length === 0) {
            return 0;
        }

        const total = data.reduce(
            (sum, asset) => sum + asset.balance,
            0
        );

        return total / data.length;

    }

}
