import React from "react";
import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";


type ListProps = {
  items: React.ReactNode[];
  icon?: React.ReactNode;
  type?: "ul" | "ol";
};
import { spacing } from "../../../../styles/spacing";
import { fontWeights } from "../../../../styles/fontWeights";
import { fontSizes } from "../../../../styles/fontSizes";


export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <IMCBox>
    <IMCTypography
      variant="subtitle"
      size={fontSizes.lg}
      weight={fontWeights.semiBold}
      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
    >
      {title}
    </IMCTypography>
    {children}
  </IMCBox>
);


export const List: React.FC<ListProps> = ({ items, icon, type = "ul" }) => {
  const ListTag = type;

  return (
    <ListTag
      style={{
        paddingLeft: 0,
        marginTop: spacing.none,
        marginLeft: spacing.lg,
      }}
    >
      {items.map((text, idx) => (
        <li
          key={idx}
          style={{
            listStyleType: icon ? "none" : "disc",
            display: "flex",
            alignItems: "flex-start",
            marginBottom: spacing.none,
          }}
        >
          {icon && (
            <span style={{ marginRight: "0.5rem", marginTop: spacing.none }}>
              {icon}
            </span>
          )}
          <IMCTypography variant="body" style={{ marginTop: spacing.none }}>
            {text}
          </IMCTypography>
        </li>
      ))}
    </ListTag>
  );
};

type BulletProps = {
  boldText: string;
  restText: string;
  icon?: React.ReactNode;
};

export const Bullet: React.FC<BulletProps> = ({
  boldText,
  restText,
  icon,
}) => {
  return (
    <IMCBox
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginTop: spacing.none,
        marginLeft: spacing.lg,
      }}
    >
      {icon && (
        <span style={{ marginRight: "0.3rem", marginTop: spacing.none }}>
          {icon}
        </span>
      )}
      <IMCTypography variant="body" style={{ marginTop: spacing.none }}>
        <span
          style={{
            fontWeight: fontWeights.semiBold,
            fontSize: fontSizes.md,
          }}
        >
          {boldText}
        </span>
        {restText}
      </IMCTypography>
    </IMCBox>
  );
};
