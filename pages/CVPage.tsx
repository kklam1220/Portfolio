import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';

const CVPage: React.FC = () => {
  // ... state logic ...
  const [password, setPassword] = React.useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleLogin = (e: React.FormEvent) => {
    // ... login logic ...
    e.preventDefault();
    if (password === '12345trewQ@') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    // ... login form ...
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
        {/* ... login form content ... */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">Protected Content</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Unlock CV
            </button>
            <div className="text-center mt-4">
              <Link to="/it-portfolio" className="text-sm text-stone-500 hover:text-stone-700">
                Back to Portfolio
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <style>{`
        @media print {
          @page { margin: 0cm; }
          body { margin: 0cm; -webkit-print-color-adjust: exact; }
        }
      `}</style>
      {/* Navigation */}
      <div className="bg-stone-900 border-b border-stone-700 py-4 px-6 print:hidden">
        <div className="max-w-[210mm] mx-auto flex justify-between items-center">
          <Link
            to="/it-portfolio"
            className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to IT Portfolio</span>
          </Link>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-semibold"
            title="Save as PDF to preserve formatting"
          >
            <Download size={20} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* CV Container - A4 size with dark theme */}
      <div className="py-8 px-6 bg-stone-100 print:p-0 print:bg-white">
        <div className="max-w-[210mm] mx-auto bg-white shadow-2xl border border-stone-200 print:shadow-none print:border-0" style={{ minHeight: '297mm' }}>

          {/* Header - Compact */}
          <div className="bg-white border-b-4 border-black px-8 py-5 print:py-2 print:px-6">
            <h1 className="text-3xl font-bold text-black mb-1 print:text-2xl print:mb-0">KIN KONG</h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-3 print:text-lg print:mb-1">Entry-Level SOC Analyst</h2>

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-stone-700 print:text-xs">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-600" />
                <span>+18259949027</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-600" />
                <a href="mailto:kklam1220@gmail.com" className="text-blue-600 hover:underline">kklam1220@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={14} className="text-blue-600" />
                <a href="https://linkedin.com/in/kinkonglam/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/kinkonglam/</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-600" />
                <span>Calgary, Canada</span>
              </div>
            </div>
          </div>

          {/* Main Content - Two Columns matching PDF layout */}
          <div className="grid grid-cols-[65%_35%] gap-0">

            {/* Left Column - Experience & Education */}
            <div className="px-8 py-6 border-r border-stone-200">

              {/* Experience Section */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3 pb-1 border-b-2 border-black">EXPERIENCE</h3>

                {/* Job 1 (New) - Condensed */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-black text-sm">Cloud Systems Operator (Freelance Project)</h4>
                      <p className="text-stone-700 font-semibold text-xs">SurtitleLive</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="font-semibold text-stone-900">2025 – Present</p>
                      <p className="text-stone-600">Remote</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-stone-800">
                    <li><strong>Cloud Operations:</strong> Deployed containerized workloads on GCP (Cloud Run) with private Cloud SQL connectivity, ensuring isolation and reliability.</li>
                    <li><strong>IAM & Security:</strong> Managed RBAC and secrets via Firebase Auth/GCP Secret Manager to minimize credential exposure.</li>
                    <li><strong>Secure Ops:</strong> Operated secure pipelines and API integrations with encryption and continuous monitoring to reduce risks.</li>
                  </ul>
                </div>

                {/* Job 2 (Formerly Job 1) */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-black text-sm">Traditional Chinese Customer & Community Support Specialist</h4>
                      <p className="text-stone-700 font-semibold text-xs">Digital Extremes</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="font-semibold text-stone-900">02/2022 – Present</p>
                      <p className="text-stone-600">London, ON</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-stone-800">
                    <li><strong>Incident Response:</strong> Investigated/resolved ~10-15 daily security tickets (unauthorized access, technical issues).</li>
                    <li><strong>Content Moderation:</strong> Enforced security policies against phishing and malicious content.</li>
                    <li><strong>Reporting:</strong> Reported 5+ system defects/vulnerabilities monthly to improve product security.</li>
                    <li><strong>Documentation:</strong> Authored bilingual security FAQs to improve user self-service.</li>
                  </ul>
                </div>

                {/* Job 3 (Formerly Job 2) */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-black text-sm">IT Support Specialist (On-Call)</h4>
                      <p className="text-stone-700 font-semibold text-xs">Lamps Theatre</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="font-semibold text-stone-900">08/2015 – 09/2021</p>
                      <p className="text-stone-600">Hong Kong</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-stone-800">
                    <li>Managed company domains, email systems, and VPN services.</li>
                    <li>Monitored server conditions and ensured stable ticketing operations.</li>
                  </ul>
                </div>

                {/* Job 4 (Formerly Job 3) */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-black text-sm">Assistant Project Manager</h4>
                      <p className="text-stone-700 font-semibold text-xs">The Boys' and Girls' Clubs Association of HK</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="font-semibold text-stone-900">09/2017 – 04/2021</p>
                      <p className="text-stone-600">Hong Kong</p>
                    </div>
                  </div>
                </div>

                {/* Job 5 (Formerly Job 4) */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-black text-sm">Student IT Assistant</h4>
                      <p className="text-stone-700 font-semibold text-xs">Hong Kong Baptist University</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="font-semibold text-stone-900">09/2014 – 06/2016</p>
                      <p className="text-stone-600">Hong Kong</p>
                    </div>
                  </div>
                </div>

              </section>

              {/* Education Section */}
              <section>
                <h3 className="text-xl font-bold text-blue-600 mb-3 pb-1 border-b-2 border-black">EDUCATION</h3>

                {/* Education 1 */}
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-black text-sm">B.Sc. in Information Technology</h4>
                      <p className="text-stone-700 font-semibold text-xs">Western Governors University</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="font-semibold text-stone-900">2025</p>
                      <p className="text-stone-600">USA</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-stone-800">
                    <li>WGU Tech is Everywhere Scholarship. Competency-based model with CompTIA/AWS certs.</li>
                  </ul>
                </div>

                {/* Education 2 */}
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-black text-sm">MFA in Drama and Theatre Education</h4>
                      <p className="text-stone-700 font-semibold text-xs">The Hong Kong Academy for Performing Arts</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="font-semibold text-stone-900">2021</p>
                      <p className="text-stone-600">Hong Kong</p>
                    </div>
                  </div>
                </div>

                {/* Education 3 */}
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-black text-sm">B.Soc.Sc (Hons) Sociology & B.Ed (Hons)</h4>
                      <p className="text-stone-700 font-semibold text-xs">Hong Kong Baptist University</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="font-semibold text-stone-900">01/2016</p>
                      <p className="text-stone-600">Hong Kong</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Summary, Certifications, Skills */}
            <div className="px-6 py-6 bg-stone-50 relative overflow-hidden">

              <div className="relative z-10">
                {/* Summary Section */}
                <section className="mb-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3 pb-1 border-b-2 border-black">SUMMARY</h3>
                  <p className="text-xs text-stone-800 leading-relaxed">
                    Entry-level SOC analyst with a multidisciplinary background used to fast-paced environments. Recently transitioned into IT/Cybersecurity through a competency-based B.Sc. in Information Technology. Holds key certifications including CompTIA CySA+, Security+, and AWS Certified Cloud Practitioner.
                  </p>
                </section>

                {/* Certification Section */}
                <section className="mb-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3 pb-1 border-b-2 border-black">CERTIFICATION</h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <h4 className="font-bold text-black mb-0.5">CompTIA</h4>
                      <p className="text-stone-800">CySA+, Security+, Network+, A+</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-black mb-0.5">CompTIA Stackable</h4>
                      <p className="text-stone-800">CIOS, CSIS, Security Analytics Pro</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-black mb-0.5">Microsoft</h4>
                      <p className="text-stone-800">Security, Compliance, and Identity Fund.; Azure AI Fund.; Data Fund.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-black mb-0.5">AWS</h4>
                      <p className="text-stone-800">Certified Cloud Practitioner</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-black mb-0.5">ISC2</h4>
                      <p className="text-stone-800">Cybersecurity Certification (CC)</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-black mb-0.5">Google</h4>
                      <p className="text-stone-800">Cybersecurity Cert., Data Analytics Cert.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-black mb-0.5">Other</h4>
                      <p className="text-stone-800">ITIL 4 Foundation, Linux Essentials</p>
                    </div>
                  </div>
                </section>

                {/* Skills Section */}
                <section>
                  <h3 className="text-xl font-bold text-blue-600 mb-3 pb-1 border-b-2 border-black">SKILLS</h3>

                  <div className="space-y-2 text-xs">
                    <div>
                      <h4 className="font-bold text-black mb-0.5">Cloud/IT</h4>
                      <p className="text-stone-800">AWS, Azure, M365, ITIL, JIRA, Linux, Virtualbox, VPN, ZenDesk</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-black mb-0.5">Security</h4>
                      <p className="text-stone-800">Cybersecurity, DNS, IDS, Log Analysis, SIEM, Splunk, TCP/IP</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-6 print:hidden">
        <div className="max-w-[210mm] mx-auto px-6 text-center">
          <p className="text-stone-600 text-sm">
            © {new Date().getFullYear()} Kin Kong Lam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CVPage;
