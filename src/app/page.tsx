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
        <div className="py-24 lg:flex md:grid md:grid-cols-2 lg:px-5 lg:gap-32 md:gap-0">
          <div className="md:max-w-xs lg:w-1/2">
            <img src="/assets/images/image-man-eating.webp"></img>
          </div>
          <div className="bg-white lg:flex lg:flex-col lg:justify-center lg:w-1/2 lg:mt-32">
            <p className="mb-8 lg:text-[48px] font-semibold leading-extra-none md:text-[32px] font-inter text-gunmental">
              What your BMI result means
            </p>
            <p className="lg:w-3/4 body-m text-darkblue">
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
      <div className="lg:grid lg:grid-cols-3 lg:gap-10 lg:mx-28">
        <div className="lg:mb-24">
          <img src="/assets/images/icon-eating.svg"></img>
          <p className="heading-m lg:mt-11">Healthy eating</p>
          <p className=" lg:body-m lg:mt-6">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
        <div className="lg:mb-24">
          <img src="/assets/images/icon-exercise.svg"></img>
          <p className="heading-m lg:mt-11">Regular exercise</p>
          <p className=" lg:body-m lg:mt-6">
            Exerciseimproves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>

        <div className="lg:mb-24">
          <img src="/assets/images/icon-sleep.svg"></img>
          <p className="heading-m lg:mt-11">Adequate sleep</p>
          <p className=" lg:body-m lg:mt-6">
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
      {/* Start: Tips */}
      {/* Start:Bmi-limitations */}
      <div className="xs:mt-32 xs:ml-5 xs:mr-7">
        <p className="xs:mb-8 xs:text-[32px] xs:font-semibold xs:font-inter xs:leading-extra-none">
          Limitations of BMI
        </p>
        <div>
          <p className="xs:text-[16px] xs:mb-14 xs:font-inter xs:leading-normal">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="xs:p-6 ">
          <div className="xs:flex xs:flex-row ">
            <img
              src="/assets/images/icon-gender.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <p className="xs:text-[16px] xs:font-semibold xs:mb-14 xs:font-inter xs:leading-normal">
              Gender
            </p>
          </div>
          <div>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </div>
        </div>
        <div className="xs:p-6 ">
          <div className="xs:flex xs:flex-row ">
            <img
              src="/assets/images/icon-age.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <p className="xs:text-[16px] xs:font-semibold xs:mb-14 xs:font-inter xs:leading-normal">
              Age
            </p>
          </div>
          In aging individuals, increased body fat and muscle loss may cause BMI
          to underestimate body fat content.
        </div>
        <div className="xs:p-6 ">
          <div className="xs:flex xs:flex-row ">
            <img
              src="/assets/images/icon-muscle.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <p className="xs:text-[16px] xs:font-semibold xs:mb-14 xs:font-inter xs:leading-normal">
              Muscle
            </p>
          </div>
          BMI may misclassify muscular individuals as overweight or obese, as it
          doesn't differentiate muscle from fat.
        </div>
        <div className="xs:p-6 ">
          <div className="xs:flex xs:flex-row ">
            <img
              src="/assets/images/icon-pregnancy.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <p className="xs:text-[16px] xs:font-semibold xs:mb-14 xs:font-inter xs:leading-normal">
              Pregnancy
            </p>
          </div>
          Expectant mothers experience weight gain due to their growing baby.
          Maintaining a healthy pre-pregnancy BMI is advisable to minimise
          health risks for both mother and child.
        </div>
        <div className="xs:p-6 ">
          <div className="xs:flex xs:flex-row ">
            <img
              src="/assets/images/icon-race.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <p className="xs:text-[16px] xs:font-semibold xs:mb-14 xs:font-inter xs:leading-normal">
              Race
            </p>
          </div>
          Certain health concerns may affect individuals of some Black and Asian
          origins at lower BMIs than others. To learn more, it is advised to
          discuss this with your GP or practice nurse.
        </div>
      </div>
      {/* End:Bmi-limitations */}
    </main>
  );
}
