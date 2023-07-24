"use client";
import { Checkbox, Accordion, Divider } from "@mantine/core";
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
        <Accordion defaultValue="type">
          <Accordion.Item value="type">
            <Accordion.Control>نوع فروشگاه</Accordion.Control>
            <Accordion.Panel>
              <Checkbox label="آنلاین" />
              <Divider my="sm" variant="dashed" />
              <Checkbox label="آفلاین" />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="bail">
            <Accordion.Control>نوع ضمانت</Accordion.Control>
            <Accordion.Panel>
              <Checkbox label="چک" />
              <Divider my="sm" variant="dashed" />

              <Checkbox label="سفته" />
              <Divider my="sm" variant="dashed" />

              <Checkbox label="ضامن" />
              <Divider my="sm" variant="dashed" />
              <Checkbox label="سایر" />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="pish">
            <Accordion.Control>نوع پیش پرداخت</Accordion.Control>
            <Accordion.Panel>
              <Checkbox
                label={<p className="mr-2">با پیش پرداخت</p>}
                className={`mb-2`}
              />
              <Divider my="sm" variant="dashed" />

              <Checkbox label="بدون پیش پرداخت" />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="providers">
            <Accordion.Control>ارائه دهنده</Accordion.Control>
            <Accordion.Panel>
              {providers.map(({ text, id }) => (
                <div>
                  <Checkbox label={text} />
                  <Divider my="sm" variant="dashed" />
                </div>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
