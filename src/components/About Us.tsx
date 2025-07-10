 const AboutUs = () => {    
  return (
    <section id="about" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">About Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            At <span className="font-semibold text-yellow-700">Wellbee</span>, we believe in the natural power of honey. 
            Our mission is to bring you the purest, most authentic honey sourced straight from nature’s lap.
          </p>
          <p className="text-md text-lg text-gray-600 mb-4">
            With a passion for wellness and sustainability, we ensure that every jar of honey delivers 
            the golden goodness your body and soul deserve.
          </p>
          <p className="text-md text-lg text-gray-600 mb-4">
            At Wellbee, every drop of honey tells a story of purity and care.
            We partner with local beekeepers who respect nature’s balance.
            Our commitment goes beyond taste — it’s about health and harmony.
            From hive to jar, we preserve the goodness nature intended.
          </p>
          <p className="text-md text-lg text-gray-600 mb-4">
            Wellbee stands for wellness, energy, and natural living.
            We ensure zero additives and no shortcuts in our process.
            Our honey is lab-tested and ethically harvested.
            Because your well-being deserves nothing but the best.
          </p>
        <button className="mt-8 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-200 transition">
          Learn More
        </button>
        </div>
         <img 
          src="/images/honey-2.png"
          alt="Honey Jar"
          className="rounded-lg shadow-md w-full max-w-sm mx-auto md:mx-0"
        />
      </div>
    </section>
  );
};

export default AboutUs;
