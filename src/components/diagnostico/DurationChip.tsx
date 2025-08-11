
type DurationChipProps = {
  duracion: string;
};

export const DurationChip = ({ duracion }: DurationChipProps) => {
  return (
    <div className="font-medium rounded-full space-y-2">
        <p className="font-in-nunito text-lg">
            Duracion
        </p>
        <p className="font-in-poppins text-xs md:text-sm text-in-gray-base">
            {duracion}
        </p>
    </div>
  )
}
