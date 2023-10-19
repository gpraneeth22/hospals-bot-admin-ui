"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string
  firstName: string | null
  lastName: string | null
  userName: string
  city: string
  country: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "userName",
    header: "User Name",
  },
  {
    accessorKey: "city",
    header: "City"
  },
  {
    accessorKey: "country",
    header: "Country"
  }
]
