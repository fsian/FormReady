import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>📎 FormReady</h1>
          <p className="subtitle">Govt Exam Image Tool 🇮🇳</p>
        </header>

        <main>
          <div className="welcome-section">
            <h2>India ke sabse accurate exam image compression tool</h2>
            <p>Photo aur signature ko exam form ke liye perfectly compress karo.</p>
          </div>

          <div className="features">
            <div className="feature-card">
              <h3>✅ Exam Presets</h3>
              <p>UPSC, SSC, Railway, IBPS/SBI, UP Police, NEET/JEE</p>
            </div>
            <div className="feature-card">
              <h3>✅ Exact Compression</h3>
              <p>Photo & Signature exact KB pe compress</p>
            </div>
            <div className="feature-card">
              <h3>✅ Document Support</h3>
              <p>Aadhar, PAN, Marksheet, Certificates...</p>
            </div>
            <div className="feature-card">
              <h3>✅ Zero Blur</h3>
              <p>Binary search compression — perfect quality</p>
            </div>
            <div className="feature-card">
              <h3>✅ 100% Private</h3>
              <p>Browser-based — koi server nahi</p>
            </div>
            <div className="feature-card">
              <h3>✅ WhatsApp Share</h3>
              <p>Direct sharing option</p>
            </div>
          </div>

          <div className="upload-section">
            <p>🚀 Image processing features coming soon!</p>
          </div>
        </main>

        <footer>
          <p>Made with ❤️ for Indian students</p>
        </footer>
      </div>
      
      <SpeedInsights />
    </>
  )
}

export default App
