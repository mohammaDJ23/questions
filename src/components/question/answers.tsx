import React, { FC } from 'react';
import QuestionBox from '../question-box';
import { Moment } from '../../utility/moment';
import { useState } from '../../hooks/use-state';
import { Comment, Lists } from '../../store/reducers/lists/types';
import { useCommentReaction } from '../../hooks/use-comment-reaction';
import Spinner from '../spinner';

const Answers: FC = () => {
  const { lists, loading } = useState();
  const { like, dislike } = useCommentReaction();

  return (
    <>
      {loading.loadings[Lists.COMMENTS] ? (
        <Spinner styles={{ margin: '200px 0' }} />
      ) : (
        <>
          {lists.lists?.[Lists.COMMENTS]?.list.length !== 0 && loading.loadings[Lists.COMMENTS] !== undefined && (
            <div className="mb-3" dir="rtl">
              <span className="text-xl font-bold">پاسخ ها</span>
            </div>
          )}

          {(lists.lists?.[Lists.COMMENTS]?.list as Comment[])?.map((comment, i) => (
            <React.Fragment key={comment.id}>
              <QuestionBox
                head={
                  <>
                    <div className="flex justify-center items-center">
                      <div className="mr-16 flex justify-start items-center mr-12">
                        <div className="flex mr-6 justify-start items-center">
                          <span className="text-xs mr-1 text-slate-400">{comment.dislikes}</span>
                          <img src="/svgs/unhappy-gray.svg" alt="unhappy" />
                        </div>

                        <div className="flex justify-start items-center">
                          <span className="text-xs mr-1 text-slate-400">{comment.likes}</span>
                          <img src="/svgs/happy.svg" alt="happy" />
                        </div>
                      </div>

                      <div className="w-24">
                        <span>
                          <span className="text-xs font-bold">{Moment.format(comment.createdAt, 'l')}</span>
                          <span className="text-xs text-slate-400"> :تاریخ</span>
                        </span>
                      </div>

                      <div>
                        <span>
                          <span className="text-xs font-bold">{Moment.format(comment.createdAt, 'LT')}</span>
                          <span className="text-xs text-slate-400"> :ساعت</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <span className="mr-4 font-semibold text-base">{comment.username}</span>
                      <span>
                        <img src="/svgs/user-profile.svg" alt="user-profile" />
                      </span>
                    </div>
                  </>
                }
                body={
                  <>
                    <div>
                      <p className="text-right text-sm">{comment.comment}</p>
                    </div>

                    <div className="mt-3 flex justify-start items-center">
                      <button
                        onClick={event => {
                          event.preventDefault();
                          dislike(Lists.COMMENTS, i);
                        }}
                        className="py-1.5 text-red-500 px-2 text-xs flex justify-center items-center mr-3 rounded-md border-solid border-2 border-gray-200"
                      >
                        <span className="mr-1"> پاسخ خوب نبود</span>
                        <span>
                          <img src="/svgs/unhappy-red.svg" alt="unhappy" />
                        </span>
                      </button>

                      <button
                        onClick={event => {
                          event.preventDefault();
                          like(Lists.COMMENTS, i);
                        }}
                        className="py-1.5 px-2 text-green-500 text-xs flex justify-center items-center rounded-md border-solid border-2 border-gray-200"
                      >
                        <span className="mr-1"> پاسخ خوب بود</span>
                        <span>
                          <img src="/svgs/happy.svg" alt="unhappy" />
                        </span>
                      </button>
                    </div>
                  </>
                }
              />
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default Answers;
