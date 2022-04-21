import { FC, memo } from 'react';
import { useAction } from '../../hooks/use-actions';
import { useState } from '../../hooks/use-state';
import { Forms, Inputs } from '../../forms/types';
import { Lists } from '../../store/reducers/lists/types';

const CreateComment: FC = () => {
  const { onChange, onSubmit } = useAction();
  const { forms, loading } = useState();
  const form = forms.forms[Forms.CREATE_NEW_COMMENT];

  return (
    <>
      {form && !loading.loadings[Lists.COMMENTS] && (
        <div dir="rtl">
          <div>
            <h3 className="text-xl font-bold">پاسخ خود را ثبت کنید</h3>
          </div>

          <form
            onSubmit={event => {
              event.preventDefault();
              onSubmit(Forms.CREATE_NEW_COMMENT);
            }}
          >
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
                <p className="text-red-500 text-xs italic">{form[Inputs.COMMENT].error}</p>
              </div>
            </div>

            <div>
              <button
                disabled={!forms.formValidation[Forms.CREATE_NEW_COMMENT] || loading.loadings[Forms.CREATE_NEW_COMMENT]}
                type="submit"
                className="primary-btn text-white text-xs text-xl font-bold py-2 px-20 rounded"
              >
                ارسال پاسخ
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default memo(CreateComment);
