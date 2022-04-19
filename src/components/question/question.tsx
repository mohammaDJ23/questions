import { FC } from 'react';
import QuestionBox from '../question-box';
import { Moment } from '../../utility/moment';

const Question: FC = () => {
  return (
    <QuestionBox
      head={
        <>
          <div className="flex justify-center items-center">
            <div className="w-16 flex justify-start items-center">
              <div className="w-5">
                <span className="text-xs text-slate-400">20</span>
              </div>

              <div>
                <img src="/svgs/comment.svg" alt="comment" />
              </div>
            </div>

            <div className="w-24">
              <span>
                <span className="text-xs font-bold">{Moment.format(new Date(), 'l')}</span>
                <span className="text-xs text-slate-400"> :تاریخ</span>
              </span>
            </div>

            <div>
              <span>
                <span className="text-xs font-bold">{Moment.format(new Date(), 'LT')}</span>
                <span className="text-xs text-slate-400"> :ساعت</span>
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <span className="mr-4 font-semibold text-base">{'title'}</span>
            <span>
              <img src="/svgs/user-profile.svg" alt="user-profile" />
            </span>
          </div>
        </>
      }
      body={
        <div>
          <p className="text-right text-sm">{'some quetion'}</p>
        </div>
      }
    />
  );
};

export default Question;
