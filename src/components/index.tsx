import numeral from "numeral";
import { useMemo } from "react";

import { FormatTokenPriceProps } from "./interface.ts";
import BigNumber from "bignumber.js";

const subscript = [
  '',
  '₁',
  '₂',
  '₃',
  '₄',
  '₅',
  '₆',
  '₇',
  '₈',
  '₉'
]

const o = (value: string, decimal = 8, local?: boolean): string => {
  const str = String(value)
  const _value = abandonInvalid0(str.indexOf(".") > -1 ? str : `${str}.0`, decimal)
  return local ? _value.replace(/\d+/, (m) => m.replace(/(\d)(?=(\d{3})+$)/g, ($1) => $1 + ',')) : _value;
};

export const abandonInvalid0 = (value: string, decimal = 8): string => {
  const regexp = /(?:\.0*|(\.\d+?)0+)$/;
  const [a, b] = value.split(".");
  const output = `${a}.${b.substring(0, decimal)}`;
  return output.replace(regexp, "$1");
};

export function showLessAmount(n: string, howMany0 = 4, decimals = 8) {
  const reg1 = new RegExp(`(0.0(₁|₂|₃|₄|₅|₆|₇|₈|₉|.{3}))(\\d{0,${decimals}})`, 'g')
  let t = n
  const reg2 = new RegExp(`(0{${howMany0}})`, 'g')
  const y = t.match(reg2)
  y &&
  [y[0]].forEach((i) => {
    t = t.replace(i, `0${subscript[i.split('').length] ?? '...'}`)
  })
  return y
    ? (t.match(reg1)
      ? t.match(reg1)?.[0]?.replace(/(\d+?)0+$/, "$1")
      : t)
    : n
}

const FormatTokenPrice = (
  {
    local,
    amount,
    format,
    showLess,
    prefix = '',
    decimals = 8,
    howMany0 = 4,
    lessThan = 0
  }: FormatTokenPriceProps) => {
  return useMemo(
    () => {
      const _amount = Number(amount)

      if (lessThan > 0 && _amount > 0 && _amount < lessThan) return (
        <span className={"_format-amount"} style={{
          display: 'flex',
          alignItems: 'center'
        }}><small>{'<'}&nbsp;</small>{`${prefix}${lessThan}`}</span>)

      if (showLess && _amount > 0 && howMany0 >= 4 && new BigNumber(amount).lt('0.0001')) {
        const fixedAmount = new BigNumber(amount).toFixed(18)
        return `${prefix}${showLessAmount(fixedAmount, howMany0, decimals)}`
      }

      const output = <>{prefix}{format ? numeral(amount).format(format) : _amount === 0 ? "0.00" : o(amount, decimals, local)}</>

      return (<span className={"_format-amount"}>{output}</span>)
    },
    [amount, lessThan, prefix, showLess, howMany0, format, decimals, local],
  );
};

export default FormatTokenPrice;
