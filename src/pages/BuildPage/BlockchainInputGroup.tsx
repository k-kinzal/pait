import {type ForwardedRef, forwardRef, type PropsWithChildren, type ReactElement} from "react";
import {
  Box,
  Card,
  CardContent, type CardProps,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import type {BoxProps} from "@mui/material/Box/Box";
import {NetworkSelect} from "./NetworkSelect.tsx";

interface Props {

}

export const BlockchainInputGroup = forwardRef(
(
  props: Props,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement => {
  return (
    <Layout title="Blockchain" ref={ref} {...props}>
      <Content sx={{marginTop: "16px"}}>
        <NetworkSelect />
      </Content>
      <Content>
        <TextField label="RPC Endpoint" variant="outlined" size="small" sx={{width: 1}}
                   value="https://distinguished-indulgent-cloud.solana-mainnet.quiknode.pro/0235981febe7c704853779da1951dd64811dcd0a/"/>
      </Content>
    </Layout>
  );
});

interface LayoutProps extends CardProps {
  title: string;
}

export const Layout = forwardRef(
(
  {children, title, ...props}: PropsWithChildren<LayoutProps>,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement => {
  return (
    <Card sx={{width: 1, borderRadius: "16px", backgroundColor: "background.default"}} ref={ref} {...props}>
      <CardContent sx={{padding: "16px", backgroundColor: "rgba(25, 25, 25, 1)"}}>
        <Box>
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
        <Box marginTop={4}>
          <Stack spacing={4}>
            {children}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
});

export const Content = forwardRef(
(
  {children, ...props}: PropsWithChildren<BoxProps>,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement => {
  return (
    <Box ref={ref} {...props}>{children}</Box>
  );
});