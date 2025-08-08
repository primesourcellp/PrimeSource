export default function About() {
  return (
    <section className="bg-white py-35 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#044A42] mb-4">About PrimeSource</h2>
        <p className="text-[#062925] text-lg mb-6">
          PrimeSource is dedicated to providing top-notch solutions for your business needs. 
          Our team of experts leverages the latest technologies to deliver innovative and reliable services.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="bg-[#B8E1DD] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">Our Mission</h3>
            <p className="text-[#044A42]">
              To empower businesses with cutting-edge technology and exceptional service.
            </p>
          </div>
          <div className="bg-[#B8E1DD] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">Our Values</h3>
            <p className="text-[#044A42]">
              Integrity, innovation, and customer satisfaction are at the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}