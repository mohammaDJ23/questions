import { FC } from 'react';
import { QuestionBox as QuestionBoxObj } from './types';

const QuestionBox: FC<QuestionBoxObj> = ({ head, body }) => {
  return (
    <div className="w-full mb-3 rounded-xl overflow-hidden border-solid border-2 border-gray-100 shadow-[0px_3px_8px_-1px_rgba(50,50,71,0.05),_0px_0px_1px_rgba(12,26,75,0.24)]">
      <div className="bg-white h-12 flex justify-between items-center p-3 rounded-md border-b-solid border-b-2 border-b-gray-100">
        {head}
      </div>

      <div className="p-4 bg-gray-50">{body}</div>
    </div>
  );
};

export default QuestionBox;
