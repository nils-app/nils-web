export type TW_Transfer = {
  id: number,
  user: number,
  targetAccount: number,
  sourceAccount: number | null,
  quote: number,
  status: string,
  reference: string,
  rate: number,
  created: string,
  business: string | null,
  transferRequest: any,
  details: {
    reference: string
  },
  hasActiveIssues: boolean,
  sourceValue: number,
  sourceCurrency: string,
  targetValue: number,
  targetCurrency: string,
  customerTransactionId: string,
};