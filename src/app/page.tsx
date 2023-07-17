"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [metric, setMetric] = useState<boolean>(true);
  const [cm, setCm] = useState<number>(0);
  const [kg, setKg] = useState<number>(0);
  const [ft, setFt] = useState<number>(0);
  const [hin, setHin] = useState<number>(0);
  const [st, setSt] = useState<number>(0);
  const [lbs, setLbs] = useState<number>(0);
  const [bmi, setBMI] = useState<number>(0);
  const [classification, setClass] = useState<string>("");
  const [range, setRange] = useState<string>("");

  useEffect(() => {
    const cmToM: number = cm / 100; // Convert cm to meters
    const height: number = metric ? cmToM : ((ft * 12 + hin) * 2.54) / 100; // Calculate height in meters

    const weight: number = metric ? kg : (st * 14 + lbs) * 0.453592; // Calculate weight in kilograms

    if (height && weight) {
      const bmi: number = +(weight / (height * height)).toFixed(1); // Calculate BMI
      setBMI(bmi); // Set the BMI state as a number

      // set Classification
      if (bmi < 18.5) {
        setClass(" underweight");
      } else if (bmi < 24.9) {
        setClass(" healthy weight");
      } else if (bmi < 29.9) {
        setClass(" overweight");
      } else {
        setClass(" obese");
      }
      // Set range
      const minW: number = parseFloat((18.5 * height * height).toFixed(1));
      const maxW: number = parseFloat((24.9 * height * height).toFixed(1));
      const minWeightInLbs: number = minW * 2.20462;
      const minStones: number = Math.floor(minWeightInLbs * 0.0714286);
      const minLbs: number = Math.round(minWeightInLbs % 14);
      const maxWeightInLbs: number = maxW * 2.20462;
      const maxStones: number = Math.floor(maxWeightInLbs * 0.0714286);
      const maxLbs: number = Math.round(maxWeightInLbs % 14);

      if (metric) {
        setRange(` ${minW} kgs - ${maxW} kgs.`);
      } else {
        setRange(
          ` ${minStones} st ${minLbs} lbs - ${maxStones} st ${maxLbs} lbs.`
        );
      }
    }
  }, [cm, kg, ft, hin, st, lbs, metric]);

  return (
    <main className="relative flex flex-col items-center justify-between bg-white xs: xs:p-0 lg:p-24 font-inter">
      <div>
        {/* Start: Hero section */}
        <div className="xs:p-6 xs:flex xs:flex-col xs:items-center xs:h-[640px] xs:rounded-b-3xl xs:bg-gradient-linear">
          <img src="/assets/images/logo.svg" width={40} height={40}></img>
          <p className=" font-normal text-center leading-extra-none xs:py-6 xs:text-[48px] font-inter text-gunmental">
            Body Mass Index Calculator
          </p>
          <p className="xs:body-m xs:text-center">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className="xs:p-4 xs:flex xs:flex-col xs:rounded-2xl xs:mx-6 xs:gap-6 xs:absolute xs:bg-white xs:top-[471px] xs:shadow-hero">
          <p className="heading-m font-bold">Enter your details below</p>
          <div className="flex justify-start xs:font-bold">
            <div
              className="flex xs:gap-[18px] xs:mr-20"
              onClick={() => {
                setMetric(true);
              }}
            >
              {metric ? (
                <img
                  src="/assets/images/radio-button-fill.svg"
                  width={31}
                  height={31}
                ></img>
              ) : (
                <img
                  src="/assets/images/radio-button.svg"
                  width={31}
                  height={31}
                ></img>
              )}
              <label htmlFor="metric">Metric</label>
            </div>

            <div
              className="flex xs:gap-[18px]"
              onClick={() => {
                setMetric(false);
              }}
            >
              {!metric ? (
                <img
                  src="/assets/images/radio-button-fill.svg"
                  width={31}
                  height={31}
                ></img>
              ) : (
                <img
                  src="/assets/images/radio-button.svg"
                  width={31}
                  height={31}
                ></img>
              )}
              <label htmlFor="imperial">Imperial</label>
            </div>
          </div>

          <div className="z-10">
            <p className="xs:mt-4 xs:text-[14px] xs:font-normal xs:text-[#5E6E85] xs:font-inter xs:leading-normal">
              Height
            </p>
            {metric ? (
              <div className="flex xs:rounded-[12px] border border-[#D8E2E7] xs:mt-2 xs:py-5 xs:px-6 w-full hover:border-[#345FF6] ">
                <input
                  placeholder="0"
                  className="xs:mr-6 focus:outline-none heading-m font-[600] w-full"
                  value={cm || ""}
                  onChange={(e) => {
                    setCm(parseFloat(e.target.value));
                  }}
                ></input>
                <p className="heading-m text-[#345FF6] font-[600]">cm</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex xs:rounded-[12px] border border-[#D8E2E7] xs:mt-2 xs:py-5 xs:px-6 hover:border-[#345FF6] w-full">
                  <input
                    placeholder="0"
                    className="xs:mr-6 focus:outline-none w-full heading-m font-[600]"
                    value={ft || ""}
                    onChange={(e) => {
                      setFt(parseFloat(e.target.value));
                    }}
                  ></input>
                  <p className="heading-m text-[#345FF6] font-[600]">ft</p>
                </div>
                <div className="flex xs:rounded-[12px] border border-[#D8E2E7] xs:mt-2 xs:py-5 xs:px-6 hover:border-[#345FF6] w-full">
                  <input
                    placeholder="0"
                    className="xs:mr-6 focus:outline-none heading-m font-[600] w-full"
                    value={hin || ""}
                    onChange={(e) => {
                      setHin(parseFloat(e.target.value));
                    }}
                  ></input>
                  <p className="heading-m text-[#345FF6] font-[600]">in</p>
                </div>
              </div>
            )}

            <p className="xs:mt-4 xs:text-[14px] xs:font-normal xs:text-[#5E6E85] xs:font-inter xs:leading-normal">
              Weight
            </p>
            {metric ? (
              <div className="flex xs:rounded-[12px] border border-[#D8E2E7] xs:mt-2 xs:py-5 xs:px-6 w-full hover:border-[#345FF6]">
                <input
                  placeholder="0"
                  className="xs:mr-6 focus:outline-none heading-m font-[600] w-full"
                  value={kg || ""}
                  onChange={(e) => {
                    setKg(parseFloat(e.target.value));
                  }}
                ></input>
                <p className="heading-m text-[#345FF6] font-[600]">kg</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex xs:rounded-[12px] border border-[#D8E2E7] xs:mt-2 xs:py-5 xs:px-6 hover:border-[#345FF6] w-full">
                  <input
                    placeholder="0"
                    className="xs:mr-6 focus:outline-none heading-m font-[600] w-full"
                    value={st || ""}
                    onChange={(e) => {
                      setSt(parseFloat(e.target.value));
                    }}
                  ></input>
                  <p className="heading-m text-[#345FF6] font-[600]">st</p>
                </div>
                <div className="flex xs:rounded-[12px] border border-[#D8E2E7] xs:mt-2 xs:py-5 xs:px-6 hover:border-[#345FF6] w-full">
                  <input
                    placeholder="0"
                    className="xs:mr-6 focus:outline-none heading-m font-[600] w-full"
                    value={lbs || ""}
                    onChange={(e) => {
                      setLbs(parseFloat(e.target.value));
                    }}
                  ></input>
                  <p className="heading-m text-[#345FF6] font-[600]">lbs</p>
                </div>
              </div>
            )}
          </div>

          {bmi ? (
            <div className="rounded-2xl bg-gradient-to-r from-[#345FF6] to-[#587DFF] p-8 text-white">
              <p className="body-m font-[600]">Your BMI is...</p>
              <p className="font-Inter text-[48px] font-[600] mb-6">{bmi}</p>
              <p className="body-s pr-12">
                Your BMI suggests you're a <span>{classification}</span>. Your
                ideal weight is between
                <span className="font-bold">{range}</span>
              </p>
            </div>
          ) : (
            <div className="rounded-2xl bg-gradient-to-r from-[#345FF6] to-[#587DFF] p-8 text-white">
              <p className="heading-m font-[600]">Welcome!</p>
              <p className="body-s mt-4">
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </div>
          )}
        </div>
      </div>
      {/* End: Hero section */}
      {/* Start: Your result */}
      <section className="relative xs:mt-96">
        <div className="py-24 lg:flex md:grid md:grid-cols-2 lg:px-5 lg:gap-32 md:gap-0">
          <div className="md:max-w-xs lg:w-1/2 xs:mt-20">
            <img src="/assets/images/image-man-eating.webp"></img>
          </div>
          <div className="bg-white lg:flex lg:flex-col lg:justify-center lg:w-1/2 lg:mt-32 xs:p-6">
            <p className="mb-8 lg:text-[48px] font-semibold leading-extra-none md:text-[32px] font-inter text-gunmental xs:text-[32px]">
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
      <div className="lg:grid lg:grid-cols-3 xs:mb-[72px] lg:gap-10 lg:mx-28 xs:ml-5 xs:mr-7">
        <div className="lg:mb-24 xs:mb-10">
          <img
            src="/assets/images/icon-eating.svg"
            className="xs:h-16 xs:w-16"
          ></img>
          <p className="heading-m lg:mt-11 xs:mt-8">Healthy eating</p>
          <p className="mt-6 body-m">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
        <div className="lg:mb-24 xs:mb-10">
          <img
            src="/assets/images/icon-exercise.svg"
            className="xs:h-16 xs:w-16"
          ></img>
          <p className="heading-m lg:mt-11 xs:mt-8">Regular exercise</p>
          <p className="mt-6 body-m">
            Exerciseimproves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>

        <div className="lg:mb-24 xs:mb-14">
          <img
            src="/assets/images/icon-sleep.svg"
            className="xs:h-16 xs:w-16"
          ></img>
          <p className="heading-m lg:mt-11 xs:mt-8">Adequate sleep</p>
          <p className="mt-6 body-m">
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
      {/* Start: Tips */}
      {/* Start:Bmi-limitations */}
      <div className="xs:mt-32 xs:ml-5 xs:mr-7">
        <p className="xs:mb-8 xs:text-[32px] xs:font-semibold text-center xs:font-inter xs:leading-extra-none">
          Limitations of BMI
        </p>
        <div>
          <p className="xs:text-[16px] xs:mb-14 xs:font-inter xs:leading-normal text-center">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="bg-white xs:mb-4 xs:p-6 rounded-2xl shadow-box xs:w-full">
          <div className="xs:flex xs:flex-row">
            <img
              src="/assets/images/icon-gender.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <div className="xs:text-[16px] xs:mt-1 xs:ml-4 xs:font-semibold xs:mb-4 xs:font-inter xs:leading-normal">
              Gender
            </div>
          </div>
          <div className="xs:text-[16px] xs:font-inter xs:leading-normal xs:font-normal">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </div>
        </div>
        <div className="bg-white xs:p-6 rounded-2xl shadow-box xs:mb-4">
          <div className="xs:flex xs:flex-row ">
            <img
              src="/assets/images/icon-age.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <p className="xs:text-[16px] xs:mt-1 xs:ml-4 xs:font-semibold xs:mb-4 xs:font-inter xs:leading-normal">
              Age
            </p>
          </div>
          <div className="xs:text-[16px] xs:font-inter xs:leading-normal xs:font-normal">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </div>
        </div>
        <div className="bg-white xs:p-6 rounded-2xl shadow-box xs:mb-4">
          <div className="xs:flex xs:flex-row ">
            <img
              src="/assets/images/icon-muscle.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <p className="xs:text-[16px] xs:mt-1 xs:ml-4 xs:font-semibold xs:mb-4 xs:font-inter xs:leading-normal">
              Muscle
            </p>
          </div>
          <div className="xs:text-[16px] xs:font-inter xs:leading-normal xs:font-normal">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </div>
        </div>
        <div className="bg-white xs:p-6 rounded-2xl shadow-box xs:mb-4">
          <div className="xs:flex xs:flex-row ">
            <img
              src="/assets/images/icon-pregnancy.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <p className="xs:text-[16px] xs:mt-1 xs:ml-4 xs:font-semibold xs:mb-4 xs:font-inter xs:leading-normal">
              Pregnancy
            </p>
          </div>
          <div className="xs:text-[16px] xs:font-inter xs:leading-normal xs:font-normal">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </div>
        </div>
        <div className="bg-white xs:p-6 rounded-2xl shadow-box xs:mb-24">
          <div className="xs:flex xs:flex-row ">
            <img
              src="/assets/images/icon-race.svg"
              className="xs:w-8 xs:h-8"
            ></img>
            <p className="xs:text-[16px] xs:mt-1 xs:ml-4 xs:font-semibold xs:mb-4 xs:font-inter xs:leading-normal">
              Race
            </p>
          </div>
          <div className="xs:text-[16px] xs:font-inter xs:leading-normal xs:font-normal">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </div>
        </div>
      </div>
      {/* End:Bmi-limitations */}
    </main>
  );
}
