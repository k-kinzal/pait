import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";

export interface Props {}

export const Keypad = forwardRef(
	(_: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
		return (
			<Box
				py={4}
				px={8}
				sx={{
					display: "grid",
					gridAutoFlow: "row",
					gridTemplateColumns: "repeat(4, 1fr)",
					gridTemplateRows: "repeat(4, 72px)",
				}}
				ref={ref}
			>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							1
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							2
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							3
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "primary.dark" }}>
						<BackspaceIcon />
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							4
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							5
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							6
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "primary.dark" }}>
						<Typography width="32px" height="32px" variant="h5">
							C
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							7
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							8
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							9
						</Typography>
					</IconButton>
				</Box>
				<Box />
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							0
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							00
						</Typography>
					</IconButton>
				</Box>
				<Box sx={{ textAlign: "center", textJustify: "center" }}>
					<IconButton size="large" sx={{ backgroundColor: "grey.900" }}>
						<Typography width="32px" height="32px" variant="h5">
							.
						</Typography>
					</IconButton>
				</Box>
				<Box />
			</Box>
		);
	},
);
