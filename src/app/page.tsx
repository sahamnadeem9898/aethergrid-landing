import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF610_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
          {/* Logo */}
          <div className="flex justify-center mb-16">
            <div className="relative w-48 h-48 animate-float">
              <Image
                src="/images/logo.png"
                alt="AetherGrid Logo"
                width={192}
                height={192}
                priority
                className="drop-shadow-[0_0_50px_rgba(0,217,255,0.4)]"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-6 py-2 text-sm font-medium text-cyan-300 ring-1 ring-inset ring-cyan-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Next-Generation Infrastructure
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Power Your Digital
              </span>
              <span className="block mt-2">Transformation</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed">
              AetherGrid delivers enterprise-grade cloud infrastructure with unmatched performance,
              security, and scalability. Built for teams that demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              </button>

              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300">
                View Documentation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">99.99%</div>
                <div className="text-sm text-gray-400 mt-1">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">&lt;10ms</div>
                <div className="text-sm text-gray-400 mt-1">Latency</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-400 mt-1">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                From Complexity to Clarity
              </span>
            </h2>
            <p className="text-xl text-gray-400">The infrastructure challenge, solved.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">The Problem</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Complex infrastructure setup taking weeks or months</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Unpredictable costs and resource allocation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Security vulnerabilities and compliance headaches</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Poor performance and frequent downtime</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">The Solution</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Deploy production infrastructure in minutes, not months</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Transparent, predictable pricing with usage analytics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Enterprise security and compliance built-in</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>99.99% uptime with global edge network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Built for Performance
              </span>
            </h2>
            <p className="text-xl text-gray-400">Everything you need to scale with confidence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 hover:ring-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
                <p className="text-gray-400 leading-relaxed">
                  Global CDN with edge computing capabilities. Deliver content to users with sub-10ms latency worldwide.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 hover:ring-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-gray-400 leading-relaxed">
                  SOC 2 Type II certified with automatic DDoS protection, WAF, and end-to-end encryption by default.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 hover:ring-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Auto-Scaling</h3>
                <p className="text-gray-400 leading-relaxed">
                  Intelligent auto-scaling handles traffic spikes automatically. Pay only for what you use.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 hover:ring-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Compliance Ready</h3>
                <p className="text-gray-400 leading-relaxed">
                  GDPR, HIPAA, and PCI-DSS compliant. Built-in audit logs and compliance reporting.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 hover:ring-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive dashboards with real-time metrics, custom alerts, and advanced monitoring.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 hover:ring-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Role-based access control, team workspaces, and integrated deployment workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-400">Choose the plan that scales with your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl blur-lg" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 hover:ring-cyan-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-400 mb-6">Perfect for small projects and prototypes</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>10 GB storage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>100 GB bandwidth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>5 team members</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Email support</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>99.9% uptime SLA</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Pro Plan - Featured */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 ring-2 ring-cyan-500/30">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 mt-4">Professional</h3>
                <p className="text-gray-400 mb-6">For growing teams and businesses</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">$99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>100 GB storage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>1 TB bandwidth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Priority support (24/7)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>99.99% uptime SLA</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl blur-lg" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 hover:ring-cyan-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-400 mb-6">For large-scale operations</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">Custom</span>
                </div>
                <ul className="space-y-4 mb-8 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Unlimited storage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Unlimited bandwidth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Dedicated support team</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Custom SLA</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>White-label options</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Dedicated infrastructure</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-500">
              <span className="text-xl font-semibold">SOC 2</span>
              <span className="text-xl font-semibold">GDPR</span>
              <span className="text-xl font-semibold">HIPAA</span>
              <span className="text-xl font-semibold">PCI-DSS</span>
              <span className="text-xl font-semibold">ISO 27001</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 ring-1 ring-white/10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Transform Your Infrastructure?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of teams already building on AetherGrid. Start your free trial today—no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="AetherGrid" width={40} height={40} />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AetherGrid
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2026 AetherGrid. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
