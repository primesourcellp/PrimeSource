export default function Contact() {
  return (
    <section className="bg-[#F6F6F6] py-35 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#044A42] mb-4 text-center">Contact Us</h2>
        <form className="bg-white p-6 rounded shadow-md">
          <input className="w-full mb-4 p-2 border rounded border-[#3A9188]" type="text" placeholder="Your Name" />
          <input className="w-full mb-4 p-2 border rounded border-[#3A9188]" type="email" placeholder="Your Email" />
          <textarea className="w-full mb-4 p-2 border rounded border-[#3A9188]" rows="4" placeholder="Your Message"></textarea>
          <button className="bg-[#3A9188] text-white px-4 py-2 rounded hover:bg-[#044A42] transition w-full">
            Send Message
          </button>
        </form>
        <form className="bg-white p-6 rounded shadow-md">
          <input className="w-full mb-4 p-2 border rounded border-[#3A9188]" type="text" placeholder="Your Name" />
          <input className="w-full mb-4 p-2 border rounded border-[#3A9188]" type="email" placeholder="Your Email" />
          <textarea className="w-full mb-4 p-2 border rounded border-[#3A9188]" rows="4" placeholder="Your Message"></textarea>
          <button className="bg-[#3A9188] text-white px-4 py-2 rounded hover:bg-[#044A42] transition w-full">
            Send Message
          </button>
        </form>
        <form className="bg-white p-6 rounded shadow-md">
          <input className="w-full mb-4 p-2 border rounded border-[#3A9188]" type="text" placeholder="Your Name" />
          <input className="w-full mb-4 p-2 border rounded border-[#3A9188]" type="email" placeholder="Your Email" />
          <textarea className="w-full mb-4 p-2 border rounded border-[#3A9188]" rows="4" placeholder="Your Message"></textarea>
          <button className="bg-[#3A9188] text-white px-4 py-2 rounded hover:bg-[#044A42] transition w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}