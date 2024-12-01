-- DropForeignKey
ALTER TABLE "Signal" DROP CONSTRAINT "Signal_id_fkey";

-- AddForeignKey
ALTER TABLE "Signal" ADD CONSTRAINT "Signal_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
