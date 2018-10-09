import { State } from './state';

export class StateData {

    public states = [
        {
            name: 'Colorado',
            totalIRSCollections: 56742235,
            businessIncome: 2899495,
            individualIncomeTaxWithheldFICA: 40798082,
            individualIncomeTaxPaymentsSECA: 11470155
        },

        {
            name: 'California',
            totalIRSCollections: 440475243,
            businessIncome: 47274455,
            individualIncomeTaxWithheldFICA: 288364748,
            individualIncomeTaxPaymentsSECA: 90271160
        }
    ]

    readStates() {
        return this.states;
    }
}