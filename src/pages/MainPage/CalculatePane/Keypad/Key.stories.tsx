import { StoryObj } from "@storybook/react";
import { Key, Props } from "./Key";
import { Box, Stack } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Story = StoryObj<Props>;

export default {
	title: "Components/Key",
	component: Key,
};

export const Default: Story = {
	render: (props) => (
		<Stack spacing={2}>
			<Stack spacing={2} direction="row">
				<Box>
					<Key {...props}>0</Key>
				</Box>
				<Box>
					<Key {...props}>1</Key>
				</Box>
				<Box>
					<Key {...props}>2</Key>
				</Box>
				<Box>
					<Key {...props}>4</Key>
				</Box>
				<Box>
					<Key {...props}>5</Key>
				</Box>
				<Box>
					<Key {...props}>6</Key>
				</Box>
				<Box>
					<Key {...props}>7</Key>
				</Box>
				<Box>
					<Key {...props}>8</Key>
				</Box>
				<Box>
					<Key {...props}>9</Key>
				</Box>
			</Stack>
			<Stack spacing={2} direction="row">
				<Box>
					<Key {...props}>A</Key>
				</Box>
				<Box>
					<Key {...props}>B</Key>
				</Box>
				<Box>
					<Key {...props}>C</Key>
				</Box>
				<Box>
					<Key {...props}>D</Key>
				</Box>
				<Box>
					<Key {...props}>E</Key>
				</Box>
				<Box>
					<Key {...props}>F</Key>
				</Box>
				<Box>
					<Key {...props}>G</Key>
				</Box>
				<Box>
					<Key {...props}>H</Key>
				</Box>
				<Box>
					<Key {...props}>I</Key>
				</Box>
				<Box>
					<Key {...props}>J</Key>
				</Box>
				<Box>
					<Key {...props}>K</Key>
				</Box>
				<Box>
					<Key {...props}>L</Key>
				</Box>
				<Box>
					<Key {...props}>M</Key>
				</Box>
				<Box>
					<Key {...props}>N</Key>
				</Box>
				<Box>
					<Key {...props}>O</Key>
				</Box>
				<Box>
					<Key {...props}>P</Key>
				</Box>
				<Box>
					<Key {...props}>Q</Key>
				</Box>
				<Box>
					<Key {...props}>R</Key>
				</Box>
				<Box>
					<Key {...props}>S</Key>
				</Box>
				<Box>
					<Key {...props}>T</Key>
				</Box>
				<Box>
					<Key {...props}>U</Key>
				</Box>
				<Box>
					<Key {...props}>V</Key>
				</Box>
				<Box>
					<Key {...props}>X</Key>
				</Box>
				<Box>
					<Key {...props}>Y</Key>
				</Box>
				<Box>
					<Key {...props}>Z</Key>
				</Box>
			</Stack>
			<Stack spacing={2} direction="row">
				<Box>
					<Key {...props}>00</Key>
				</Box>
				<Box>
					<Key {...props}>AC</Key>
				</Box>
				<Box>
					<Key {...props}>MC</Key>
				</Box>
				<Box>
					<Key {...props}>MR</Key>
				</Box>
				<Box>
					<Key {...props}>M+</Key>
				</Box>
				<Box>
					<Key {...props}>M-</Key>
				</Box>
			</Stack>
			<Stack spacing={2} direction="row">
				<Box>
					<Key {...props}>
						<BackspaceIcon />
					</Key>
				</Box>
				<Box>
					<Key {...props}>
						<AddIcon />
					</Key>
				</Box>
				<Box>
					<Key {...props}>
						<RemoveIcon />
					</Key>
				</Box>
			</Stack>
		</Stack>
	),
};

export const Size: Story = {
	args: {
		children: "■",
	},
	render: (props) => (
		<Stack spacing={2} direction="row">
			<Box>
				<Key size="small" {...props}>
					{props.children}
				</Key>
			</Box>
			<Box>
				<Key size="medium" {...props}>
					{props.children}
				</Key>
			</Box>
			<Box>
				<Key size="large" {...props}>
					{props.children}
				</Key>
			</Box>
		</Stack>
	),
};

export const Color: Story = {
	args: {
		children: "■",
		size: "medium",
	},
	render: (props) => (
		<Stack spacing={2} direction="row">
			<Box>
				<Key {...props}>{props.children}</Key>
			</Box>
			<Box>
				<Key color="inherit" {...props}>
					{props.children}
				</Key>
			</Box>
			<Box>
				<Key color="primary" {...props}>
					{props.children}
				</Key>
			</Box>
			<Box>
				<Key color="secondary" {...props}>
					{props.children}
				</Key>
			</Box>
			<Box>
				<Key color="grey" {...props}>
					{props.children}
				</Key>
			</Box>
			<Box>
				<Key color="success" {...props}>
					{props.children}
				</Key>
			</Box>
			<Box>
				<Key color="info" {...props}>
					{props.children}
				</Key>
			</Box>
			<Box>
				<Key color="error" {...props}>
					{props.children}
				</Key>
			</Box>
			<Box>
				<Key color="warning" {...props}>
					{props.children}
				</Key>
			</Box>
		</Stack>
	),
};
