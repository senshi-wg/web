import LineChart from "./LineChart";

export default function TransactionMatrics() {
    return (
        <section className="mt-32 w-full relative flex flex-col gap-8 md:flex-row items-center">
            <div className="w-full md:w-1/2">
                <LineChart/>
            </div>
            <div className="w-full md:w-1/2">
                <h1 className="section-heading">Where we are?</h1>
                <div className="mt-8 w-full grid grid-rows-[110px_110px] grid-cols-[1fr_1fr] gap-4">
                    <div className="p-2 border border-[var(--primary-700)] flex flex-col rounded-md">
                        <span className="text-[var(--gray-800)]">Total Transactions</span>
                        <span className="text-2xl font-bold">249</span>
                        <span className="text-[var(--success-900)]">+10%</span>
                    </div>
                    <div className="p-2 border border-[var(--primary-700)] flex flex-col rounded-md">
                        <span className="text-[var(--gray-800)]">Average Transaction Time</span>
                        <span className="text-2xl font-bold">78.8s</span>
                        <span className=""></span>
                    </div>
                    <div className="p-2 border border-[var(--primary-700)] flex flex-col rounded-md">
                        <span className="text-[var(--gray-800)]">Total Transactions</span>
                        <span className="text-2xl font-bold">130</span>
                        <span className="text-[var(--success-900)]">+1</span>
                    </div>
                    <div className="p-2 border border-[var(--primary-700)] flex flex-col rounded-md">
                        <span className="text-[var(--gray-800)]">Apps in Echosystem</span>
                        <span className="text-2xl font-bold">12</span>
                    </div>
                    <div className="p-2"></div>
                </div>
            </div>
        </section>
    )
}
