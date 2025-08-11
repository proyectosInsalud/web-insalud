type TitleGroupProps = {
  title: string;
};

export const TitleGroup = ({ title }: TitleGroupProps) => {
  return (
    <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold font-in-nunito">{title}</h1>
        <p className="text-base md:text-lg text-gray-600 font-in-poppins">Evaluación integral y plan inicial en la primera sesión</p>
    </div>
  )
}
