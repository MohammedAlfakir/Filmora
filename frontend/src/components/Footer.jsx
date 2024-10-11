const Footer = () => {
  return (
    <footer className="py-6 text md:px-8 md:py-0 bg-black text-white border-t border-[#000f14]">
      <div className="flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://www.mohammedalfakir.site/"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            Mohammed Alfakir
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/mohammedalfakir"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
export default Footer;
