import { Grid, Box, Link } from "@mui/material";
import IMCTypography from "../../IMCTypography";
import { fontSizes } from "../../../styles/fontSizes";
import { fontWeights } from "../../../styles/fontWeights";
import { colors } from "../../../styles/colors";
import { spacing } from "../../../styles/spacing";
import { Icons } from "../../../styles/icons";
import IMCLogo from "../../../assets/images/logo.png";
import IMCBox from "../../IMCBox";
import { EMAIL, Mobile, Address } from "../../../constants/contact";

const contact = {
  address: Address,
  email: EMAIL,
  phone: Mobile,
  socials: [
    { name: Icons.FacebookIcon, url: "https://facebook.com" },
    { name: Icons.InstagramIcon, url: "https://instagram.com" },
    { name: Icons.LinkedInIcon, url: "https://linkedin.com" },
    { name: Icons.YouTubeIcon, url: "https://youtube.com" },
  ],
};

const ContactSection = () => (
  <Grid size={{ xs: 12, md: 3, sm: 6 }}>
    <IMCTypography
      variant="subtitle"
      size={fontSizes.xl}
      weight={fontWeights.semiBold}
      color={colors.primaryDarkBlue}
      style={{ marginBottom: spacing.sm }}
    >
      Contact Us
    </IMCTypography>

    <Box mb={4} height="4px" width="100px" bgcolor={colors.primaryDarkBlue} />

    <IMCBox margin="0" padding="0" style={styles.logoRow}>
      <Box
        component="img"
        src={IMCLogo}
        alt="InDocsCare Logo"
        sx={{ height: fontSizes.xl, width: "auto", cursor: "pointer" }}
      />
      <IMCTypography
        variant="h3"
        weight={fontWeights.semiBold}
        color={colors.primaryDarkBlue}
        size={fontSizes.md}
      >
        InDocsCare Medical Services
      </IMCTypography>
    </IMCBox>

    <IMCBox
      margin="0"
      padding="0"
      backgroundColor={colors.transparent}
      style={styles.iconTextRow()}
    >
      <Icons.CallIcon
        sx={{ color: colors.primaryDarkBlue, fontSize: fontSizes.xl }}
      />
      <IMCTypography
        variant="body"
        color={colors.primaryDarkBlue}
        size={fontSizes.md}
        style={{ margin: 0 }}
        weight={fontWeights.semiBold}
      >
        {contact.phone}
      </IMCTypography>
    </IMCBox>

    <IMCBox
      margin="0"
      padding="0"
      backgroundColor={colors.transparent}
      style={styles.iconTextRow("center", spacing.sm, spacing.md)}
    >
      <Icons.EmailIcon
        sx={{ color: colors.primaryDarkBlue, fontSize: fontSizes.xl }}
      />
      <IMCTypography
        variant="body"
        color={colors.primaryDarkBlue}
        size={fontSizes.md}
        style={{ margin: 0 }}
        weight={fontWeights.semiBold}
      >
        {contact.email}
      </IMCTypography>
    </IMCBox>
    <IMCBox
      margin="0"
      padding="0"
      backgroundColor={colors.transparent}
      style={styles.iconTextRow("flex-start")}
    >
      <Icons.BusinessIcon
        sx={{
          color: colors.primaryDarkBlue,
          fontSize: fontSizes.xl,
          marginBottom: spacing.md,
        }}
      />
      <IMCTypography
        variant="body"
        color={colors.primaryDarkBlue}
        size={fontSizes.sm}
        style={{ margin: 0 }}
        weight={fontWeights.regular}
      >
        {contact.address}
      </IMCTypography>
    </IMCBox>

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      mt={2}
    >
      {contact.socials.map(({ name: Icon, url }, index) => (
        <Link
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          sx={styles.socialLink}
        >
          <Icon sx={{ fontSize: fontSizes.xxl }} />
        </Link>
      ))}
    </Box>
  </Grid>
);

const styles = {
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    textDecoration: "none",
  },
  iconTextRow: (align = "center", marginTop = "0", marginBottom = "0") => ({
    display: "flex",
    alignItems: align,
    gap: spacing.md,
    marginTop,
    marginBottom,
  }),
  socialLink: {
    display: "flex",
    alignItems: "center",
    color: colors.primaryDarkBlue,
    "&:hover": {
      color: colors.white,
    },
  },
  divider: {
    marginBottom: spacing.md,
  },
};
export default ContactSection;
