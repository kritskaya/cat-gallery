export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Breed[];
};

type Breed = {
  id: string;
  name: string;
  weight: Weight;
  temperament: string;
  origin: string;
  life_span: string;
  wikipedia_url: string;
};

type Weight = {
  imperial: string;
  metric: string;
};

export type GetCatsResponse = Cat[];
