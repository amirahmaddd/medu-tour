export enum HeroType {
  index,
  place,
  reserve,
  tour,
}
export interface HeroSliderItem {
  image: string;
  placeId: string;
  placeTitle: string;
}
export interface HeroDataType {
  title: string;
  description: string;
  image: string;
  link: {
    text: string;
    href: string;
  };
  slider: HeroSliderItem[];
}

export interface featureItem {
  title: string;
  description: string;
}
export interface IndexFeatureType {
  title: string;
  description: string;
  image: string;
  link: { text: string; href: string };
  list: featureItem[];
}

export interface place {
  id: string;
  title: string;
  description: string;
  image: string;
  mapUrl: string;
}
