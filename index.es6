// TODO -- Consider remane to get-scale-info-single-axis or get-scale-info
export default function getSingleAxisScaleFromInfo ({from, scale, size, position}) {
  return {
    position: from + (position - from) * scale,
    size: size * scale
  }
}
