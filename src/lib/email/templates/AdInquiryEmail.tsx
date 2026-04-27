import {
  Section,
  Text,
  Heading,
  Button,
  Hr,
  Row,
  Column,
} from "@react-email/components";
import { Layout } from "./components/Layout";

interface AdInquiryProps {
  firstName: string;
  lastName: string;
  company: string;
  city: string;
  phone: string;
  submittedAt: string;
}

export const AdInquiryEmail = ({
  firstName,
  lastName,
  company,
  city,
  phone,
  submittedAt,
}: AdInquiryProps) => {
  return (
    <Layout previewText={`Nowe zapytanie reklamowe – ${company} (${city})`}>
      <Heading style={heading}>📩 Nowe zapytanie reklamowe</Heading>

      <Text style={intro}>
        Firma zainteresowana umieszczeniem{" "}
        <strong>reklamy na tylnej szybie</strong> pojazdu floty Mida Polska.
        Poniżej dane kontaktowe – skontaktuj się jak najszybciej!
      </Text>

      <Text style={dateMeta}>📅 Data zgłoszenia: {submittedAt}</Text>

      <Hr style={divider} />

      {/* Imię i nazwisko */}
      <Section style={dataCard}>
        <Text style={dataLabel}>IMIĘ I NAZWISKO</Text>
        <Text style={dataValue}>
          {firstName} {lastName}
        </Text>
      </Section>

      {/* Firma */}
      <Section style={{ ...dataCard, marginTop: "12px" }}>
        <Text style={dataLabel}>NAZWA FIRMY</Text>
        <Text style={dataValue}>🏢 {company}</Text>
      </Section>

      {/* Miasto + Telefon w dwóch kolumnach */}
      <Row style={{ marginTop: "12px" }}>
        <Column style={{ width: "50%", paddingRight: "6px" }}>
          <Section style={dataCard}>
            <Text style={dataLabel}>MIASTO</Text>
            <Text style={dataValue}>📍 {city}</Text>
          </Section>
        </Column>
        <Column style={{ width: "50%", paddingLeft: "6px" }}>
          <Section style={dataCard}>
            <Text style={dataLabel}>TELEFON</Text>
            <Text style={dataValue}>📞 {phone}</Text>
          </Section>
        </Column>
      </Row>

      <Hr style={divider} />

      <Section style={buttonContainer}>
        <Button style={button} href={`tel:${phone}`}>
          📞 Zadzwoń do klienta
        </Button>
      </Section>
    </Layout>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const heading = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#111111",
  margin: "0 0 16px",
};

const intro = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#374151",
  margin: "0 0 8px",
};

const dateMeta = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0 0 24px",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const dataCard = {
  backgroundColor: "#f9f9f9",
  borderLeft: "3px solid #e05c00",
  borderRadius: "8px",
  padding: "16px 20px",
};

const dataLabel = {
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  color: "#9ca3af",
  margin: "0 0 4px",
};

const dataValue = {
  fontSize: "17px",
  fontWeight: "700",
  color: "#111111",
  margin: "0",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "8px 0 0",
};

const button = {
  backgroundColor: "#e05c00",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "700",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "14px 32px",
  display: "inline-block",
};
