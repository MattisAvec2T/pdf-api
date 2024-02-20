import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  letters: LettersTable;
}

export interface LettersTable {
  id: Generated<number>;
  created_at: Generated<Date>;

  sender_name: string;
  sender_service: string | null;
  sender_address: string | null;
  sender_zipcode: string | null;
  sender_town: string | null;
  sender_phone: string | null;
  sender_mail: string | null;

  receiver_name: string;
  receiver_service: string | null;
  receiver_address: string | null;
  receiver_zipcode: string | null;
  receiver_town: string | null;

  letter_object: string;
  letter_body: string;
}

export type Letter = Selectable<LettersTable>;
export type NewLetter = Insertable<LettersTable>;
export type LetterUpdate = Updateable<LettersTable>;
