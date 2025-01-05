import { registerDecorator, ValidationArguments, ValidationOptions, Validator, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ElectionCandidateEntity } from "src/entity";

@ValidatorConstraint({ name: 'IsPartyMemberOrVoter', async: false })
export class IsPartyMemberOrVoterConstraint implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
        const entity = validationArguments.object as ElectionCandidateEntity;
        return !!(entity.party_member || entity.voter);
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return 'Either candidate must be a party member or Independent';
    }
}

export function IsPartyMemberOrVoter(validationOptions: ValidationOptions) {
    return function (obj: object, propertyName: string) {
        registerDecorator({
            target: obj.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsPartyMemberOrVoterConstraint
        })
    }
}