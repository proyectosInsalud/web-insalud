import { TitleGroup } from "./TitleGroup"

type InfoPanelProps = {
  title: string;
};

export const InfoPanel = ({ title }: InfoPanelProps) => {
  return (
    <TitleGroup title={title} />
  )
}
