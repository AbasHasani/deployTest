"use client";
import toPersianNumber from "@/utils/toPersianNumber";
import { Checkbox, Slider } from "@mantine/core";
import { FC, useState } from "react";

interface Props {
  prepayment: number;
  min: number;
  max: number;
  takeLoan: ({
    amount,
    time,
  }: {
    time: number;
    amount: number;
  }) => Promise<void>;
}

const MaintineForm: FC<Props> = ({ prepayment, min, max, takeLoan }) => {
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(6);
  const loans = [
    {
      loan: 12,
      monthly: 520,
      final: 6250,
      percentage: 25,
      prepayment: 20,
    },
    {
      loan: 9,
      monthly: 638,
      final: 5750,
      percentage: 15,
      prepayment: 25,
    },
    {
      loan: 6,
      monthly: 900,
      final: 5400,
      percentage: 8,
      prepayment: 30,
    },
  ];
  return (
    <div className="col-span-3 relative p-10">
      <p className="text-center font-bold text-xl">
        درخواست وام برای خرید اقساطی{" "}
      </p>
      <div className="w-full">
        <div className="flex justify-between">
          <p>مبلغ درخواستی</p>
          <p>{amount},000,000</p>
        </div>
        <div className="mt-5">
          <Slider
            marks={[
              { value: 5 },
              { value: 6 },
              { value: 7 },
              { value: 8 },
              { value: 9 },
              { value: 10 },
              { value: 12 },
              { value: 15 },
              { value: 20 },
            ]}
            min={min}
            max={max}
            color="blue"
            size={2}
            className="outline-none"
            value={amount}
            onChange={setAmount}
            styles={() => ({
              thumb: {
                height: "100%",
                width: 25,
                background: "#22c55e",
                borderWidth: 0,
                boxShadow: "none",
              },
              markFilled: {
                dispaly: "none",
              },
              mark: {
                display: "none",
              },
              bar: {
                background: "bg-cyan-500",
                height: "100%",
              },
              track: {
                height: "25px",
              },
              markLabel: {
                marginTop: "20px",
              },
            })}
          />
        </div>
      </div>

      <table className="mt-10 w-full">
        <thead>
          <tr>
            <th className="pl-24">وام</th>
            <th>ماهانه</th>
            <th>قیمت برگشتی</th>
            <th>پیش پرداخت</th>
          </tr>
        </thead>
        <tbody>
          {loans.map(({ loan, final, monthly, prepayment }, i) => (
            <tr
              className="border-b"
              key={final + loan + monthly + prepayment + i}
            >
              <td className="flex p-3">
                <Checkbox
                  checked={time === loan ? true : false}
                  onChange={() => setTime(loan)}
                  className="ml-1"
                />
                <p className="flex-1 flex">
                  بازبرداخت {toPersianNumber(loan)} ماهه
                </p>
              </td>
              <td className="text-center p-3">{toPersianNumber(monthly)}۰۰۰</td>
              <td className="text-center p-3">{toPersianNumber(final)}</td>
              <td className="text-center p-3">
                {toPersianNumber(prepayment || 0)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="">
        <button
          className="p-2 bg-cyan-600 text-white rounded-md mt-3"
          onClick={async () => await takeLoan({ amount, time: 6 })}
        >
          گرفتن وام
        </button>
        {/* {(success || loading) && (
      <button
        className={`p-2 px-3 mt-5 ${
          loading ? "bg-light-blue" : "bg-green-500"
        } text-black w-full rounded-md`}
      >
        {loading ? (
          <span>در حال بارگزاری...</span>
        ) : (
          <span>محصول با موفقیت بارگذاری شد!</span>
        )}
      </button>
    )} */}
      </div>
    </div>
  );
};

export default MaintineForm;
