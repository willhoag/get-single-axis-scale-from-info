import getSingleAxisScaleFromInfo from './index.es6'
import tape from 'tape'

tape('should return the correct values', function (assert, done) {

  assert.deepEqual(getSingleAxisScaleFromInfo({
    from: 0,
    scale: 10,
    size: 1,
    position: 0
  }), {
    size: 10,
    position: 0
  })

  assert.deepEqual(getSingleAxisScaleFromInfo({
    from: 1,
    scale: 1.5,
    size: 2,
    position: 0
  }), {
    size: 3,
    position: -0.5
  })

  assert.deepEqual(getSingleAxisScaleFromInfo({
    from: 0,
    scale: 2,
    size: 1,
    position: 2
  }), {
    size: 2,
    position: 4
  })

  assert.deepEqual(getSingleAxisScaleFromInfo({
    from: 4,
    scale: 4,
    size: 4,
    position: 0
  }), {
    size: 16,
    position: -12
  })

  assert.deepEqual(getSingleAxisScaleFromInfo({
    from: 8,
    scale: 2,
    size: 4,
    position: 0
  }), {
    size: 8,
    position: -8
  })

  assert.deepEqual(getSingleAxisScaleFromInfo({
    from: 0,
    scale: 0.5,
    size: 4,
    position: 4
  }), {
    size: 2,
    position: 2
  })

  assert.end()
})
