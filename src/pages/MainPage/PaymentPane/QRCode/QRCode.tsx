import QRCodeStyling, { Options } from "qr-code-styling";
import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { Box } from "@mui/material";
import { BoxProps } from "@mui/material/Box/Box";

export interface Props extends Omit<BoxProps, "children" | "type" | "ref"> {
  type?: Options["type"];
  shape?: Options["shape"];
  width?: Options["width"];
  height?: Options["height"];
  margin?: Options["margin"];
  data?: Options["data"];
  image?: Options["image"];
  qrOptions?: Options["qrOptions"];
  imageOptions?: Options["imageOptions"];
  dotsOptions?: Options["dotsOptions"];
  cornersSquareOptions?: Options["cornersSquareOptions"];
  cornersDotOptions?: Options["cornersDotOptions"];
  backgroundOptions?: Options["backgroundOptions"];
}

export const QRCode = forwardRef(
  (
    {
      type,
      shape,
      width = 300,
      height = 300,
      margin = 0,
      data,
      image,
      qrOptions = {},
      imageOptions = {},
      dotsOptions,
      cornersSquareOptions,
      cornersDotOptions,
      backgroundOptions,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    const r = useRef(null);

    const qrCodeOption = {
      type,
      shape,
      width,
      height,
      margin,
      data,
      image,
      qrOptions,
      imageOptions,
      dotsOptions,
      cornersSquareOptions,
      cornersDotOptions,
      backgroundOptions,
    };
    const qrCode = new QRCodeStyling(qrCodeOption);
    useEffect(() => {
      if (!ref) {
      } else if (typeof ref === "function") {
        ref(r.current);
      } else if ("current" in ref) {
        ref.current = r.current;
      }
    }, [ref]);

    useEffect(() => {
      qrCode.append(r.current ?? undefined);
    }, [qrCode]);

    useEffect(() => {
      qrCode.update(qrCodeOption);
    }, [qrCode, qrCodeOption]);

    return <Box ref={r} {...props} />;
  },
);
