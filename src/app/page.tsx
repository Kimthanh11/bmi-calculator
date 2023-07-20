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
    <main className="relative flex flex-col items-center p-0 bg-white lg:items-start font-inter">
      <div className="lg:w-2/3 lg:ml-0">
        {/* Start: Hero section */}
        <div className="p-6 flex flex-col items-center lg:items-start lg:w-[978px] lg:h-[737px] h-[640px] rounded-b-3xl bg-gradient-linear lg:ml-6 lg:pt-[75px]">
          <img src="/assets/images/logo.svg" width={40} height={40}></img>
          <p className="text-center lg:text-left leading-extra-none py-6 text-[48px] font-inter text-gunmental md:w-1/2 font-[600] lg:mt-32">
            Body Mass Index Calculator
          </p>
          <p className="text-center body-m text-darkblue lg:w-1/2 lg:text-left">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className="md:top-[400px] p-4 flex flex-col rounded-2xl mx-6 gap-6 absolute bg-white top-[471px] shadow-hero md:ml-[39px] md:mr-[43px] md:p-8 md:gap-8 md:w-[686px] lg:top-[166px] lg:left-[736px] lg:m-0 lg:w-[564px] lg:h-auto">
          <p className="font-bold heading-m">Enter your details below</p>
          <div className="flex justify-start font-bold md:grid md:grid-cols-2 md:gap-6">
            <div
              className="flex gap-[18px] mr-20"
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
              className="flex gap-[18px]"
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

          {metric ? (
            <div className="z-10 md:grid md:grid-cols-2 md:gap-6">
              <div>
                <p className="mt-4 text-[14px] font-normal text-[#5E6E85] font-inter leading-normal">
                  Height
                </p>
                <div className="flex rounded-[12px] border border-[#D8E2E7] mt-2 py-5 px-6 w-full hover:border-[#345FF6] ">
                  <input
                    placeholder="0"
                    className="mr-6 focus:outline-none heading-m font-[600] w-full"
                    value={cm || ""}
                    onChange={(e) => {
                      setCm(parseFloat(e.target.value));
                    }}
                  ></input>
                  <p className="heading-m text-[#345FF6] font-[600]">cm</p>
                </div>
              </div>

              <div>
                <p className="mt-4 text-[14px] font-normal text-[#5E6E85] font-inter leading-normal">
                  Weight
                </p>
                <div className="flex rounded-[12px] border border-[#D8E2E7] mt-2 py-5 px-6 w-full hover:border-[#345FF6]">
                  <input
                    placeholder="0"
                    className="mr-6 focus:outline-none heading-m font-[600] w-full"
                    value={kg || ""}
                    onChange={(e) => {
                      setKg(parseFloat(e.target.value));
                    }}
                  ></input>
                  <p className="heading-m text-[#345FF6] font-[600]">kg</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="z-10">
              <div>
                <p className="mt-4 text-[14px] font-normal text-[#5E6E85] font-inter leading-normal">
                  Height
                </p>
                <div className="grid w-full grid-cols-2 gap-4 md:grid-rows-1">
                  <div className="flex rounded-[12px] border border-[#D8E2E7] mt-2 py-5 px-6 hover:border-[#345FF6] w-full">
                    <input
                      placeholder="0"
                      className="mr-6 focus:outline-none w-full heading-m font-[600]"
                      value={ft || ""}
                      onChange={(e) => {
                        setFt(parseFloat(e.target.value));
                      }}
                    ></input>
                    <p className="heading-m text-[#345FF6] font-[600]">ft</p>
                  </div>
                  <div className="flex rounded-[12px] border border-[#D8E2E7] mt-2 py-5 px-6 hover:border-[#345FF6] w-full">
                    <input
                      placeholder="0"
                      className="mr-6 focus:outline-none heading-m font-[600] w-full"
                      value={hin || ""}
                      onChange={(e) => {
                        setHin(parseFloat(e.target.value));
                      }}
                    ></input>
                    <p className="heading-m text-[#345FF6] font-[600]">in</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="mt-4 text-[14px] font-normal text-[#5E6E85] font-inter leading-normal">
                  Weight
                </p>
                <div className="grid w-full grid-cols-2 gap-4">
                  <div className="flex rounded-[12px] border border-[#D8E2E7] mt-2 py-5 px-6 hover:border-[#345FF6] w-full">
                    <input
                      placeholder="0"
                      className="mr-6 focus:outline-none heading-m font-[600] w-full"
                      value={st || ""}
                      onChange={(e) => {
                        setSt(parseFloat(e.target.value));
                      }}
                    ></input>
                    <p className="heading-m text-[#345FF6] font-[600]">st</p>
                  </div>
                  <div className="flex rounded-[12px] border border-[#D8E2E7] mt-2 py-5 px-6 hover:border-[#345FF6] w-full">
                    <input
                      placeholder="0"
                      className="mr-6 focus:outline-none heading-m font-[600] w-full"
                      value={lbs || ""}
                      onChange={(e) => {
                        setLbs(parseFloat(e.target.value));
                      }}
                    ></input>
                    <p className="heading-m text-[#345FF6] font-[600]">lbs</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {bmi ? (
            <div className="rounded-2xl md:rounded-r-[200px] md:rounded-l-2xl bg-gradient-to-r from-[#345FF6] to-[#587DFF] p-8 text-white md:grid md:grid-cols-2 md:gap-6 md:items-center md:p-8 lg:w-full lg:h-auto">
              <div>
                <p className="body-m font-[600]">Your BMI is...</p>
                <p className="font-Inter text-[48px] font-[600] mb-6 md:mt-2 md:mb-0">
                  {bmi}
                </p>
              </div>
              <div>
                <p className="pr-12 body-s">
                  Your BMI suggests you're a <span>{classification}</span>. Your
                  ideal weight is between
                  <span className="font-bold">{range}</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl md:rounded-r-[999px]  bg-gradient-to-r from-[#345FF6] to-[#587DFF] p-8 text-white lg:w-full lg:h-auto lg:p-8">
              <p className="heading-m font-[600]">Welcome!</p>
              <p className="mt-4 body-s">
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </div>
          )}
        </div>
      </div>
      {/* End: Hero section */}
      {/* Start: Your result */}
      <section className="relative mt-96 lg:mt-0">
        <div className="lg:p-0 lg:mt-16 md:grid md:grid-cols-12 md:gap-0 lg:place-items-end lg:mx-[140px]">
          <div className="mt-20 lg:mt-0 lg:col-span-6">
            <img
              src="/assets/images/image-man-eating.webp"
              width={564}
              height={533}
            ></img>
          </div>
          <div className="p-6 bg-white lg:p-0 lg:col-span-5 lg:col-start-8">
            <p className="mb-8 lg:heading-l font-semibold leading-extra-none md:text-[32px] font-inter text-gunmental text-[32px]">
              What your BMI result means
            </p>
            <p className="leading-normal body-m text-darkblue lg:mb-16">
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
      <div className="lg:grid lg:grid-cols-3 mb-[72px] lg:gap-10 lg:m-0 lg:mt-24 ml-5 mr-7 md:ml-10 md:mr-11 lg:mx-[140px]">
        <div className="mb-10 lg:mb-24 md:flex md:flex-row md:gap-10 lg:flex-col md:items-center lg:items-start">
          <img src="/assets/images/icon-eating.svg" className="w-16 h-16"></img>
          <div>
            <p className="mt-8 heading-m lg:mt-11">Healthy eating</p>
            <p className="mt-6 body-m">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="mb-10 lg:mb-24 md:flex md:flex-row md:gap-10 md:items-center lg:flex-col lg:items-start">
          <img
            src="/assets/images/icon-exercise.svg"
            className="w-16 h-16"
          ></img>
          <div>
            <p className="mt-8 heading-m lg:mt-11">Regular exercise</p>
            <p className="mt-6 body-m">
              Exerciseimproves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>

        <div className="lg:mb-24 mb-14 md:flex md:flex-row md:gap-10 md:items-center lg:flex-col lg:items-start">
          <img src="/assets/images/icon-sleep.svg" className="w-16 h-16"></img>
          <div>
            <p className="mt-8 heading-m lg:mt-11">Adequate sleep</p>
            <p className="mt-6 body-m">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
      {/* Start: Tips */}
      {/* Start:Bmi-limitations */}
      <div className="mt-32 ml-5 mr-7 lg:mx-[140px] mb-24">
        <div className="md:grid md:grid-cols-4 md:gap-x-4 md:gap-y-6 md:justify-center">
          <div className="md:col-span-4 lg:col-span-6">
            <p className="mb-8 text-[32px] font-semibold text-center font-inter leading-extra-none">
              Limitations of BMI
            </p>
            <div>
              <p className="text-[16px] mb-14 font-inter leading-normal text-center text-darkblue">
                Although BMI is often a practical indicator of healthy weight,
                it is not suited for every person. Specific groups should
                carefully consider their BMI outcomes, and in certain cases, the
                measurement may not be beneficial to use.
              </p>
            </div>
          </div>
          <div className="w-full p-6 mb-4 bg-white rounded-2xl shadow-box md:col-span-2 lg:col-span-4 lg:col-start-8 lg:w-[365px] lg:h-auto">
            <div className="flex flex-row ">
              <img
                src="/assets/images/icon-gender.svg"
                className="w-8 h-8"
              ></img>
              <div className="text-[16px] mt-1 ml-4 font-semibold mb-4 font-inter leading-normal">
                Gender
              </div>
            </div>
            <div className="text-[16px] font-inter leading-normal font-normal">
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </div>
          </div>
          <div className="p-6 mb-4 bg-white rounded-2xl shadow-box md:col-span-2 lg:col-span-4 lg:col-start-5 lg:w-[365px] lg:h-auto">
            <div className="flex flex-row">
              <img src="/assets/images/icon-age.svg" className="w-8 h-8"></img>
              <p className="text-[16px] mt-1 ml-4 font-semibold mb-4 font-inter leading-normal">
                Age
              </p>
            </div>
            <div className="text-[16px] font-inter leading-normal font-normal">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </div>
          </div>
          <div className="p-6 mb-4 bg-white rounded-2xl shadow-box md:col-span-2 lg:col-span-4 lg:col-start-9 lg:w-[365px] lg:h-auto">
            <div className="flex flex-row ">
              <img
                src="/assets/images/icon-muscle.svg"
                className="w-8 h-8"
              ></img>
              <p className="text-[16px] mt-1 ml-4 font-semibold mb-4 font-inter leading-normal">
                Muscle
              </p>
            </div>
            <div className="text-[16px] font-inter leading-normal font-normal">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </div>
          </div>
          <div className="p-6 mb-4 bg-white rounded-2xl shadow-box md:col-span-2 lg:col-span-4 lg:col-start-3 lg:w-[365px] lg:h-auto">
            <div className="flex flex-row ">
              <img
                src="/assets/images/icon-pregnancy.svg"
                className="w-8 h-8"
              ></img>
              <p className="text-[16px] mt-1 ml-4 font-semibold mb-4 font-inter leading-normal">
                Pregnancy
              </p>
            </div>
            <div className="text-[16px] font-inter leading-normal font-normal">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </div>
          </div>
          <div className="p-6 mb-4 bg-white rounded-2xl shadow-box md:col-span-2 md:col-start-2 lg:col-span-4 lg:col-start-7 lg:w-[365px] lg:h-auto">
            <div className="flex flex-row ">
              <img src="/assets/images/icon-race.svg" className="w-8 h-8"></img>
              <p className="text-[16px] mt-1 ml-4 font-semibold mb-4 font-inter leading-normal">
                Race
              </p>
            </div>
            <div className="text-[16px] font-inter leading-normal font-normal">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </div>
          </div>
        </div>
      </div>
      {/* End:Bmi-limitations */}
    </main>
  );
}
