import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Issızlar - Türk Müzik Grubu'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          Issızlar
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Ruhun derinliklerinden gelen melodiler
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#64748b',
            marginTop: 20,
          }}
        >
          Türk Müzik Grubu
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
