"use client";
import { eventRegisterGtm } from "@/lib/utils";
import { useModalStore } from "@/store/modalStore";
import { Button } from "../ui/button";

export const CompanyTimeline = () => {
  const { openReservationModal } = useModalStore();

  const handleOpenReservationModal = () => {
    eventRegisterGtm("booking_start");
    openReservationModal();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24 space-y-12">
      <div className="flex justify-between">
        <h2 className="text-4xl text-white font-in-nunito font-semibold">
          Expertos en urología y salud íntima
        </h2>
        <div className="flex justify-center md:justify-start">
          <Button
            onClick={handleOpenReservationModal}
            className="cursor-pointer font-in-poppins bg-in-blue rounded-full  hover:bg-in-blue-dark py-5"
          >
            <div className="px-2 flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
              >
                <path
                  d="M4.66525 7.87418H3.57263C3.39235 7.87418 3.24485 7.72672 3.24485 7.5464V6.45378C3.24485 6.2735 3.39235 6.12599 3.57263 6.12599H4.66525C4.84553 6.12599 4.99304 6.2735 4.99304 6.45378V7.5464C4.99304 7.72672 4.84553 7.87418 4.66525 7.87418ZM7.61532 7.5464V6.45378C7.61532 6.2735 7.46786 6.12599 7.28754 6.12599H6.19492C6.01464 6.12599 5.86713 6.2735 5.86713 6.45378V7.5464C5.86713 7.72672 6.01464 7.87418 6.19492 7.87418H7.28754C7.46786 7.87418 7.61532 7.72672 7.61532 7.5464ZM10.2376 7.5464V6.45378C10.2376 6.2735 10.0901 6.12599 9.90982 6.12599H8.8172C8.63688 6.12599 8.48942 6.2735 8.48942 6.45378V7.5464C8.48942 7.72672 8.63688 7.87418 8.8172 7.87418H9.90982C10.0901 7.87418 10.2376 7.72672 10.2376 7.5464ZM7.61532 10.1687V9.07607C7.61532 8.89574 7.46786 8.74828 7.28754 8.74828H6.19492C6.01464 8.74828 5.86713 8.89574 5.86713 9.07607V10.1687C5.86713 10.349 6.01464 10.4965 6.19492 10.4965H7.28754C7.46786 10.4965 7.61532 10.349 7.61532 10.1687ZM4.99304 10.1687V9.07607C4.99304 8.89574 4.84553 8.74828 4.66525 8.74828H3.57263C3.39235 8.74828 3.24485 8.89574 3.24485 9.07607V10.1687C3.24485 10.349 3.39235 10.4965 3.57263 10.4965H4.66525C4.84553 10.4965 4.99304 10.349 4.99304 10.1687ZM10.2376 10.1687V9.07607C10.2376 8.89574 10.0901 8.74828 9.90982 8.74828H8.8172C8.63688 8.74828 8.48942 8.89574 8.48942 9.07607V10.1687C8.48942 10.349 8.63688 10.4965 8.8172 10.4965H9.90982C10.0901 10.4965 10.2376 10.349 10.2376 10.1687ZM12.8599 3.06666V12.6817C12.8599 13.4055 12.2726 13.9929 11.5488 13.9929H1.9337C1.20985 13.9929 0.622559 13.4055 0.622559 12.6817V3.06666C0.622559 2.3428 1.20985 1.75552 1.9337 1.75552H3.24485V0.33511C3.24485 0.154828 3.39235 0.00732422 3.57263 0.00732422H4.66525C4.84553 0.00732422 4.99304 0.154828 4.99304 0.33511V1.75552H8.48942V0.33511C8.48942 0.154828 8.63688 0.00732422 8.8172 0.00732422H9.90982C10.0901 0.00732422 10.2376 0.154828 10.2376 0.33511V1.75552H11.5488C12.2726 1.75552 12.8599 2.3428 12.8599 3.06666ZM11.5488 12.5178V4.3778H1.9337V12.5178C1.9337 12.6079 2.00746 12.6817 2.09759 12.6817H11.3849C11.475 12.6817 11.5488 12.6079 11.5488 12.5178Z"
                  fill="white"
                />
              </svg>
              <span>Reservar una cita</span>
            </div>
          </Button>
        </div>
      </div>
      <div className="flex text-white font-in-poppins">
        <article className="max-w-[420px]">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">
              Fundada en{" "}
              <span className="border px-4 rounded-full text-base ml-1">
                2020
              </span>
            </h3>
            <p className="text-lg">
              Insalud nació con el propósito de ofrecer una atención humana y
              accesible en salud sexual, estética y regenerativa.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
