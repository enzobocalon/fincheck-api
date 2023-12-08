import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountsRepo: BankAccountsRepository) {}

  async validate(userId: string, bankAccountId: string) {
    const isOwner = await this.bankAccountsRepo.findFirst({
      where: {
        userId,
        id: bankAccountId,
      },
      select: {
        user: true,
      },
    });

    console.log(isOwner);

    if (!isOwner) {
      throw new NotFoundException('Bank Account not found.');
    }
  }
}
