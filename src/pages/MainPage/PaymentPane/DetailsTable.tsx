import { ForwardedRef, forwardRef, ReactElement } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableProps,
  TableRow,
} from "@mui/material";

export interface Props extends Omit<TableProps, "children"> {
  recipientCurrency: string;
  senderCurrency: string;
  exchangeRate: number;
  transactionFee: number;
  totalAmount: number;
}

export const DetailsTable = forwardRef(
  (
    {
      recipientCurrency,
      senderCurrency,
      exchangeRate,
      transactionFee,
      totalAmount,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLTableElement>,
  ): ReactElement => {
    return (
      <Table size="small" ref={ref} {...props}>
        <TableBody>
          <TableRow>
            <LabelCell>Rate per {recipientCurrency}:</LabelCell>
            <NumberCell>
              {exchangeRate} {senderCurrency}
            </NumberCell>
          </TableRow>
          <TableRow>
            <LabelCell>Fee:</LabelCell>
            <NumberCell>
              {transactionFee} {senderCurrency}
            </NumberCell>
          </TableRow>
          <TableRow>
            <LabelCell>Balance Due:</LabelCell>
            <NumberCell>
              {totalAmount} {senderCurrency}
            </NumberCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
);

const LabelCell = forwardRef(
  (
    { children, sx, ...props }: TableCellProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <TableCell sx={{ fontWeight: "bold", ...sx }} ref={ref} {...props}>
        {children}
      </TableCell>
    );
  },
);

const NumberCell = forwardRef(
  (
    { children, sx, ...props }: TableCellProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <TableCell sx={{ textAlign: "right", ...sx }} ref={ref} {...props}>
        {children}
      </TableCell>
    );
  },
);
