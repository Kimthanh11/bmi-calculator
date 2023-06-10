import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Start: Hero section */}
      <p>Body Mass Index Calculator</p>
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
      <p>What your BMI result means</p>
      <p>
        A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
        Maintaining a healthy weight may lower your chances of experiencing
        health issues later on, such as obesity and type 2 diabetes. Aim for a
        nutritious diet with reduced fat and sugar content, incorporating ample
        fruits and vegetables. Additionally, strive for regular physical
        activity, ideally about 30 minutes daily for five days a week.
      </p>
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
