export default function Footer() {
  return (
    <footer className="relative z-10 pt-8 pb-12 px-6">
      <div className="max-w-[680px] mx-auto text-center">
        <div
          className="mx-auto mb-8"
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        />
        <p
          className="font-sans text-phantom-light"
          style={{
            fontSize: "0.8rem",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          © 2026 Phantom
        </p>
      </div>
    </footer>
  );
}
