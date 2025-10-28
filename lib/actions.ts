'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from 'postgres';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// export type State = {
//   errors?: {
//     customerId?: string[];
//     amount?: string[];
//     status?: string[];
//   };
//   message?: string | null;
// };

// prevState: State, 
 
export async function createExpense(formData: FormData) {
  // Validate form fields using Zod
  // const validatedFields = CreateInvoice.safeParse({
  //   customerId: formData.get("customerId"),
  //   amount: formData.get("amount"),
  //   status: formData.get("status"),
  // });

  // console.log(validatedFields);

  // If form validation fails, return errors early. Otherwise, continue.
  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //     message: "Missing Fields. Failed to Create Invoice.",
  //   };
  // }

  // const { customerId, amount, status } = validatedFields.data;
  // const amountInCents = amount * 100;
  // const date = new Date().toISOString().split("T")[0];

  const description = formData.get("description")
  const value = formData.get("value")
  const day = formData.get("day")
  const month = formData.get("month")

  try {
    await sql`
      INSERT INTO expenses (description, value, day, month)
      VALUES (${description}, ${value}, ${day}, ${month})
    `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  console.log(description)

  revalidatePath("/");
  redirect("/");
}

export async function updateExpense(id: number, formData: FormData) {
  
  const description = formData.get("description")
  const value = formData.get("value")
  const day = formData.get("day")
  const month = formData.get("month")

  try {
    await sql`
        UPDATE expenses
        SET description = ${description}, value = ${value}, day = ${day}, month = ${month}
        WHERE id = ${id}
      `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return { message: "Database Error: Failed to Update expense." };
  }

  revalidatePath("/");
  redirect("/");
}


export async function deleteExpense(id: number) {
  await sql`DELETE FROM expenses WHERE id = ${id}`;
  revalidatePath("/");    
}





