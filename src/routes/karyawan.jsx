import { createFileRoute } from '@tanstack/react-router'
import Karyawan from '../pages/Karyawan'

export const Route = createFileRoute('/karyawan')({
  component: Karyawan,
})
