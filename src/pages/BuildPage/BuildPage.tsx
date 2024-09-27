import {ThemeProvider} from "../../providers/ThemeProvider.tsx";
import {
  Box,
  Card,
  CardContent, Checkbox,
  CssBaseline, Fab,
  FormControl,
  InputLabel, List, ListItemButton, ListItemIcon, ListItemText,
  MenuItem,
  Select,
  Stack, TextField,
  Typography
} from "@mui/material";
import Iframe from "react-iframe";
import IosShareIcon from '@mui/icons-material/IosShare';
import {BlockchainInputGroup} from "./BlockchainInputGroup.tsx";

export const BuildPage = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box sx={{position: "absolute", right: "16px", bottom: "16px"}}>
        <Fab color="primary" aria-label="add">
          <IosShareIcon />
        </Fab>
      </Box>
      <Stack direction="row" spacing={0} width={1} height={1} sx={{display: "flex", overflow: "hidden", backgroundColor: "background.alpha"}}>
        <Box sx={{width: "30%", minWidth: "200px", maxWidth: "350px", padding: "16px", overflow: "scroll"}}>
          <BlockchainInputGroup />
          <Card sx={{ width: 1, borderRadius: "16px", backgroundColor: "background.default", marginTop: "16px"}}>
            <CardContent sx={{padding: "16px", backgroundColor: "rgba(25, 25, 25, 1)"}}>
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="subtitle1">Recipient</Typography>
                  </Box>
                  <Box>
                    <TextField label="Address" variant="outlined" size="small" sx={{width: 1}} value="GezdpBqe9R8ZYpfUAf64NaoqYXNvoSL9gE5ZMqDFcZYa" />
                  </Box>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Legal Currency</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={"jpy"}
                        label="Legal Currency"
                        size="small"
                        sx={{width: 1}}
                      >
                        <MenuItem value="jpy">
                          JPY
                        </MenuItem>
                        <MenuItem value="usd">
                          USD
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: 1, borderRadius: "16px", backgroundColor: "background.default", marginTop: "16px"}}>
            <CardContent sx={{padding: "16px", backgroundColor: "rgba(25, 25, 25, 1)"}}>
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="subtitle1">Feed</Typography>
                  </Box>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Provider</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={"pyth-network"}
                        label="Provider"
                        size="small"
                        sx={{width: 1}}
                      >
                        <MenuItem value="pyth-network">
                          Pyth Network
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2">Receive Token</Typography>
                    <List>
                      <ListItemButton>
                        <ListItemIcon>
                          <Checkbox
                            tabIndex={-1}
                            disableRipple
                            inputProps={{
                              'aria-labelledby': "foo1",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText id={"foo1"} primary="Solana (SOL)" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <Checkbox
                            tabIndex={-1}
                            disableRipple
                            inputProps={{
                              'aria-labelledby': "foo2",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText id={"foo2"} primary="Tether (USDT)" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <Checkbox
                            tabIndex={-1}
                            disableRipple
                            inputProps={{
                              'aria-labelledby': "foo3",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText id={"foo3"} primary="USD Coin (USDC)" />
                      </ListItemButton>
                    </List>
                  </Box>
                </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: 1, borderRadius: "16px", backgroundColor: "background.default", marginTop: "16px"}}>
            <CardContent sx={{padding: "16px", backgroundColor: "rgba(25, 25, 25, 1)"}}>
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="subtitle1">Payment</Typography>
                  </Box>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-standard-label">Method</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={"solana"}
                        label="Method"
                        size="small"
                        sx={{width: 1}}
                      >
                        <MenuItem value="solana">
                          Transfer Request
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Stack>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{flexGrow: 1}}>
          <Iframe
            url={"http://localhost:5173"}
            width="100%"
            height="100%"
            frameBorder={0}
          />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
