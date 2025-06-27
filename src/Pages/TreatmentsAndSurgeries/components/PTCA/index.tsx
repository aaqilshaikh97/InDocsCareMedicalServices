import IMCTypography from "../../../../components/IMCTypography";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { spacing } from "../../../../styles/spacing";
import IMCBox from "../../../../components/IMCBox";
import type { CSSProperties } from "react";
import { List, Section } from "../List";
import { Icons } from "../../../../styles/icons";

const PTCA = () => {
  return (
    <>
      <IMCBox
        margin={spacing.none}
        backgroundColor={colors.light}
        padding={spacing.xl}
      >
        <IMCBox
          padding={spacing.none}
          margin={spacing.none}
          style={styles.centerBox}
        >
          <IMCTypography
            variant="h2"
            size={fontSizes.xl}
            weight={fontWeights.semiBold}
            color={colors.primaryDarkBlue}
          >
            Coronary Angioplasty (PTCA/PCI) — Advanced Treatment for Blocked
            Heart Arteries{" "}
          </IMCTypography>
        </IMCBox>

        <IMCBox
          padding={spacing.none}
          margin={spacing.none}
          style={styles.startBox}
        >
          <IMCTypography
            variant="subtitle"
            size={fontSizes.md}
            weight={fontWeights.semiBold}
            color={colors.mintGreen}
            style={styles.label}
          >
            Comprehensive Guide by InDocsCare Medical Services
          </IMCTypography>
        </IMCBox>

        <Section title="">
          <List
            items={[
              <>
                <strong>
                  {" "}
                  Percutaneous Transluminal Coronary Angioplasty (PTCA)
                </strong>
                , also known as
                <strong> Percutaneous Coronary Intervention (PCI)</strong>, is a
                minimally invasive procedure used to open blocked heart
                arteries. The goal is to restore healthy blood flow to the heart
                muscle (myocardium), preventing heart attacks and relieving
                chest pain caused by{" "}
                <strong>coronary artery disease (CAD).</strong>
              </>,
              <>
                CAD is caused by plaque buildup (atherosclerosis) inside the
                arteries, leading to narrowed or blocked vessels.
              </>,
            ]}
          />
        </Section>

        <Section title="Why Choose PTCA?">
          <List
            icon={
              <Icons.FiberManualRecordIcon
                style={{ color: colors.primaryDarkBlue, fontSize: "0.75rem" }}
              />
            }
            items={[
              <>
                <strong>Quick relief from angina (chest pain)</strong>
              </>,
              <>
                <strong>Prevention of heart attacks</strong>
              </>,
              <>
                <strong>Alternative to open-heart surgery (CABG)</strong>
              </>,
              <>
                <strong> Shorter recovery & hospital stay</strong>
              </>,
              <>
                <strong>
                  Minimally invasive procedure under local anesthesia
                </strong>
              </>,
              <>
                <strong> No Cut , No open Procedure </strong>
              </>,
            ]}
          />
        </Section>

        <Section title="When is PTCA Recommended?">
          <List
            icon={
              <Icons.FiberManualRecordIcon
                style={{ color: colors.primaryDarkBlue, fontSize: "0.75rem" }}
              />
            }
            items={[
              <>
                <strong> Severe artery blockage </strong>(typically above 70%)
              </>,
              <>
                <strong>Acute heart attack (STEMI)</strong>
              </>,
              <>
                <strong>Unstable angina or NSTEMI</strong>
              </>,
              <>
                <strong>
                  {" "}
                  Patients with angina not responding to medication
                </strong>
              </>,
            ]}
          />
          <IMCTypography variant="body" color={colors.primaryDarkBlue}>
            <strong>Note:</strong> Take doctor’s opinion before proceeding or
            contact InDocsCare for experts suggestions
          </IMCTypography>
        </Section>

        <Section title="How is PTCA Performed?">
          <List
            icon={
              <Icons.FiberManualRecordIcon
                style={{ color: colors.primaryDarkBlue, fontSize: "0.75rem" }}
              />
            }
            items={[
              <>
                A <strong>catheter </strong> is inserted through the femoral or
                radial artery.
              </>,
              <>
                Using advanced imaging, a <strong>balloon </strong>is guided to
                the blocked artery.
              </>,
              <>
                The balloon inflates to open the artery, and a{" "}
                <strong>stent </strong>(a small metal mesh tube) is placed to
                keep it open.
              </>,
              <>
                The procedure typically takes{" "}
                <strong> 30 minutes to 2 hours.</strong>
              </>,
              <>
                Performed by expert{" "}
                <strong>interventional cardiologists </strong>at top hospitals.
              </>,
              <>We have most experienced Doctors & Advanced technology</>,
            ]}
          />
        </Section>

        <Section title="Safety & Complications">
          <IMCTypography variant="body">
            PTCA is a highly safe procedure with excellent success rates.
            However, risks may include:{" "}
          </IMCTypography>
          <List
            icon={
              <Icons.FiberManualRecordIcon
                style={{ color: colors.primaryDarkBlue, fontSize: "0.75rem" }}
              />
            }
            items={[
              <>Minor bleeding or bruising at the insertion site</>,
              <>Temporary kidney strain from contrast dye</>,
              <>Rare chance of artery re-narrowing (restenosis)</>,
              <>Very low mortality risk (around 1%)</>,
            ]}
          />
        </Section>

        <Section title="Post-Procedure Care">
          <List
            icon={
              <Icons.FiberManualRecordIcon
                style={{ color: colors.primaryDarkBlue, fontSize: "0.75rem" }}
              />
            }
            items={[
              <>Resume light activities within a few days </>,
              <>Continue prescribed medications (antiplatelets) </>,

              <>
                Lifestyle adjustments:
                <strong> healthy diet, exercise, stress reduction</strong>
              </>,
            ]}
          />
        </Section>

  <Section title="Why InDocsCare?">
         
          <List
           
            items={[
             <>
             Our <strong> experienced cardiac specialists </strong>perform angioplasty even for complex cases <strong> with high success rates,</strong> including blockages above 90%. We collaborate with leading hospitals and offer <strong></strong> personalized patient care — from consultation to complete recovery.
             </>
            ]}
          />
        </Section>
          <Section title="For Medical Assistance and Consultation">
        <IMCTypography variant="body">
          <strong>Contact:</strong> InDocsCare Medical Services
        </IMCTypography>
        <IMCTypography variant="body">
          <strong>Email:</strong> info@indocscare.com, indocscare@gmail.com
        </IMCTypography>

        <List
          icon={
            <Icons.CheckCircleIcon
              style={{ fontSize: "1rem", color: colors.primaryDarkBlue }}
            />
          }
          items={[
            "For detailed information and assistance, kindly contact us.",
            "Free Consultation and Free Doctor’s Opinion",
          ]}
        />

        <IMCTypography
          variant="body"
          color={colors.danger}
          weight={fontWeights.semiBold}
          size={fontSizes.md}
        >
          From your first contact to your safe return home, we’re with you.
        </IMCTypography>

        <List
          icon={
            <Icons.CircleIcon
              style={{ fontSize: "1rem", color: colors.primaryDarkBlue }}
            />
          }
          items={[
            <>
              We assist with online medical queries, visa support, airport
              pickup, accommodation, doctor appointments, hospital coordination,
              arrangement of required surgeries, medicines purchasing, any other
              support you may need in your treatment and even after-treatment
              follow-up —<strong> all at no extra cost. FREE OF COST</strong>.
            </>,
          ]}
        />
      </Section>
      </IMCBox>
    </>
  );
};

const styles: Record<string, CSSProperties> = {
  centerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  startBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
};
export default PTCA;
