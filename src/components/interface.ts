export interface FormatAmountProps {
  local?: boolean;
  amount: string;
  prefix?: string;
  format?: string;
  showLess?: boolean;
  howMany0?: number;
  decimals?: number;
  lessThan?: number;
}
