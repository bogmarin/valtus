import { TreasuryService } from "../src/services/TreasuryService";

describe("TreasuryService", () => {

    test("wallet count", () => {

        const service = new TreasuryService();

        expect(service.walletCount()).toBeGreaterThan(0);

    });

    test("total balance", () => {

        const service = new TreasuryService();

        expect(service.totalBalance()).toBeGreaterThan(0);

    });

});
