import React, { FC } from 'react';
import QuestionBox from '../question-box';
import { Moment } from '../../utility/moment';
import { useAction } from '../../hooks/use-actions';
import { useState } from '../../hooks/use-state';
import { Forms, Inputs } from '../../forms/types';

const Answers: FC = () => {
  const { onChange, onSubmit } = useAction();
  const { forms } = useState();
  const form = forms.forms[Forms.CREATE_NEW_COMMENT];

  return (
    <>
      <div className="mb-3" dir="rtl">
        <span className="text-xl font-bold">پاسخ ها</span>
      </div>

      {[
        {
          id: 1,
          username: 'Mohammad',
          comment: 'Great question i agree with you',
          likes: 2,
          dislikes: 1,
          createdAt: '2001-4-3',
          updatedAt: '2001-4-3',
        },
        {
          id: 2,
          username: 'Mohammad',
          comment: 'Great question i agree with you',
          likes: 2,
          dislikes: 1,
          createdAt: '2001-4-3',
          updatedAt: '2001-4-3',
        },
        {
          id: 3,
          username: 'Mohammad',
          comment: 'Great question i agree with you',
          likes: 2,
          dislikes: 1,
          createdAt: '2001-4-3',
          updatedAt: '2001-4-3',
        },
      ].map((comment, i) => (
        <React.Fragment key={comment.id}>
          <QuestionBox
            head={
              <>
                <div className="flex justify-center items-center">
                  <div className="mr-16 flex justify-start items-center mr-12">
                    <div className="flex mr-6 justify-start items-center">
                      <span className="text-xs mr-1 text-slate-400">20</span>
                      <img src="/svgs/unhappy-gray.svg" alt="unhappy" />
                    </div>

                    <div className="flex justify-start items-center">
                      <span className="text-xs mr-1 text-slate-400">20</span>
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
                    }}
                    className="py-1.5 text-red-500 px-2 text-xs flex justify-center items-center mr-3 rounded-md border-solid border-2 border-gray-200"
                  >
                    <span className="mr-1"> مشاهده جزییات</span>
                    <span>
                      <img src="/svgs/unhappy-red.svg" alt="unhappy" />
                    </span>
                  </button>

                  <button
                    onClick={event => {
                      event.preventDefault();
                    }}
                    className="py-1.5 px-2 text-green-500 text-xs flex justify-center items-center rounded-md border-solid border-2 border-gray-200"
                  >
                    <span className="mr-1"> مشاهده جزییات</span>
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

      {form && (
        <div dir="rtl">
          <div>
            <h3 className="text-xl font-bold">پاسخ خود را ثبت کنید</h3>
          </div>

          <div>
            <div className="mb-6 text-right" dir="rtl">
              <label dir="rtl" className="text-right text-xs font-bold mb-2" htmlFor="replay">
                پاسخ خود را بنویسید
              </label>
              <textarea
                className="border-solid border-2 border-gray-100 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="replay"
                rows={10}
                value={form[Inputs.COMMENT].value}
                onChange={event => {
                  onChange(Forms.CREATE_NEW_COMMENT, Inputs.COMMENT, event.target.value);
                }}
              ></textarea>
              <p className="text-red-500 text-xs italic"></p>
            </div>
          </div>

          <div>
            <button
              onClick={event => {
                event.preventDefault();
                onSubmit(Forms.CREATE_NEW_COMMENT);
              }}
              disabled={!forms.formValidation[Forms.CREATE_NEW_COMMENT]}
              type="submit"
              className="primary-btn text-white text-xs text-xl font-bold py-2 px-20 rounded"
            >
              ارسال پاسخ
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Answers;
