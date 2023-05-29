"use client";
import moment from "moment";
import Link from "next/link";
import { FC, useState } from "react";
import UserPopup from "./userPopup";
import toPersianNumber from "@/utils/toPersianNumber";

interface Loan {
  id: number;
  amount: number;
  time: number;
  prepayment: number;
  percent: number;
  createdAt: string;
  updatedAt: string;
  takerId: number;
  productId: number;
  providerId: number;
}

interface Props {
  loan: any;
  query: string;
  getUser: (id: string) => Promise<any>;
}

const transition = {
  amount: "مقدار",
  time: "مدت زمان",
  prepayment: "پیش پرداخت",
  percent: "سود"
}

const Loan: FC<Props> = ({ loan, query, getUser }) => {
  const keys = Object.keys(loan);
  const excluded = ["At", "Id", "id"];
  const [openPopup, setOpenPopup] = useState(false);
  const [user, setUser] = useState<any>(null);

  const openUserPopup = async (id: string) => {
    const dbuser = await getUser(id);
    setUser(dbuser);
    setOpenPopup(true);
  };
  return (
    <div className="p-2 bg-form-blue">
      <div className="grid gap-1 grid-cols-2 text-light-blue">
        {keys.map(
          (key) =>
            !excluded.some((el) => key.includes(el)) && (
              <div className="p-1 bg-light-blue text-black rounded">
                <p>
                  {/* @ts-ignore */}
                  {transition[key].toString()}: {toPersianNumber(loan[key])}
                </p>
              </div>
            )
        )}
        {query == "takenLoan" ? (
          <button
            className="flex-1 bg-dark-blue rounded hover:bg-light-blue/50 hover:text-white"
            onClick={() => openUserPopup(loan.providerId)}
          >
            تهیه کننده
          </button>
        ) : query == "givenLoan" ? (
          <button
            className="bg-dark-blue p-1 rounded hover:bg-light-blue/50 hover:text-white"
            onClick={() => openUserPopup(loan.takerId)}
          >
            کاربر
          </button>
        ) : (
          ""
        )}
        <Link
          className="flex-1 bg-dark-blue p-1 rounded hover:bg-light-blue/50 hover:text-white"
          href={`/product/${loan.productId}`}
        >
          محصول
        </Link>
      </div>
      <div className="w-full mt-2">
        <div className="bg-dark-blue p-1 text-center rounded" style={{direction: "ltr"}}>
          {moment(loan.createdAt).fromNow()}
        </div>
        {openPopup && user && (
          <UserPopup closePopup={() => setOpenPopup(false)} user={user} />
        )}
      </div>
    </div>
  );
};

export default Loan;
