import { db } from "../config/database.config";
import { Letter, NewLetter } from "../config/database.types";

export async function getAllLetters(): Promise<object[] | null> {
  return await db.selectFrom("letters").selectAll().execute();
}

export async function getLetterById(id: number): Promise<Letter | undefined> {
  return await db
    .selectFrom("letters")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst();
}

export async function createLetter(letterData: NewLetter): Promise<object> {
  const result = await db
    .insertInto("letters")
    .values(letterData)
    .returningAll()
    .executeTakeFirstOrThrow();
  if (result) {
    return {
      message: "successefully created",
      id: result.id,
    };
  } else {
    throw new Error("Query failed");
  }
}

export async function deleteLetterById(id: number): Promise<object> {
  const result = await db
    .deleteFrom("letters")
    .where("id", "=", id)
    .executeTakeFirst();
  if (result) {
    return {
      message: "successefully deleted",
      id: id,
    };
  } else {
    throw new Error("Query failed");
  }
}
