const Sidebar = () => {
  const providers = [
    { text: "ازکی", id: "azki" },
    { text: "لندو", id: "lendo" },
    { text: "بانک ملت", id: "mellatBank" },
    { text: "بانک آینده", id: "furuteBank" },
  ];
  return (
    <div className="sticky top-5 w-64 border border-info/20 rounded p-2">
      <div className="mb-1 pb-1 border-b border-info/20">
        <h1 className="mb-2">نوع فروشگاه:</h1>
        <div className="flex gap-3">
          <div className="flex gap-2">
            <label htmlFor="online">آنلاین</label>
            <input type="checkbox" name="online" id="online" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="offline">آفلاین</label>
            <input type="checkbox" name="offline" id="offline" />
          </div>
        </div>
      </div>
      <div className="mb-1 pb-1 border-b border-info/20">
        <h1 className="mb-2">نوع ضمانت:</h1>
        <div className="grid grid-cols-2">
          <div className="flex gap-2">
            <label htmlFor="check">چک</label>
            <input type="checkbox" name="check" id="check" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="online">سفته</label>
            <input type="checkbox" name="softe" id="softe" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="online">ضامن</label>
            <input type="checkbox" name="zamen" id="zamen" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="offline">سایر</label>
            <input type="checkbox" name="other" id="other" />
          </div>
        </div>
      </div>
      <div className="mb-1 pb-1 border-b border-info/20">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <label htmlFor="prepayment">با پیش پرداخت</label>
            <input type="checkbox" name="prepayment" id="prepayment" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="woprepayment">بدون پیش پرداخت</label>
            <input type="checkbox" name="woprepayment" id="offline" />
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="mb-2">وام دهندگان</h1>
        <input
          type="text"
          placeholder="جستجوی تهیه کننده..."
          className="rounded w-full mb-2 shadow"
        />
        <div className="grid grid-cols-2 gap-3">
          {providers.map(({ text, id }) => (
            <div className="flex gap-2" key={id}>
              <label htmlFor="online">{text}</label>
              <input type="checkbox" name={id} id={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
