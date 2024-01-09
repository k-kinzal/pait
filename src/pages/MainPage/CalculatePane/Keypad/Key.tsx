import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Button, Typography } from "@mui/material";
import { ButtonProps } from "@mui/material/Button/Button";

export interface Props extends ButtonProps {
	children: number | string | ReactElement;
}

export const Key = forwardRef(
	(
		{ children, size, ...props }: Props,
		ref: ForwardedRef<HTMLButtonElement>,
	): ReactElement => {

		const height = {
			small: "32px",
			medium: "48px",
			large: "64px",
		}[size ?? "medium"];

		let child: ReactElement;
		if (typeof children === 'object') {
			child = (<children.type fontSize="small" {...children.props} />)
		} else {
			const c = children.toString();
			if (c.length < 1 || 2 < c.length) {
				throw new Error(`Key children must be one or two letters: '${c}'`);
			}
			child = (<Typography fontWeight="bold">{c}</Typography>)
		}
		
		return (
			<Button
				variant="contained"
				color="grey"
				size={size}
				sx={{
					minWidth: "",
					height,
					aspectRatio: 1,
					borderRadius: "50%",
					color: "white",
					letterSpacing: "0.1em",
				}}
				ref={ref}
				{...props}
			>
				{child}
			</Button>
		);
	},
);
