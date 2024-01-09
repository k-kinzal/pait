import { StoryObj } from "@storybook/react";
import { BigKey, Props } from "./BigKey";
import { Box, Stack } from "@mui/material";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";

type Story = StoryObj<Props>;

export default {
  title: "Components/BigKey",
  component: BigKey,
};

export const Default: Story = {
  render: (props) => (
    <Stack spacing={2} direction="row">
      <Box>
        <BigKey {...props}>
          <SubdirectoryArrowLeftIcon />
        </BigKey>
      </Box>
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
        <BigKey size="small" {...props}>
          {props.children}
        </BigKey>
      </Box>
      <Box>
        <BigKey size="medium" {...props}>
          {props.children}
        </BigKey>
      </Box>
      <Box>
        <BigKey size="large" {...props}>
          {props.children}
        </BigKey>
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
        <BigKey {...props}>{props.children}</BigKey>
      </Box>
      <Box>
        <BigKey color="inherit" {...props}>
          {props.children}
        </BigKey>
      </Box>
      <Box>
        <BigKey color="primary" {...props}>
          {props.children}
        </BigKey>
      </Box>
      <Box>
        <BigKey color="secondary" {...props}>
          {props.children}
        </BigKey>
      </Box>
      <Box>
        <BigKey color="grey" {...props}>
          {props.children}
        </BigKey>
      </Box>
      <Box>
        <BigKey color="success" {...props}>
          {props.children}
        </BigKey>
      </Box>
      <Box>
        <BigKey color="info" {...props}>
          {props.children}
        </BigKey>
      </Box>
      <Box>
        <BigKey color="error" {...props}>
          {props.children}
        </BigKey>
      </Box>
      <Box>
        <BigKey color="warning" {...props}>
          {props.children}
        </BigKey>
      </Box>
    </Stack>
  ),
};
