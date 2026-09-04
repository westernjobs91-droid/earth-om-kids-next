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
  Row,
  Column,
} from '@react-email/components';

interface AutoReplyEmailProps {
  name: string;
}

export default function AutoReplyEmail({ name }: AutoReplyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>We received your message! Earth & OM Kids will be in touch soon. 🌿</Preview>
      <Body style={{
        backgroundColor: '#EEF5EE',
        margin: 0,
        padding: '40px 20px',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}>

        {/* Hero Banner */}
        <Container style={{
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          <Section style={{
            background: 'linear-gradient(135deg, #2D5A4A 0%, #3D7A62 50%, #4A9070 100%)',
            borderRadius: '20px 20px 0 0',
            padding: '48px 40px 40px',
            textAlign: 'center',
          }}>
            {/* Decorative circles */}
            <Text style={{ fontSize: '36px', margin: '0 0 16px 0', lineHeight: '1' }}>🌿</Text>
            <Text style={{
              fontSize: '36px',
              fontWeight: '800',
              color: '#ffffff',
              margin: '0 0 6px 0',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}>
              Earth &amp; OM Kids
            </Text>
            <Text style={{
              fontSize: '13px',
              color: '#A7D4B8',
              margin: '0',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}>
              Kids Yoga &amp; Mindfulness · Toronto
            </Text>
          </Section>

          {/* Curved connector */}
          <Section style={{
            backgroundColor: '#2D5A4A',
            padding: '0',
            margin: '0',
          }}>
            <Text style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px 20px 0 0',
              margin: '0',
              padding: '0',
              fontSize: '1px',
              lineHeight: '24px',
              color: 'transparent',
            }}>.</Text>
          </Section>

          {/* Main Card */}
          <Section style={{
            backgroundColor: '#ffffff',
            padding: '40px 44px',
          }}>
            {/* Greeting */}
            <Heading style={{
              color: '#2D5A4A',
              fontSize: '30px',
              fontWeight: '700',
              margin: '0 0 8px 0',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
            }}>
              Thank you, {name}! 🙏
            </Heading>

            <Text style={{
              color: '#5A8A72',
              fontSize: '15px',
              margin: '0 0 28px 0',
              letterSpacing: '0.3px',
            }}>
              We're so glad you reached out.
            </Text>

            <Hr style={{ borderColor: '#E8F0E8', margin: '0 0 28px 0' }} />

            {/* Confirmation message */}
            <Section style={{
              backgroundColor: '#F0F8F2',
              borderRadius: '14px',
              padding: '28px 30px',
              marginBottom: '28px',
              borderLeft: '4px solid #2D5A4A',
            }}>
              <Text style={{
                color: '#1F2E2A',
                fontSize: '17px',
                lineHeight: '1.75',
                margin: '0',
                fontStyle: 'italic',
              }}>
                "We have received your request and will get back to you shortly."
              </Text>
            </Section>

            <Text style={{
              color: '#4A6B5A',
              fontSize: '15px',
              lineHeight: '1.75',
              margin: '0 0 32px 0',
            }}>
              While you wait, feel free to explore our programs: toddler yoga, mindfulness sessions, and birthday parties. We can't wait to connect with you!
            </Text>

            {/* 3 feature highlights */}
            <Row style={{ marginBottom: '32px' }}>
              <Column style={{ width: '33%', textAlign: 'center', padding: '0 6px' }}>
                <Section style={{
                  backgroundColor: '#F8FBF8',
                  borderRadius: '12px',
                  padding: '20px 12px',
                  border: '1px solid #DCF0E0',
                }}>
                  <Text style={{ fontSize: '28px', margin: '0 0 8px 0' }}>🧘</Text>
                  <Text style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#2D5A4A',
                    margin: '0',
                    letterSpacing: '0.5px',
                  }}>Kids Yoga</Text>
                </Section>
              </Column>
              <Column style={{ width: '33%', textAlign: 'center', padding: '0 6px' }}>
                <Section style={{
                  backgroundColor: '#F8FBF8',
                  borderRadius: '12px',
                  padding: '20px 12px',
                  border: '1px solid #DCF0E0',
                }}>
                  <Text style={{ fontSize: '28px', margin: '0 0 8px 0' }}>🌸</Text>
                  <Text style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#2D5A4A',
                    margin: '0',
                    letterSpacing: '0.5px',
                  }}>Mindfulness</Text>
                </Section>
              </Column>
              <Column style={{ width: '33%', textAlign: 'center', padding: '0 6px' }}>
                <Section style={{
                  backgroundColor: '#F8FBF8',
                  borderRadius: '12px',
                  padding: '20px 12px',
                  border: '1px solid #DCF0E0',
                }}>
                  <Text style={{ fontSize: '28px', margin: '0 0 8px 0' }}>🎉</Text>
                  <Text style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#2D5A4A',
                    margin: '0',
                    letterSpacing: '0.5px',
                  }}>Birthdays</Text>
                </Section>
              </Column>
            </Row>

            {/* CTA Button */}
            <Section style={{ textAlign: 'center', marginBottom: '32px' }}>
              <Link
                href="https://www.earthandom.ca"
                style={{
                  backgroundColor: '#2D5A4A',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  padding: '16px 40px',
                  borderRadius: '50px',
                  display: 'inline-block',
                  letterSpacing: '0.5px',
                }}
              >
                Explore Our Programs →
              </Link>
            </Section>

            <Hr style={{ borderColor: '#E8F0E8', margin: '0 0 28px 0' }} />

            {/* Signature */}
            <Section style={{ textAlign: 'center' }}>
              <Text style={{
                color: '#8AB09A',
                fontSize: '13px',
                margin: '0 0 6px 0',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>
                With warmth &amp; gratitude
              </Text>
              <Text style={{
                color: '#2D5A4A',
                fontSize: '22px',
                fontWeight: '700',
                margin: '0 0 4px 0',
                fontStyle: 'italic',
              }}>
                Taran Kaur
              </Text>
              <Text style={{
                color: '#8AB09A',
                fontSize: '13px',
                margin: '0',
              }}>
                Founder · Earth &amp; OM Kids · Toronto
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={{
            backgroundColor: '#2D5A4A',
            borderRadius: '0 0 20px 20px',
            padding: '24px 40px',
            textAlign: 'center',
          }}>
            <Text style={{
              color: '#A7D4B8',
              fontSize: '13px',
              margin: '0 0 8px 0',
            }}>
              Questions? Email us at{' '}
              <Link href="mailto:earthandomkids@gmail.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                earthandomkids@gmail.com
              </Link>
            </Text>
            <Text style={{
              color: '#6AAE8A',
              fontSize: '11px',
              margin: '0',
              letterSpacing: '0.5px',
            }}>
              © 2025 Earth &amp; OM Kids · Toronto, Ontario ·{' '}
              <Link href="https://www.earthandom.ca" style={{ color: '#6AAE8A', textDecoration: 'underline' }}>
                earthandom.ca
              </Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
