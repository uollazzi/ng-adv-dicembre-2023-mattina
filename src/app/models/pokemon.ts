export class NuovoPokemonCatturatoDto {
  constructor(
    public userId: number,
    public pokemon: Pokemon
  ) {

  }
}

export interface PokemonCatturato {
  id: number;
  userId: number;
  pokemon: Pokemon;
}

export interface SearchResponse {
  data: Pokemon[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export interface CardResponse {
  data: Pokemon
}

export interface Pokemon {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  level?: string
  hp: string
  types: string[]
  evolvesFrom?: string
  abilities?: Ability[]
  attacks: Attack[]
  weaknesses?: Weakness[]
  resistances?: Resistance[]
  retreatCost?: string[]
  convertedRetreatCost?: number
  set: Set
  number: string
  artist: string
  rarity: string
  flavorText?: string
  nationalPokedexNumbers: number[]
  legalities: Legalities2
  images: Images2
  tcgplayer?: Tcgplayer
  cardmarket: Cardmarket
  rules?: string[]
}

export interface Ability {
  name: string
  text: string
  type: string
}

export interface Attack {
  name: string
  cost: string[]
  convertedEnergyCost: number
  damage: string
  text: string
}

export interface Weakness {
  type: string
  value: string
}

export interface Resistance {
  type: string
  value: string
}

export interface Set {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legalities
  releaseDate: string
  updatedAt: string
  images: Images
  ptcgoCode?: string
}

export interface Legalities {
  unlimited: string
}

export interface Images {
  symbol: string
  logo: string
}

export interface Legalities2 {
  unlimited: string
}

export interface Images2 {
  small: string
  large: string
}

export interface Tcgplayer {
  url: string
  updatedAt: string
  prices: Prices
}

export interface Prices {
  normal?: Normal
  holofoil?: Holofoil
  reverseHolofoil?: ReverseHolofoil
  "1stEditionHolofoil"?: N1stEditionHolofoil
  unlimitedHolofoil?: UnlimitedHolofoil
}

export interface Normal {
  low: number
  mid: number
  high: number
  market: number
  directLow?: number
}

export interface Holofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow?: number
}

export interface ReverseHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow?: number
}

export interface N1stEditionHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: any
}

export interface UnlimitedHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: number
}

export interface Cardmarket {
  url: string
  updatedAt: string
  prices: Prices2
}

export interface Prices2 {
  averageSellPrice: number
  lowPrice: number
  trendPrice: number
  germanProLow: number
  suggestedPrice: number
  reverseHoloSell: number
  reverseHoloLow: number
  reverseHoloTrend: number
  lowPriceExPlus: number
  avg1: number
  avg7: number
  avg30: number
  reverseHoloAvg1: number
  reverseHoloAvg7: number
  reverseHoloAvg30: number
}
