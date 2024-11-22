/*
  Warnings:

  - You are about to drop the column `ValueLiquid` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `ValueTaxes` on the `Document` table. All the data in the column will be lost.
  - Added the required column `origin` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_liquid` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_taxes` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Document" DROP COLUMN "ValueLiquid",
DROP COLUMN "ValueTaxes",
ADD COLUMN     "origin" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "value_liquid" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "value_taxes" DECIMAL(65,30) NOT NULL;
