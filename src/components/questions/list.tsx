import { FC } from 'react';
import { useHistory } from '../../hooks/use-history';
import { Moment } from '../../utility/moment';

const List: FC = () => {
  const { push } = useHistory();

  return (
    <ul>
      {[
        {
          id: 1,
          topic: 'Some problem with reactjs',
          question: 'There are some really nasty problem with traditional state managment.',
          createdAt: '2001-4-3',
          updatedAt: '2001-4-3',
        },
        {
          id: 2,
          topic: 'Some problem with reactjs',
          question: 'There are some really nasty problem with traditional state managment.',
          createdAt: '2001-4-3',
          updatedAt: '2001-4-3',
        },
        {
          id: 3,
          topic: 'Some problem with reactjs',
          question: 'There are some really nasty problem with traditional state managment.',
          createdAt: '2001-4-3',
          updatedAt: '2001-4-3',
        },
        {
          id: 4,
          topic: 'Some problem with reactjs',
          question: 'There are some really nasty problem with traditional state managment.',
          createdAt: '2001-4-3',
          updatedAt: '2001-4-3',
        },
        {
          id: 5,
          topic: 'Some problem with reactjs',
          question: 'There are some really nasty problem with traditional state managment.',
          createdAt: '2001-4-3',
          updatedAt: '2001-4-3',
        },
      ].map((question, i) => (
        <li
          key={question.id}
          className="w-full mb-5 rounded-xl overflow-hidden border-solid border-2 border-gray-100 shadow-[0px_3px_8px_-1px_rgba(50,50,71,0.05),_0px_0px_1px_rgba(12,26,75,0.24)]"
        >
          <div className="bg-white h-12 flex justify-between items-center p-3 rounded-md border-b-solid border-b-2 border-b-gray-100">
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
          </div>

          <div className="p-4 bg-gray-50">
            <div>
              <p className="text-right text-sm">{question.question}</p>
            </div>

            <div className="mt-3">
              <button onClick={() => push(`/question/${question.id}`)} className="secondary-btn py-1.5 px-2 text-xs">
                مشاهده جزییات
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
