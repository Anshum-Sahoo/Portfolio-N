export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface">
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center py-12 px-8 md:px-16 gap-6 w-full max-w-screen-2xl mx-auto">
        <div className="flex gap-12">
          <a
            className="group relative font-body font-bold uppercase tracking-editorial text-[10px] text-secondary hover:text-primary transition-colors duration-300 py-1"
            href="mailto:anshumsahoo07@gmail.com"
          >
            EMAIL
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a
            className="group relative font-body font-bold uppercase tracking-editorial text-[10px] text-secondary hover:text-primary transition-colors duration-300 py-1"
            href="https://www.linkedin.com/in/anshum-sahoo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a
            className="group relative font-body font-bold uppercase tracking-editorial text-[10px] text-secondary hover:text-primary transition-colors duration-300 py-1"
            href="https://github.com/Anshum-Sahoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>
      </div>
    </footer>
  );
}
