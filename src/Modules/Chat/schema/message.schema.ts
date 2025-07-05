import { sql } from "drizzle-orm";
import { datetime, int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const messaheSchema = mysqlTable("message", {
	id: int().autoincrement().primaryKey(),
	sender_id: varchar({ length: 255 }).notNull(),
	receiver_id: varchar({ length: 255 }).notNull(),
	message: varchar({ length: 1000 }).notNull(),
	created_at: datetime()
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updated_at: timestamp()
		.default(sql`CURRENT_TIMESTAMP`)
		.onUpdateNow(),
});

export type MessageAttributes = typeof messaheSchema.$inferInsert;
