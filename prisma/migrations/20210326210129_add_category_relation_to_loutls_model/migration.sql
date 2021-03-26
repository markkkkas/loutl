-- AlterTable
ALTER TABLE "loutls" ADD COLUMN     "category_id" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "loutls" ADD FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
