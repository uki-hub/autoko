import { useEffect, useRef, useState } from "react";
import OtaButtonOutlined from "../../../UI-OTA/ota-button-outlined.tsx";
import Card from "../../../UI/card.tsx";
import useAutosizeTextArea from "../../../../hooks/useAutoSizeTextArea.tsx";

const DiscussBar = () => {
  const newdiscuss = (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="var(--color-icon-enabled, #bec4da)"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.116 13.384c.235.234.552.366.884.366a.75.75 0 110 1.5 2.75 2.75 0 01-2.75-2.75V6A2.75 2.75 0 016 3.25h8A2.75 2.75 0 0116.75 6a.75.75 0 11-1.5 0A1.25 1.25 0 0014 4.75H6A1.25 1.25 0 004.75 6v6.5c0 .332.132.65.366.884zm2.94-5.329A2.75 2.75 0 0110 7.25h8A2.75 2.75 0 0120.75 10v10.5a.76.76 0 01-.75.75.72.72 0 01-.42-.13l-2.81-1.87H10a2.75 2.75 0 01-2.75-2.75V10c0-.73.29-1.429.805-1.945zm2.388 6.277a1 1 0 101.111-1.663 1 1 0 00-1.11 1.662zm3 0a1 1 0 101.111-1.663 1 1 0 00-1.11 1.662zm3 0a1 1 0 101.111-1.663 1 1 0 00-1.11 1.662z"
      ></path>
    </svg>
  );

  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, [showInput])

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <label className="text-secondary">
            ada <span className="font-semibold text-primaryVariant">32</span>{" "}
            Diskusi untuk produk&nbsp;
            <span className="font-semibold text-primaryVariant">
              Fantech MK857 Maxfit61 Wired Mechanical Gaming Keyboard
            </span>
          </label>
          <label className="text-xs text-highlightColor">
            Ada pertanyaan? Diskusikan dengan penjual atau pengguna lain
          </label>
        </div>

        <div
          onClick={() => {
            setShowInput(true);
          }}
        >
          <Card className="flex flex-row items-center !p-1 font-semibold cursor-pointer bg-primary text-onPrimary">
            {newdiscuss} Tulis Pertanyaan
          </Card>
        </div>
      </div>
      {showInput && (
        <Card
          className={`flex flex-col items-end gap-4 ${
            focus && "border-secondary"
          }`}
        >
          <textarea
            ref={textAreaRef}
            className="!outline-none !border-none w-full resize-none text-base"
            rows={1}
            placeholder="Apa yang anda ingin tanyakan pada produk ini?"
            onChange={handleChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <OtaButtonOutlined className="!px-8">Kirim</OtaButtonOutlined>
        </Card>
      )}
    </>
  );
};

export default DiscussBar;
