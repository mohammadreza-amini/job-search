import { cleanup } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
