export interface Country {
  flags: {
    png: string
    svg: string
  }
  name: {
    common: string
    official: string
    nativeName: {
      [lang: string]: {
        official: string
        common: string
      }
    }
  }
  altSpellings: string[]
  idd: {
    root: string
  }
  [key: string]: any
}
