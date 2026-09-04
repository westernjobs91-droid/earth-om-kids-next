import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';

interface AutoReplyEmailProps {
  name: string;
}

export default function AutoReplyEmail({ name }: AutoReplyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>We received your message — Earth & OM Kids will be in touch soon!</Preview>
      <Body style={{
        backgroundColor: '#F8F1E9',
        margin: 0,
        padding: '40px 20px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <Container style={{
          backgroundColor: '#ffffff',
          margin: '0 auto',
          padding: '40px',
          borderRadius: '16px',
          maxWidth: '600px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        }}>
          {/* Brand Header */}
          <Section style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Text style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#2D5A4A',
              margin: '0 0 6px 0',
              letterSpacing: '-0.03em'
            }}>
              Earth &amp; OM Kids
            </Text>
            <Text style={{
              fontSize: '15px',
              color: '#2D5A4A',
              opacity: 0.75,
              margin: 0,
              letterSpacing: '0.5px'
            }}>
              Kids Yoga &amp; Mindfulness • Toronto
            </Text>
          </Section>

          <Hr style={{ borderColor: '#E8D5B7', margin: '0 0 32px 0' }} />

          {/* Main Message */}
          <Heading style={{
            color: '#2D5A4A',
            fontSize: '26px',
            margin: '0 0 16px 0',
            fontWeight: '600',
            letterSpacing: '-0.02em'
          }}>
            Thank you, {name}!
          </Heading>

          <Text style={{
            color: '#1F2E2A',
            fontSize: '16px',
            lineHeight: '1.7',
            margin: '0 0 20px 0'
          }}>
            We have received your request and will get back to you shortly.
          </Text>

          <Text style={{
            color: '#1F2E2A',
            fontSize: '16px',
            lineHeight: '1.7',
            margin: '0 0 32px 0'
          }}>
            In the meantime, feel free to explore our programs or reach out to us directly at{' '}
            <Link
              href="mailto:earthandomkids@gmail.com"
              style={{ color: '#2D5A4A', textDecoration: 'underline' }}
            >
              earthandomkids@gmail.com
            </Link>.
          </Text>

          {/* Warm closing block */}
          <Section style={{
            backgroundColor: '#F8F1E9',
            borderRadius: '12px',
            padding: '24px 26px',
            marginBottom: '32px',
            border: '1px solid #E8D5B7',
            textAlign: 'center'
          }}>
            <Text style={{
              color: '#2D5A4A',
              fontSize: '16px',
              fontWeight: '500',
              margin: '0 0 6px 0'
            }}>
              With warmth,
            </Text>
            <Text style={{
              color: '#2D5A4A',
              fontSize: '17px',
              fontWeight: '700',
              margin: '0 0 4px 0'
            }}>
              Taran Kaur
            </Text>
            <Text style={{
              color: '#2D5A4A',
              fontSize: '14px',
              opacity: 0.75,
              margin: 0
            }}>
              Earth &amp; OM Kids • Toronto, Ontario
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ textAlign: 'center', paddingTop: '8px' }}>
            <Text style={{
              fontSize: '13px',
              color: '#2D5A4A',
              opacity: 0.65,
              margin: '0 0 6px 0'
            }}>
              Visit us at{' '}
              <Link
                href="https://www.earthandom.ca"
                style={{ color: '#2D5A4A', textDecoration: 'underline' }}
              >
                earthandom.ca
              </Link>
            </Text>
            <Text style={{
              fontSize: '12px',
              color: '#2D5A4A',
              opacity: 0.55,
              margin: 0
            }}>
              Earth &amp; OM Kids • Toronto, Ontario • earthandomkids@gmail.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
