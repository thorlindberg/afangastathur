interface TabProps {
  category: {
    name: string;
    selection: string;
    icon: string;
    type: string;
    size: number;
  };
  index: number;
  handleTabPress: (index: number) => void;
  currentSelection: number;
}

export default TabProps;
