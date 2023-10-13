export interface LocationProps {
  url: string;
  image: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  category: string;
  phone?: string;
  email?: string;
  hours?: string;
  artifact?: string;
}

export interface PinProps {
  location: LocationProps;
}

export default PinProps;
