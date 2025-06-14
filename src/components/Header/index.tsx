import { Typography } from "@mui/material";
import { EMAIL, WHATSAPP } from "../../constants/contact";
import { Icons } from "../../constants/icons";
import IMCBox from "../IMCBox";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import { useTranslation } from "react-i18next";
import IMCDropDown from "../IMCDropdown";

const options = [
  { label: "English", value: "en" },
  { label: "Arabic", value: "ar" },
];

const Header = () => {
  const { EmailIcon, WhatsAppIcon } = Icons;
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string | number) => {
    i18n.changeLanguage(value.toString());
  };

  return (
    <IMCBox
      backgroundColor={colors.white}
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <IMCBox
        backgroundColor={colors.transparent}
        style={{
          display: "flex",
          alignItems: "center",
          gap: spacing.sm,
          marginLeft: "20px",
        }}
      >
        <IMCBox
          backgroundColor={colors.transparent}
          style={{ display: "flex", alignItems: "center", gap: spacing.sm }}
        >
          <EmailIcon sx={{ color: colors.darkTeal }} />
          <Typography variant="body2" color={colors.primaryDarkBlue}>
            {EMAIL}
          </Typography>
        </IMCBox>

        <IMCBox
          backgroundColor={colors.transparent}
          style={{ display: "flex", alignItems: "center", gap: spacing.sm }}
        >
          <WhatsAppIcon sx={{ color: colors.teal }} />
          <Typography variant="body2" color={colors.primaryDarkBlue}>
            {WHATSAPP}
          </Typography>
        </IMCBox>
      </IMCBox>

      <IMCBox
        backgroundColor={colors.transparent}
        style={{ marginRight: "20px" }}
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
