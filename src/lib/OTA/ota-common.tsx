// const overrideClass = (
//   className: string | undefined | null
// ): string | undefined | null =>
//   (className ?? "")
//     .split(" ")
//     .map((c) => (c[0] == "-" || c[0] == "!" ? c : `!${c}`) + " " )
//     .join("");

// export { overrideClass };

class ClassNameBuilder {
  private _class: string[];

  constructor(initClass?: string) {
    this._class = Array<string>(initClass ?? "");
  }

  add(value: string) {
    this._class.push(value);
  }

  addIf(value: string, validation: boolean) {
    if (validation) this._class.push(value);
  }

  public toString = (): string => this._class.join(" ");
}

export { ClassNameBuilder };
