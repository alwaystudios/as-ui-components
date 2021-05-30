declare type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }

declare type Coordinates = {
  x: number
  y: number
}

declare type MenuOption = {
  text: string
  onClick: () => void
}
