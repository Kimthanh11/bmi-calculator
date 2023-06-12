import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-white font-inter">
      {/* Start: Hero section */}
      <p className="text-red-500 text-8xl">Body Mass Index Calculator</p>
      <p>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.{" "}
      </p>
      <p>
        Enter your details below Metric Imperial Height Weight Your BMI is...
      </p>
      {/* <!-- add score --> */}
      Your BMI suggests you're .{/* <!-- add classification --> */}
      Your ideal weight is between .{/* <!-- add range --> */}
      {/* End: Hero section */}
      {/* Start: Your result */}
      <section className="relative">
        <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
          <div className="relative flex items-end justify-start overflow-hidden rounded-lg lg:w-1/2 md:w-1/2 sm:mr-10">
            <img src="/assets/images/image-man-eating.webp"></img>
          </div>
          <div className="flex flex-col items-end justify-center w-full bg-white lg:w-1/2 lg:mt-32 md:w-1/2 md:ml-auto">
            <p className="heading-l lg:mb-8 text-gunmental">
              What your BMI result means
            </p>
            <p className="body-m text-darkblue">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </div>
      </section>
      {/* End: Your result */}
      {/* Start: Tips */}
      <p>Healthy eating</p>
      Healthy eating promotes weight control, disease prevention, better
      digestion, immunity, mental clarity, and mood.
      <p>Regular exercise</p>
      <p>
        Exerciseimproves fitness, aids weight control, elevates mood, and
        reduces disease risk, fostering wellness and longevity.
      </p>
      <p>Adequate sleep</p>
      <p>
        Sleep enhances mental clarity, emotional stability, and physical
        wellness, promoting overall restoration and rejuvenation.
      </p>
      {/* Start: Tips */}
      {/* Start:Bmi-limitations */}
      <p>Limitations of BMI </p>
      <p>
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>
      <p>Gender</p>
      The development and body fat composition of girls and boys vary with age.
      Consequently, a child's age and gender are considered when evaluating
      their BMI.
      <p>Age</p>
      In aging individuals, increased body fat and muscle loss may cause BMI to
      underestimate body fat content.
      <p>Muscle</p>
      BMI may misclassify muscular individuals as overweight or obese, as it
      doesn't differentiate muscle from fat.
      <p>Pregnancy</p>
      Expectant mothers experience weight gain due to their growing baby.
      Maintaining a healthy pre-pregnancy BMI is advisable to minimise health
      risks for both mother and child.
      <p>Race</p>
      Certain health concerns may affect individuals of some Black and Asian
      origins at lower BMIs than others. To learn more, it is advised to discuss
      this with your GP or practice nurse.
      {/* End:Bmi-limitations */}
    </main>
  );
}
