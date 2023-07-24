export function calcRatio(wrapper) {
  const ost = wrapper.offsetTop;
  const osh = wrapper.offsetHeight;
  const percent = window.scrollY - ost;
  const ratio = percent / osh;

  if (ratio < 0) return 0;
  if (ratio > 1) return 1;
  return ratio;
}

export function calcValue(wrapper, values) {
  const ost = wrapper.offsetTop;
  const osh = wrapper.offsetHeight;
  const percent = window.scrollY - ost;
  const ratio = percent / osh;

  if (ratio < values[2].start) {
    return values[0];
  }

  if (ratio > values[2].end) {
    return values[1];
  }

  const secStart = osh * values[2].start;
  const secEnd = osh * values[2].end;

  const secPercent = percent - secStart;
  const secRatio = secPercent / (secEnd - secStart);

  const valueGap = values[1] - values[0];
  const valueRatio = valueGap * secRatio + values[0];

  return valueRatio;
}
