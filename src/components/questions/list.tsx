import { memo } from 'react';
import { FC } from 'react';
import { useHistory } from '../../hooks/use-history';
import { useState } from '../../hooks/use-state';
import { Question } from '../../store/reducers/lists/types';
import { Lists } from '../../store/reducers/lists/types';
import { Moment } from '../../utility/moment';
import EmptyList from '../empty-list';
import Questionbox from '../question-box';
import Spinner from '../spinner';

const List: FC = () => {
  const { push } = useHistory();
  const { lists, loading } = useState();

  return (
    <>
      {loading.loadings[Lists.QUESTIONS] ? (
        <Spinner />
      ) : (
        <>
          {lists.lists?.[Lists.QUESTIONS]?.list?.length === 0 ? (
            <EmptyList />
          ) : (
            <ul>
              {(lists.lists?.[Lists.QUESTIONS]?.list as Question[])?.map((question, i) => (
                <li key={question.id}>
                  <Questionbox
                    head={
                      <>
                        <div className="flex justify-center items-center">
                          <div className="w-16 flex justify-start items-center">
                            <div className="w-5">
                              <span className="text-xs text-slate-400">
                                {question.comments ? question.comments.length : 0}
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
                      <>
                        <div>
                          <p className="text-right text-sm">{question.question}</p>
                        </div>

                        <div className="mt-3">
                          <button
                            onClick={() => push(`/question/${question.id}`)}
                            className="secondary-btn py-1.5 px-2 text-xs"
                          >
                            مشاهده جزییات
                          </button>
                        </div>
                      </>
                    }
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default memo(List);
