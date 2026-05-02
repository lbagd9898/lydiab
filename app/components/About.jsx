export default function About() {
  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-30">
      <div className="absolute inset-0 bg-gray-100"></div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-700 to-teal-400"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 40px))",
        }}
      ></div>
      <div
        className="relative z-10 flex justify-center"
        style={{ color: "#1E3A5F" }}
      >
        <div>
          <h1 className="text-6xl font-bold">lydia bagdon</h1>
          <h2 className="text-4xl mt-4 font-bold">
            fullstack web developer & STEM educator
          </h2>
          <h2 className="text-2xl mt-4">
            Engineering solutions and explaining concepts — from code to
            calculus.
          </h2>
        </div>
      </div>
    </section>
  );
}
