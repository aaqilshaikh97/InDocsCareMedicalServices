import React from "react";
import { fontSizes } from "../../constants/fontSizes";
import { fontWeights } from "../../constants/fontWeights";
import { colors } from "../../constants/colors";
import { fontFamily } from "../../constants/fontFamily";

type Variant = "h1" | "h2" | "h3" | "subtitle" | "body" | "caption" | "label";

interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  color?: string;
  weight?: string | number; 
  size?: string;
  style?: React.CSSProperties;
}

const variantMapping: Record<Variant, React.CSSProperties> = {
  h1: { fontSize: fontSizes.xxl, fontWeight: fontWeights.extraBold },
  h2: { fontSize: fontSizes.xl, fontWeight: fontWeights.bold },
  h3: { fontSize: fontSizes.lg, fontWeight: fontWeights.medium },
  subtitle: { fontSize: fontSizes.md, fontWeight: fontWeights.medium },
  body: { fontSize: fontSizes.base, fontWeight: fontWeights.regular },
  caption: { fontSize: fontSizes.sm, fontWeight: fontWeights.light },
  label: { fontSize: fontSizes.xs, fontWeight: fontWeights.medium },
};

const IMCTypography: React.FC<TypographyProps> = ({
  variant = "body",
  children,
  color = colors.black,
  weight,
  size,
  style = {},
}) => {
  const baseStyle = variantMapping[variant];

  const mergedStyle: React.CSSProperties = {
    fontSize: size || baseStyle.fontSize,
    fontWeight: weight || baseStyle.fontWeight,

    fontFamily: fontFamily.primary,
    color,
    ...style,
  };

  return <p style={mergedStyle}>{children}</p>;
};

export default IMCTypography;
