import { SampleBalances } from "../data/sampleBalances";
import { Asset } from "../models/Asset";

export class TreasuryService {

    private balances: Asset[];

    constructor() {
        this.balances = SampleBalances;
    }

    getBalances(): Asset[] {
        return this.balances;
    }

    totalBalance(): number {

        return this.balances.reduce(
            (sum, asset) => sum + asset.balance,
            0
        );

    }

    walletCount(): number {
        return this.balances.length;
    }

}
