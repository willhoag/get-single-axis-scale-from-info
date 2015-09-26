import getSingleAxisScaleFromInfo from './'

getSingleAxisScaleFromInfo({
  from: 8,
  scale: 2,
  size: 4,
  position: 0
}) // { size: 8, position: -8 }

getSingleAxisScaleFromInfo({
  from: 0,
  scale: 0.5,
  size: 4,
  position: 4
}) // { size: 2, position: 2 }
