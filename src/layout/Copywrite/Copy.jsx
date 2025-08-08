export default function Copy() {
  return (
    <div className="text-center text-xs text-[white] py-6 bg-[#044A42]">
      &copy; {new Date().getFullYear()} PrimeSource. All rights reserved. | Developed by:{" "}
      <span className="font-semibold">Primesource Consulting LLP</span>
    </div>
  );
}
