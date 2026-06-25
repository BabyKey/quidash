import Link from 'next/link'

export default function Home() {
  return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs font-medium px-4 py-2 rounded-full mb-8">
                    🚀 The fintech OS for Africa and beyond
                          </div>
                                <h1 className="text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-6 max-w-2xl">
                                        Launch your fintech.<br />
                                                <span className="text-purple-600">Your way.</span>
                                                      </h1>
                                                            <p className="text-lg text-gray-500 max-w-md mb-10 leading-relaxed">
                                                                    QuiDash is a modular white-label platform that lets anyone build, brand, and launch their own fintech business — no developers needed.
                                                                          </p>
                                                                                <div className="flex gap-3 flex-wrap justify-center">
                                                                                        <Link
                                                                                                  href="/signup"
                                                                                                            className="bg-[#1A1035] text-white px-8 py-3.5 rounded-xl text-sm font-medium hover:opacity-90"
                                                                                                                    >
                                                                                                                              Get started free
                                                                                                                                      </Link>
                                                                                                                                              <Link
                                                                                                                                                        href="/login"
                                                                                                                                                                  className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-gray-50"
                                                                                                                                                                          >
                                                                                                                                                                                    Sign in
                                                                                                                                                                                            </Link>
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                        )
                                                                                                                                                                                                        }