import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Link,
  Hr,
  Img,
  Button,
} from "@react-email/components";

interface LayoutProps {
  previewText: string;
  children: React.ReactNode;
}

export const Layout = ({ previewText, children }: LayoutProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* HEADER */}
          <Section style={header}>
            <Img
              src="https://www.mida-polska.pl/images/logo.png"
              width="120"
              alt="Mida Polska"
              style={logo}
            />
          </Section>

          {/* ORANGE BAR */}
          <Section style={orangeBar} />

          {/* CONTENT */}
          <Section style={content}>{children}</Section>

          <Hr style={hr} />

          {/* FOOTER */}
          <Section style={footer}>
            <Text style={footerText}>
              Wiadomość wygenerowana automatycznie ze strony{" "}
              <Link href="https://www.mida-polska.pl" style={link}>
                mida-polska.pl
              </Link>
            </Text>
            <Text style={footerText}>
              © {currentYear} Mida Polska – Autoryzowany Partner Flotowy Bolt,
              Uber, FreeNow
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f4f4f4",
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "32px 0 48px",
  maxWidth: "600px",
};

const header = {
  padding: "28px 40px",
  backgroundColor: "#111111",
  borderRadius: "12px 12px 0 0",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto",
};

const orangeBar = {
  backgroundColor: "#e05c00",
  height: "4px",
  padding: "0",
};

const content = {
  backgroundColor: "#ffffff",
  padding: "36px 40px",
  borderRadius: "0 0 12px 12px",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "0",
};

const footer = {
  textAlign: "center" as const,
  padding: "24px 40px",
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "4px 0",
  lineHeight: "1.6",
};

const link = {
  color: "#e05c00",
  textDecoration: "none",
};
