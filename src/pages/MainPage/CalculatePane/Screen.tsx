import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Box, Typography } from "@mui/material";

export interface Props {}

export const Screen = forwardRef(
	(_: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
		return (
			<Box
				pt={10}
				px={10}
				sx={{
					width: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
				}}
			>
				<Typography variant="h2" align="right" ref={ref}>
					12,000
				</Typography>
				<Typography variant="body1" align="right" ref={ref}>
					USD
				</Typography>
			</Box>
		);
	},
);
