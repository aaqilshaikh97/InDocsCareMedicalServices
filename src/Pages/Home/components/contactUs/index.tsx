import { useState, useRef } from "react";
import IMCTypography from "../../../../components/IMCTypography";
import IMCInput from "../../../../components/IMCInput";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { useTranslation } from "react-i18next";
import { spacing } from "../../../../styles/spacing";
import IMCBox from "../../../../components/IMCBox";
import { colors } from "../../../../styles/colors";
import IMCButton from "../../../../components/IMCButton";
import { borderRadius } from "../../../../styles/borderRadius";
import { shadows } from "../../../../styles/shadows";

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    health: "",
    report: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files;
      if (files && files.length > 0) {
        setFormData((prev) => ({ ...prev, [name]: files[0] }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    const { name, email, phone, health, report } = formData;
    alert(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nHealth Info: ${health}\nReport File: ${
        report?.name || "No file selected"
      }`
    );
  };

  return (
    <IMCBox
      backgroundColor={colors.iceBlue}
      borderRadius={borderRadius.md}
      boxShadow={shadows.heavy}
      style={{
        margin: spacing.md,
        padding: spacing.lg,
      }}
    >
      <IMCTypography
        variant="subtitle"
        size={fontSizes.lg}
        weight={fontWeights.semiBold}
        color={colors.primaryDarkBlue}
      >
        {t("ContactUs.title")}
      </IMCTypography>
      <IMCTypography
        variant="caption"
        size={fontSizes.md}
        weight={fontWeights.regular}
      >
        {t("ContactUs.substitle")}
      </IMCTypography>
      <IMCInput
        label={t("ContactUs.patientName")}
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t("ContactUs.patientNamePlaceholder")}
        required
      />

      <IMCInput
        label={t("ContactUs.email")}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t("ContactUs.emailPlaceholder")}
        required
      />

      <IMCInput
        type="number"
        label={t("ContactUs.phone")}
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder={t("ContactUs.phonePlaceholder")}
        required
      />

      <IMCInput
        label={t("ContactUs.health")}
        name="health"
        multiline
        value={formData.health}
        onChange={handleChange}
        placeholder={t("ContactUs.healthPlaceholder")}
        rows={3}
        required
      />

      <IMCBox>
        <label>{t("ContactUs.report")}</label>

        <input
          type="file"
          id="report"
          name="report"
          ref={fileInputRef}
          onChange={handleUploadClick}
          style={{ display: "none" }}
          required
        />

        <IMCButton
          variant="outlined"
          fontSize={fontSizes.xs}
          text={t("ContactUs.report")}
          bgColor={colors.primaryDarkBlue}
          textColor={colors.white}
          onClick={handleUploadClick}
        />
      </IMCBox>
      <IMCBox
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IMCButton
          bgColor={colors.primaryDarkBlue}
          fontWeight={fontWeights.bold}
          fontSize={fontSizes.sm}
          textColor={colors.white}
          text={t("ContactUs.submit")}
          onClick={handleSubmit}
        />
      </IMCBox>
    </IMCBox>
  );
};

export default ContactUs;
