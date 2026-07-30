import { Asset } from "../models/Asset";

export class ChartService {

    balanceChart(data: Asset[]) {

        return data.map(asset => ({

            wallet: asset.wallet,

            value: asset.balance

        }));

    }

    networkChart(data: Asset[]) {

        return data.map(asset => ({

            label: asset.network,

            balance: asset.balance

        }));

    }

}
