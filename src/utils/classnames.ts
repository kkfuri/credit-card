function classnames(values: (string | null | false | undefined)[]) {
  return values.filter(Boolean).join(" ");
}

export default classnames;
