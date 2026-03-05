import Link from "next/link";

export const metadata = {
  title: "404 — Proctora",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white font-sans">
      {/* Animated purple blobs */}
      <div className="animated-bg" aria-hidden="true">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
        <div className="bubble bubble-4" />
        <div className="bubble bubble-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero */}
        <main className="flex flex-1 flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
          <p
            className="text-8xl font-bold"
            style={{ color: "#9333ea", letterSpacing: "-0.02em" }}
          >
            404
          </p>
          <h1
            className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Page Not Found
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            This page doesn&apos;t exist. Head back to{" "}
            <Link
              href="/"
              className="font-medium transition-colors hover:text-zinc-900"
              style={{ color: "#9333ea" }}
            >
              Proctora
            </Link>
            .
          </p>
        </main>

        {/* Footer */}
        <footer className="relative z-10 flex flex-col items-center gap-3 py-8 text-sm text-zinc-500">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/omegaopinmthechat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-zinc-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.625-5.475 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/amarsankarmaitra/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-zinc-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.988V9h3.12v1.561h.044c.433-.823 1.492-1.69 3.072-1.69 3.286 0 3.893 2.163 3.893 4.977v6.604zM5.337 7.433a1.813 1.813 0 1 1 0-3.626 1.813 1.813 0 0 1 0 3.626zm1.561 13.019H3.775V9h3.123v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
