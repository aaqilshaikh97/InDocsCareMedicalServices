import { useEffect } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { EMAIL, WHATSAPP } from "../../constants/contact";
import { Icons } from "../../styles/icons";
import IMCBox from "../IMCBox";
import { colors } from "../../styles/colors";
import { spacing } from "../../styles/spacing";
import { useTranslation } from "react-i18next";
import IMCDropDown from "../IMCDropdown";
import { fontSizes } from "../../styles/fontSizes";
import { setLanguage } from "../../utils/session";

const Header = () => {
  const { EmailIcon, WhatsAppIcon } = Icons;
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const handleLanguageChange = (value: string | number) => {
    const lang = value.toString();
    setLanguage(lang);
    i18n.changeLanguage(lang).then(() => {
      window.location.reload();
    });
  };

  const options = [
    { label: t("language.english"), value: "en" },
    { label: t("language.arabic"), value: "ar" },
  ];

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <IMCBox
      backgroundColor={colors.iceBlue}
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
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          options={options}
          onSelect={handleLanguageChange}
          placeholder={t("language.placeholder")}
        />
      </IMCBox>
    </IMCBox>
  );
};

export default Header;
