export default function Services() {
  return (
    <section className="bg-white py-35 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#044A42] mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#B8E1DD] p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-[#3A9188] mb-2">Consulting</h3>
            <p className="text-[#062925]">Expert advice to grow your business.</p>
          </div>
          <div className="bg-[#B8E1DD] p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-[#3A9188] mb-2">Development</h3>
            <p className="text-[#062925]">Custom software solutions for your needs.</p>
          </div>
          <div className="bg-[#B8E1DD] p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-[#3A9188] mb-2">Support</h3>
            <p className="text-[#062925]">Reliable support for ongoing success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}