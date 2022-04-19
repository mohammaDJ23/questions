import { Forms, Inputs } from '../forms/types';
import { Input } from '../store/reducers/forms/types';

const tryValidation = (
  fn: (...args: any[]) => void,
): ((
  ...args: any[]
) => {
  error: string;
  isValid: boolean;
}) => {
  const ref = this;

  return function (...args) {
    try {
      fn.apply(ref, args);

      return {
        error: '',
        isValid: true,
      };
    } catch (error) {
      return {
        error: (error as any).message,
        isValid: false,
      };
    }
  };
};

function createNewQuestion(input: string, value: any) {
  switch (input) {
    case Inputs.TOPIC:
      if (!value.length) {
        throw new Error('Please insert a topic');
      }

      break;

    case Inputs.QUESTION:
      if (!value.length) {
        throw new Error('Please insert a question');
      }

      break;
  }
}

function createNewComment(input: string, value: any) {
  switch (input) {
    case Inputs.COMMENT:
      if (!value.length) {
        throw new Error('Please insert your comment');
      }

      break;
  }
}

export function formValidations(form: string, input: string, value: unknown) {
  switch (form) {
    case Forms.CREATE_NEW_QUESTION:
      return createNewQuestion(input, value);

    case Forms.CREATE_NEW_COMMENT:
      return createNewComment(input, value);
  }
}

export const inputValidation = tryValidation(formValidations);

export function isFormValid(formInfo: Input) {
  let isValid = true;

  for (const key in formInfo) {
    isValid = isValid && formInfo[key].isValid;
  }

  return isValid;
}
