// src/pages/Instructions.jsx
import { useTranslation } from "react-i18next";
import { FiCheckCircle } from "react-icons/fi";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { MainTitle, Text } from "../../components/common/texts";
import {
  GlassCard,
  GlassSection,
  Grid,
  IconWrapper,
} from "./instructions.styles";

export default function Instructions() {
  const { t } = useTranslation("instructions");
  const items = Array.from({ length: 9 }, (_, i) => t(`i${i + 1}`));

  return (
    <>
    <GlassSection>
      <MyContainer>
        <MainTitle style={{ textAlign: "center", marginBottom: "2rem" }}>
          {t("title")}
        </MainTitle>

        <Grid>
          {items.map((text, idx) => (
            <GlassCard key={idx}>
              <IconWrapper>
                <FiCheckCircle />
              </IconWrapper>
              <Text>{text}</Text>
            </GlassCard>
          ))}
        </Grid>
      </MyContainer>
    </GlassSection>
          </>
  );
}
