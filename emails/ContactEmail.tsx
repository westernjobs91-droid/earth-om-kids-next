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

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  org: string;
  message: string;
  interests: string[];
  honeypot?: string;
}

export default function ContactEmail({ formData }: { formData: ContactFormData }) {
  const interestsList = formData.interests.length > 0 
    ? formData.interests.join(', ') 
    : 'None selected';

  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {formData.name}</Preview>
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

          {/* Greeting & Intro */}
          <Heading style={{ 
            color: '#2D5A4A', 
            fontSize: '26px', 
            margin: '0 0 12px 0',
            fontWeight: '600',
            letterSpacing: '-0.02em'
          }}>
            New Inquiry Received
          </Heading>
          
          <Text style={{ 
            color: '#1F2E2A', 
            fontSize: '16px', 
            lineHeight: '1.65', 
            margin: '0 0 28px 0' 
          }}>
            Hello! A new message has come in through the contact form on your website.
          </Text>

          {/* Contact Details */}
          <Section style={{ 
            backgroundColor: '#F8F1E9', 
            borderRadius: '12px', 
            padding: '28px 24px', 
            marginBottom: '28px',
            border: '1px solid #E8D5B7'
          }}>
            <Text style={{ 
              fontSize: '12px', 
              fontWeight: '700', 
              color: '#2D5A4A', 
              letterSpacing: '1px',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}>
              CONTACT DETAILS
            </Text>

            <Section style={{ marginBottom: '18px' }}>
              <Text style={{ fontSize: '11px', color: '#2D5A4A', fontWeight: '600', marginBottom: '5px', letterSpacing: '0.5px' }}>NAME</Text>
              <Text style={{ fontSize: '17px', color: '#1F2E2A', fontWeight: '500' }}>{formData.name}</Text>
            </Section>

            <Section style={{ marginBottom: '18px' }}>
              <Text style={{ fontSize: '11px', color: '#2D5A4A', fontWeight: '600', marginBottom: '5px', letterSpacing: '0.5px' }}>EMAIL</Text>
              <Link 
                href={`mailto:${formData.email}`} 
                style={{ fontSize: '17px', color: '#2D5A4A', textDecoration: 'underline', fontWeight: '500' }}
              >
                {formData.email}
              </Link>
            </Section>

            {formData.phone && (
              <Section style={{ marginBottom: '18px' }}>
                <Text style={{ fontSize: '11px', color: '#2D5A4A', fontWeight: '600', marginBottom: '5px', letterSpacing: '0.5px' }}>PHONE</Text>
                <Text style={{ fontSize: '17px', color: '#1F2E2A', fontWeight: '500' }}>{formData.phone}</Text>
              </Section>
            )}

            {formData.org && (
              <Section style={{ marginBottom: '18px' }}>
                <Text style={{ fontSize: '11px', color: '#2D5A4A', fontWeight: '600', marginBottom: '5px', letterSpacing: '0.5px' }}>ORGANIZATION / SCHOOL</Text>
                <Text style={{ fontSize: '17px', color: '#1F2E2A', fontWeight: '500' }}>{formData.org}</Text>
              </Section>
            )}

            <Section>
              <Text style={{ fontSize: '11px', color: '#2D5A4A', fontWeight: '600', marginBottom: '5px', letterSpacing: '0.5px' }}>INTERESTED IN</Text>
              <Text style={{ fontSize: '17px', color: '#1F2E2A', fontWeight: '500' }}>{interestsList}</Text>
            </Section>
          </Section>

          {/* Message Section */}
          <Section style={{ marginBottom: '32px' }}>
            <Text style={{ 
              fontSize: '11px', 
              fontWeight: '700', 
              color: '#2D5A4A', 
              letterSpacing: '1px',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}>
              THEIR MESSAGE
            </Text>
            <Section style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #E8D5B7', 
              borderRadius: '12px', 
              padding: '22px 24px' 
            }}>
              <Text style={{ 
                fontSize: '16px', 
                color: '#1F2E2A', 
                lineHeight: '1.7',
                whiteSpace: 'pre-wrap',
                margin: 0 
              }}>
                {formData.message}
              </Text>
            </Section>
          </Section>

          {/* Reply CTA */}
          <Section style={{ 
            backgroundColor: '#2D5A4A', 
            borderRadius: '12px', 
            padding: '22px 26px',
            textAlign: 'center',
            marginBottom: '32px'
          }}>
            <Text style={{ 
              color: '#F8F1E9', 
              fontSize: '15px', 
              fontWeight: '500',
              margin: '0 0 6px 0' 
            }}>
              Ready to reply?
            </Text>
            <Text style={{ 
              color: '#A7C4A0', 
              fontSize: '14px', 
              margin: 0,
              lineHeight: '1.5'
            }}>
              Just hit reply on this email — it will go straight to {formData.name}.
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
              Sent from the contact form on{' '}
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