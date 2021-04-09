interface PartnersListItemProps {
  id: string;
  isMitigated: boolean;
  name?: string;
  iconName: string;
  title: string;
  co2value: number;
  onPress: () => void;
}

export default PartnersListItemProps;
