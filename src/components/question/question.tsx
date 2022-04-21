import { FC } from 'react';
import QuestionBox from '../question-box';
import { Moment } from '../../utility/moment';
import { QuestionProps } from './types';
import { useState } from '../../hooks/use-state';
import { Items, Lists } from '../../store/reducers/lists/types';
import Spinner from '../spinner';
import { memo } from 'react';

const Question: FC<QuestionProps> = ({ question }) => {
  const { lists, loading } = useState();

  return loading.loadings[Items.QUESTION] ? (
    <Spinner />
  ) : (
    question && (
      <QuestionBox
        head={
          <>
            <div className="flex justify-center items-center">
              <div className="w-16 flex justify-start items-center">
                <div className="w-5">
                  <span className="text-xs text-slate-400">
                    {lists.lists?.[Lists.COMMENTS]?.list?.length || question.comments?.length || 0}
                  </span>
                </div>

                <div>
                  <img src="/svgs/comment.svg" alt="comment" />
                </div>
              </div>

              <div className="w-24">
                <span>
                  <span className="text-xs font-bold">{Moment.format(question.createdAt, 'l')}</span>
                  <span className="text-xs text-slate-400"> :تاریخ</span>
                </span>
              </div>

              <div>
                <span>
                  <span className="text-xs font-bold">{Moment.format(question.createdAt, 'LT')}</span>
                  <span className="text-xs text-slate-400"> :ساعت</span>
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <span className="mr-4 font-semibold text-base">{question.topic}</span>
              <span>
                <img src="/svgs/user-profile.svg" alt="user-profile" />
              </span>
            </div>
          </>
        }
        body={
          <div>
            <p className="text-right text-sm">{question.question}</p>
          </div>
        }
      />
    )
  );
};

export default memo(Question);
