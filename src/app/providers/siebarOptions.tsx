const SideBar = () => {
  return (
    <div className="sticky top-5 w-64 border border-info/20 rounded p-2">
      <div className="mb-1 pb-1 border-b border-info/20">
        <h1 className="mb-2">میزان اعتبار</h1>
        <div className="flex justify-center mb-1 border border-info/20 p-1 rounded">
          <p>از</p>
          <input type="text" className="w-16 mx-2" />
          <p>تومان</p>
        </div>
        <div className="flex justify-center border border-info/20 p-1 rounded">
          <p>تا</p>
          <input type="text" className="w-16 mx-2" />
          <p>تومان</p>
        </div>
      </div>
      <div className="mb-1 pb-1 border-b border-info/20">
        <h1 className="mb-2">نوع ضمانت:</h1>
        <div className="grid grid-cols-2">
          <div className="flex gap-2 p-1">
            <label htmlFor="check">چک</label>
            <input type="checkbox" name="check" id="check" />
          </div>
          <div className="flex gap-2 p-1">
            <label htmlFor="softe">سفته</label>
            <input type="checkbox" name="softe" id="softe" />
          </div>
          <div className="flex gap-2 p-1">
            <label htmlFor="check">ضامن</label>
            <input type="checkbox" name="zamen" id="zamen" />
          </div>
          <div className="flex gap-2 p-1">
            <label htmlFor="check">سایر</label>
            <input type="checkbox" name="other" id="other" />
          </div>
        </div>
      </div>
      <div className="mb-1 pb-1 border-b border-info/20">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <label htmlFor="wallet">کیف پول</label>
            <input type="checkbox" name="wallet" id="wallet" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="cash">کارت نقدی</label>
            <input type="checkbox" name="cash" id="cash" />
          </div>
        </div>
      </div>
      <div className="mb-1 pb-1 border-b border-info/20">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <label htmlFor="verified">با اعتبار سنجی</label>
            <input type="checkbox" name="verified" id="verified" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="unverified">بدون اعبار سنجی</label>
            <input type="checkbox" name="unverified" id="unverified" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-2">قرارداد ها خاص</h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <label htmlFor="retired">بازنشسته</label>
            <input type="checkbox" name="retired" id="retired" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="cultural">فرهنگیان</label>
            <input type="checkbox" name="cultural" id="cultural" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
