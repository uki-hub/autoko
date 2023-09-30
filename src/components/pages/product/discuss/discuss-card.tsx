import OtaInput from "../../../UI-OTA/ota-input.tsx";
import OtaLine from "../../../UI-OTA/ota-line.tsx";
import Card from "../../../UI/card.tsx";

const DiscussCard = () => {
  const more = (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--color-icon-enabled, #5d6ba2)"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.48 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.5 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
    </svg>
  );

  return (
    <Card className="flex flex-col text-sm !p-0 !pt-2.5">
      <div className="flex flex-row items-center gap-2 pl-2">
        <div className="w-8 h-8 bg-secondary rounded-full overflow-hidden" />
        <span className="font-semibold">Uki</span>
        <span className="text-gray-500 mr-auto">Jun 2023</span>
        {more}
      </div>
      <div className="ml-12 mb-2">black red switch ready?</div>
      <OtaLine className="!bg-buttonColor" width={0.8} />
      <div className="bg-gray-100 !pb-3">
        <div className="pl-12 !pt-2.5">
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-full overflow-hidden" />
            <span className="font-semibold">Tokolaptopid</span>
            <span className="text-gray-500 mr-auto">Jun 2023</span>
            {more}
          </div>
          <div className="ml-10 mb-2">
            Ready kak, silahkan langsung order ya
          </div>
        </div>
        <div className="pl-12 !pt-2.5 ">
          <div className="flex flex-row items-center gap-2 pr-2">
            <div className="min-w-[2rem] w-8 h-8 bg-secondary rounded-full overflow-hidden" />
            <OtaInput className="!w-full" placeholder="Balas diskusi..." />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DiscussCard;
