class Token {
  readonly chainId: number;
  readonly contract: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly name: string;
  readonly projectLink?: string;
  readonly icon?: string;

  constructor(
    chainId: number,
    contract: string,
    decimals: number,
    symbol: string,
    name: string,
    projectLink?: string,
    icon?: string,
  ) {
    this.chainId = chainId;
    this.contract = contract;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
    projectLink && (this.projectLink = projectLink);
    icon && (this.icon = icon);
  }

  public equals(other: Token) {
    if (this == other) {
      return true;
    }

    return this.chainId == other.chainId && this.contract == other.contract;
  }
}

export default Token;
