import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { EMAIL, WHATSAPP } from "../../constants/contact";
import { Icons } from "../../styles/icons";
import IMCBox from "../IMCBox";
import { colors } from "../../styles/colors";
import { spacing } from "../../styles/spacing";
import { useTranslation } from "react-i18next";
import IMCDropDown from "../IMCDropdown";
import { fontSizes } from "../../styles/fontSizes";

const options = [
  { label: "English", value: "en" },
  { label: "Arabic", value: "ar" },
];

const Header = () => {
  const { EmailIcon, WhatsAppIcon } = Icons;
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLanguageChange = (value: string | number) => {
    i18n.changeLanguage(value.toString());
  };

  return (
    <IMCBox
      backgroundColor={colors.lightGray}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: isMobile ? "row" : "row",
        alignItems: "center",
        padding: spacing.none,
        margin: spacing.none,
      }}
    >
      <IMCBox
        backgroundColor={colors.transparent}
        style={{
          display: "flex",
          alignItems: "center",
          gap: spacing.none,
          flexWrap: "wrap",
        }}
      >
        <IMCBox
          backgroundColor={colors.transparent}
          style={{ display: "flex", alignItems: "center", gap: spacing.xs }}
        >
          <EmailIcon sx={{ color: colors.darkTeal, fontSize: fontSizes.lg }} />
          <Typography variant="body2" color={colors.primaryDarkBlue}>
            {EMAIL}
          </Typography>
        </IMCBox>

        <IMCBox
          backgroundColor={colors.transparent}
          style={{ display: "flex", alignItems: "center", gap: spacing.xs }}
        >
          <WhatsAppIcon sx={{ color: colors.teal, fontSize: fontSizes.lg }} />
          <Typography variant="body2" color={colors.primaryDarkBlue}>
            {WHATSAPP}
          </Typography>
        </IMCBox>
      </IMCBox>

      <IMCBox
        backgroundColor={colors.transparent}
        style={{ marginLeft: isMobile ? "auto" : "0" }}
      >
        <IMCDropDown
          options={options}
          onSelect={handleLanguageChange}
          placeholder="Choose language"
        />
      </IMCBox>
    </IMCBox>
  );
};

export default Header;
