import { TreasuryService } from "./services/TreasuryService";
import { ChartService } from "./services/ChartService";
import { ReportService } from "./services/ReportService";

const treasury = new TreasuryService();
const charts = new ChartService();
const reports = new ReportService();

console.log("=== Stablecoin Treasury Dashboard ===");
console.log();

const balances = treasury.getBalances();

console.table(balances);

console.log();

console.log("Total Treasury:", treasury.totalBalance(), "USDC");

console.log();

console.log("Chart Data");

console.table(charts.balanceChart(balances));

console.log();

reports.printSummary(balances);
