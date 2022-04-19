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
        <li key={question.id} className="w-full mb-5 rounded-xl overflow-hidden border-solid border-2 border-gray-100">
          <div className="bg-white h-10 flex justify-between items-center p-3 rounded-md border-b-solid border-b-2 border-b-gray-100">
            <div className="flex justify-center items-center">
              <div className="w-16 flex justify-start items-center">
                <div className="w-5">
                  <p className="text-xs text-slate-400">20</p>
                </div>

                <div>
                  <img src="/svgs/comment.svg" alt="comment" />
                </div>
              </div>

              <div className="w-24">
                <p>
                  <span className="text-xs font-bold">{Moment.format(question.createdAt, 'l')}</span>
                  <span className="text-xs text-slate-400"> :تاریخ</span>
                </p>
              </div>

              <div>
                <p>
                  <span className="text-xs font-bold">{Moment.format(question.createdAt, 'LT')}</span>
                  <span className="text-xs text-slate-400"> :ساعت</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <span className="mr-4 font-semibold text-base">{question.topic}</span>
              <span>
                <img src="/svgs/user-profile.svg" alt="user-profile" />
              </span>
            </div>
          </div>

          <div className="bg-white p-4 bg-gray-50">
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
