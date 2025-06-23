import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Issızlar - Türk Müzik Grubu'
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60,
          fontWeight: 'bold',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f620 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #a78bfa15 0%, transparent 50%)
            `,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '68px',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #ffffff, #e2e8f0)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '15px',
            }}
          >
            Issızlar
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#cbd5e1',
              fontWeight: 'normal',
              marginBottom: '25px',
            }}
          >
            Türk Müzik Grubu
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#94a3b8',
              fontWeight: 'normal',
              maxWidth: '700px',
              lineHeight: '1.3',
            }}
          >
            Modern Türk rock ve alternatif müziğin özgün sesi
          </div>
        </div>

        {/* Musical note */}
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            fontSize: '40px',
            color: '#3b82f650',
          }}
        >
          ♪
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
